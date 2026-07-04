import fs from 'fs';
import path from 'path';

function getMp3Duration(filePath) {
  const data = fs.readFileSync(filePath);
  
  const bitrates_m1_l3 = [0, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 0];
  const bitrates_m2_l3 = [0, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160, 0];
  
  const samplerates_m1 = [44100, 48000, 32000, 0];
  const samplerates_m2 = [22050, 24000, 16000, 0];
  const samplerates_m25 = [11025, 12000, 8000, 0];
  
  let totalSamples = 0;
  let sampleRate = 0;
  
  let i = 0;
  const n = data.length;
  while (i < n - 4) {
    if (data[i] === 0xFF && (data[i+1] & 0xE0) === 0xE0) {
      const b1 = data[i+1];
      const b2 = data[i+2];
      
      const version = (b1 & 0x18) >> 3;
      const layer = (b1 & 0x06) >> 1;
      
      if (layer === 1 && (version === 0 || version === 2 || version === 3)) {
        const bitrateIdx = (b2 & 0xF0) >> 4;
        const samplerateIdx = (b2 & 0x0C) >> 2;
        const padding = (b2 & 0x02) >> 1;
        
        let bitrate = 0;
        let sRate = 0;
        let samplesPerFrame = 0;
        
        if (version === 3) { // MPEG 1
          bitrate = bitrates_m1_l3[bitrateIdx] * 1000;
          sRate = samplerates_m1[samplerateIdx];
          samplesPerFrame = 1152;
        } else { // MPEG 2 or 2.5
          bitrate = bitrates_m2_l3[bitrateIdx] * 1000;
          if (version === 2) {
            sRate = samplerates_m2[samplerateIdx];
          } else {
            sRate = samplerates_m25[samplerateIdx];
          }
          samplesPerFrame = 576;
        }
        
        if (bitrate > 0 && sRate > 0) {
          let frameSize = 0;
          if (version === 3) {
            frameSize = Math.floor((144 * bitrate) / sRate) + padding;
          } else {
            frameSize = Math.floor((72 * bitrate) / sRate) + padding;
          }
          
          if (frameSize > 0) {
            totalSamples += samplesPerFrame;
            if (sampleRate === 0) {
              sampleRate = sRate;
            }
            i += frameSize;
            continue;
          }
        }
      }
    }
    i++;
  }
  
  if (sampleRate > 0) {
    return totalSamples / sampleRate;
  }
  return 0;
}

function generateBgmWav(outputPath) {
  const sampleRate = 44100;
  const durationSec = 180;
  const numChannels = 2;
  const bitsPerSample = 16;
  const blockAlign = (numChannels * bitsPerSample) / 8; // 4
  const byteRate = sampleRate * blockAlign; // 176400
  const numSamples = sampleRate * durationSec; // 7938000
  const dataSize = numSamples * blockAlign; // 31752000
  const fileSize = 36 + dataSize; // 31752036
  
  const header = Buffer.alloc(44);
  header.write('RIFF', 0);
  header.writeUInt32LE(fileSize, 4);
  header.write('WAVE', 8);
  header.write('fmt ', 12);
  header.writeUInt32LE(16, 16);
  header.writeUInt16LE(1, 20);
  header.writeUInt16LE(numChannels, 22);
  header.writeUInt32LE(sampleRate, 24);
  header.writeUInt32LE(byteRate, 28);
  header.writeUInt16LE(blockAlign, 32);
  header.writeUInt16LE(bitsPerSample, 34);
  header.write('data', 36);
  header.writeUInt32LE(dataSize, 40);
  
  const voices = [
    { N_l: 19800, N_r: 19802, lfo_p: 90, lfo_phase: 0, vol: 0.15 },
    { N_l: 29666, N_r: 29668, lfo_p: 60, lfo_phase: Math.PI / 4, vol: 0.12 },
    { N_l: 39600, N_r: 39603, lfo_p: 45, lfo_phase: Math.PI / 2, vol: 0.10 },
    { N_l: 47093, N_r: 47095, lfo_p: 90, lfo_phase: Math.PI, vol: 0.10 },
    { N_l: 59333, N_r: 59336, lfo_p: 30, lfo_phase: Math.PI / 3, vol: 0.08 },
    { N_l: 70560, N_r: 70562, lfo_p: 60, lfo_phase: -Math.PI / 4, vol: 0.08 },
    { N_l: 88898, N_r: 88901, lfo_p: 45, lfo_phase: -Math.PI / 2, vol: 0.06 },
    { N_l: 118665, N_r: 118668, lfo_p: 90, lfo_phase: 0, vol: 0.04 }
  ];
  
  const outDir = path.dirname(outputPath);
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }
  
  const fd = fs.openSync(outputPath, 'w');
  fs.writeSync(fd, header, 0, header.length);
  
  const chunkSize = sampleRate;
  const chunkBuffer = Buffer.alloc(chunkSize * blockAlign);
  
  for (let chunkStart = 0; chunkStart < numSamples; chunkStart += chunkSize) {
    const chunkEnd = Math.min(chunkStart + chunkSize, numSamples);
    let offset = 0;
    
    for (let i = chunkStart; i < chunkEnd; i++) {
      const t = i / sampleRate;
      let sample_l = 0;
      let sample_r = 0;
      
      for (const v of voices) {
        const f_l = v.N_l / 180;
        const f_r = v.N_r / 180;
        const lfo_val = Math.sin(2 * Math.PI * t / v.lfo_p + v.lfo_phase);
        const vol_mod = 0.5 + 0.4 * lfo_val;
        
        sample_l += v.vol * vol_mod * Math.sin(2 * Math.PI * f_l * t);
        sample_r += v.vol * vol_mod * Math.sin(2 * Math.PI * f_r * t);
      }
      
      const val_l = Math.max(-32768, Math.min(32767, Math.floor(sample_l * 32767 * 0.15)));
      const val_r = Math.max(-32768, Math.min(32767, Math.floor(sample_r * 32767 * 0.15)));
      
      chunkBuffer.writeInt16LE(val_l, offset);
      chunkBuffer.writeInt16LE(val_r, offset + 2);
      offset += 4;
    }
    
    fs.writeSync(fd, chunkBuffer, 0, offset);
  }
  
  fs.closeSync(fd);
  console.log(`Generated looping BGM at ${outputPath}`);
}

function generateDurations() {
  const voiceoverDir = 'public/voiceover';
  const files = fs.readdirSync(voiceoverDir)
    .filter(file => file.endsWith('.mp3'))
    .sort();
  
  const scenes = [];
  let totalFrames = 0;
  
  const allowedScenes = [1, 4, 5, 6, 7, 8, 12, 13, 15, 17, 30];
  
  for (const file of files) {
    const filePath = path.join(voiceoverDir, file);
    
    const match = file.match(/^scene-(\d+)-(.+)\.mp3$/);
    if (!match) continue;
    
    const sceneNum = parseInt(match[1], 10);
    if (!allowedScenes.includes(sceneNum)) continue;
    
    const durationSec = getMp3Duration(filePath);
    const durationFrames = Math.ceil(durationSec * 30);
    const sceneName = match[2];
    
    scenes.push({
      num: sceneNum,
      fileName: file,
      name: sceneName,
      durationSec,
      durationFrames
    });
    
    totalFrames += durationFrames;
  }
  
  scenes.sort((a, b) => a.num - b.num);
  
  const content = `// Generated by prebuild.mjs - DO NOT EDIT MANUALLY
export interface SceneDuration {
  num: number;
  fileName: string;
  name: string;
  durationSec: number;
  durationFrames: number;
}

export const SCENE_DURATIONS: SceneDuration[] = ${JSON.stringify(scenes, null, 2)};

export const TOTAL_FRAMES = ${totalFrames};
`;
  
  const outputDir = 'src/DojoDemo';
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  fs.writeFileSync(path.join(outputDir, 'durations.ts'), content);
  console.log(`Generated durations.ts with ${scenes.length} scenes. Total frames: ${totalFrames}`);
}

// Execute prebuild actions
try {
  generateBgmWav('public/bgm.wav');
  generateDurations();
} catch (err) {
  console.error('Prebuild failed:', err);
  process.exit(1);
}

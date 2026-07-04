import math
import struct
import wave
import os

def generate_bgm(file_path):
    sample_rate = 44100
    duration_secs = 180
    num_samples = sample_rate * duration_secs

    # Define voices
    # N is the number of cycles in 180 seconds.
    # Target frequencies: A2 (110Hz), E3 (164.81Hz), A3 (220Hz), C4 (261.63Hz), E4 (329.63Hz), G4 (392Hz), B4 (493.88Hz), E5 (659.25Hz)
    voices = [
        # (N_left, N_right, LFO_period, LFO_phase, vol)
        (19800, 19802, 90, 0, 0.15),        # A2
        (29666, 29668, 60, math.pi/4, 0.12),   # E3
        (39600, 39603, 45, math.pi/2, 0.10),   # A3
        (47093, 47095, 90, math.pi, 0.10),     # C4
        (59333, 59336, 30, math.pi/3, 0.08),   # E4
        (70560, 70562, 60, -math.pi/4, 0.08),  # G4
        (88898, 88901, 45, -math.pi/2, 0.06),  # B4
        (118665, 118668, 90, 0, 0.04),      # E5
    ]
    
    # Ensure directory exists
    os.makedirs(os.path.dirname(file_path), exist_ok=True)
    
    wav = wave.open(file_path, 'wb')
    wav.setnchannels(2) # Stereo
    wav.setsampwidth(2) # 2 bytes = 16-bit
    wav.setframerate(sample_rate)

    chunk_size = 44100 # 1 second chunks
    for chunk_start in range(0, num_samples, chunk_size):
        chunk_end = min(chunk_start + chunk_size, num_samples)
        frames = []
        for i in range(chunk_start, chunk_end):
            t = i / sample_rate
            
            sample_l = 0.0
            sample_r = 0.0
            
            for N_l, N_r, lfo_p, lfo_phase, vol in voices:
                # Carrier frequencies
                f_l = N_l / 180.0
                f_r = N_r / 180.0
                
                # Slow LFO amplitude modulation
                lfo_val = math.sin(2 * math.pi * t / lfo_p + lfo_phase)
                vol_mod = 0.5 + 0.4 * lfo_val
                
                # Soft sine waves
                sample_l += vol * vol_mod * math.sin(2 * math.pi * f_l * t)
                sample_r += vol * vol_mod * math.sin(2 * math.pi * f_r * t)
            
            # Apply a master gain limit to prevent clipping
            # Output level is low (0.15 scale factor)
            val_l = int(max(-32768, min(32767, sample_l * 32767 * 0.15)))
            val_r = int(max(-32768, min(32767, sample_r * 32767 * 0.15)))
            
            frames.extend([val_l, val_r])
            
        data = struct.pack('<' + 'h' * len(frames), *frames)
        wav.writeframes(data)
        
    wav.close()
    print(f"BGM generated successfully at {file_path}!")

if __name__ == "__main__":
    generate_bgm("public/bgm.wav")

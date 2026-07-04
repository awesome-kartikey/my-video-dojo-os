import { Config } from "@remotion/cli/config";
import { enableTailwind } from '@remotion/tailwind-v4';

Config.setVideoImageFormat("jpeg");
Config.setOverwriteOutput(true);
Config.overrideWebpackConfig(enableTailwind);

// Force Remotion to use your system's Google Chrome
Config.setBrowserExecutable("C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe");

// Set the OpenGL backend globally for hardware-accelerated frame generation
Config.setChromiumOpenGlRenderer("angle");

// Override FFmpeg to use NVIDIA's NVENC hardware encoder for final MP4 stitching
// Config.overrideFfmpegCommand((info) => {
//   // Extract the arguments array from the provided info object
//   const { args } = info;
  
//   const index = args.indexOf('libx264');
//   if (index !== -1) {
//     args[index] = 'h264_nvenc'; 
//   }
  
//   // Return only the modified array of strings
//   return args;
// });
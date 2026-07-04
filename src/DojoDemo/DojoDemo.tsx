import React from "react";
import { AbsoluteFill, Video, Audio, staticFile, Series, useCurrentFrame, interpolate, Easing } from "remotion";
import { SCENE_DURATIONS } from "./durations";
import { SCENES_DATA, SceneData } from "./scenesData";
import { OutroCard } from "./OutroCard";

interface SceneWrapperProps {
  scene: SceneData;
}

export const SceneWrapper: React.FC<SceneWrapperProps> = ({ scene }) => {
  const frame = useCurrentFrame();
  
  // Slide up and fade in animation for the lower third card
  // It starts animating at frame 15, and lasts for 20 frames.
  const animatedOpacity = interpolate(frame, [15, 35], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });
  
  const animatedTranslateY = interpolate(frame, [15, 35], [30, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  return (
    <AbsoluteFill className="w-full h-full bg-slate-950 overflow-hidden">
      {/* The main video clip — scaled to full width, centered vertically.
          Videos are ~1918×906–964px recorded on a 1920×1080 screen.
          width:100% fills the 1920px composition width exactly;
          height:auto preserves aspect ratio (no cropping);
          margin:auto centers vertically within the AbsoluteFill. */}
      <Video
        src={staticFile(scene.video)}
        style={{
          width: "100%",
          height: "auto",
          position: "absolute",
          top: "50%",
          left: 0,
          transform: "translateY(-50%)",
        }}
        muted
        loop
      />
      
      {/* Synced voiceover audio */}
      <Audio
        src={staticFile(scene.audio)}
      />

      {/* Tailwind-styled lower third overlay */}
      <div
        className="absolute bottom-12 left-12 w-[760px] bg-slate-950/85 border border-slate-800/80 backdrop-blur-md rounded-2xl p-6 flex items-start gap-4 shadow-2xl z-50"
        style={{
          opacity: animatedOpacity,
          transform: `translateY(${animatedTranslateY}px)`,
        }}
      >
        {/* Left cyan accent bar */}
        <div className="w-2.5 h-16 bg-cyan-400 rounded-full shrink-0 shadow-[0_0_8px_rgba(34,211,238,0.5)]" />
        
        {/* Texts */}
        <div className="flex flex-col">
          <span className="text-cyan-400 font-sans font-bold text-xl uppercase tracking-wider">
            {scene.title}
          </span>
          <p className="text-slate-200 font-sans text-sm mt-2 leading-relaxed">
            {scene.description}
          </p>
        </div>
      </div>
    </AbsoluteFill>
  );
};

export const DojoDemo: React.FC = () => {
  return (
    <AbsoluteFill className="w-full h-full bg-slate-950">
      {/* Ambient BGM looping throughout the video */}
      <Audio
        src={staticFile("bgm.wav")}
        volume={0.03}
        loop
      />
      
      <Series>
        {SCENE_DURATIONS.map((sceneDur) => {
          const sceneData = SCENES_DATA.find((s) => s.num === sceneDur.num)!;
          return (
            <Series.Sequence
              key={sceneDur.num}
              durationInFrames={sceneDur.durationFrames}
            >
              {sceneDur.num === 30 ? (
                <OutroCard scene={sceneData} />
              ) : (
                <SceneWrapper scene={sceneData} />
              )}
            </Series.Sequence>
          );
        })}
      </Series>
    </AbsoluteFill>
  );
};

import React from "react";
import { AbsoluteFill, Audio, staticFile, useCurrentFrame, interpolate, Easing } from "remotion";
import { SceneData } from "./scenesData";

interface OutroCardProps {
  scene: SceneData;
}

export const OutroCard: React.FC<OutroCardProps> = ({ scene }) => {
  const frame = useCurrentFrame();

  // DOJO 2.0 title scaling in from center over the first 30 frames
  const titleScale = interpolate(frame, [0, 30], [0.6, 1.0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });
  const titleOpacity = interpolate(frame, [0, 30], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  // Tagline "Build a Smarter Workforce" fades in below at frame 35
  const taglineOpacity = interpolate(frame, [35, 55], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  // Lower-third overlay slides in at frame 15
  const lowerThirdOpacity = interpolate(frame, [15, 35], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });
  const lowerThirdTranslateY = interpolate(frame, [15, 35], [30, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  // 6 feature items fade in staggered
  const features = [
    "Operational Dashboards",
    "Skill Matrix and Training",
    "Gamified DOJO Workshops",
    "Quality and Action Plans",
    "Quick Data Entry",
    "AR/VR Simulators",
  ];

  // Fade to black over the last 15 frames (frame 165 to 180)
  const overlayOpacity = interpolate(frame, [165, 180], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill className="w-full h-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex flex-row items-center justify-between text-white overflow-hidden p-24">
      {/* Synced voiceover audio */}
      <Audio src={staticFile(scene.audio)} />

      {/* Left Column: Title & Lower Third Card */}
      <div className="flex flex-col h-full justify-between w-[48%] py-8">
        <div className="flex flex-col justify-center flex-grow">
          <h1
            className="text-8xl font-black tracking-widest text-cyan-400 drop-shadow-[0_0_20px_rgba(34,211,238,0.25)] font-sans"
            style={{
              transform: `scale(${titleScale})`,
              opacity: titleOpacity,
            }}
          >
            DOJO 2.0
          </h1>
          <p
            className="text-2xl mt-4 text-slate-300 font-semibold tracking-wide"
            style={{ opacity: taglineOpacity }}
          >
            Build a Smarter Workforce.
          </p>
        </div>

        {/* Lower Third Overlay for Outro */}
        <div
          className="w-full bg-slate-950/85 border border-slate-800/80 backdrop-blur-md rounded-2xl p-6 flex items-start gap-4 shadow-2xl"
          style={{
            opacity: lowerThirdOpacity,
            transform: `translateY(${lowerThirdTranslateY}px)`,
          }}
        >
          <div className="w-2.5 h-16 bg-cyan-400 rounded-full shrink-0 shadow-[0_0_8px_rgba(34,211,238,0.5)]" />
          <div className="flex flex-col">
            <span className="text-cyan-400 font-sans font-bold text-xl uppercase tracking-wider">
              {scene.title}
            </span>
            <p className="text-slate-200 font-sans text-sm mt-2 leading-relaxed">
              {scene.description}
            </p>
          </div>
        </div>
      </div>

      {/* Right Column: 2x3 Feature Grid */}
      <div className="flex flex-col justify-center w-[48%] h-full py-8">
        <div className="grid grid-cols-2 gap-x-6 gap-y-6 w-full max-w-2xl">
          {features.map((feature, i) => {
            const startFeatureFrame = 55 + i * 12;
            const featureOpacity = interpolate(frame, [startFeatureFrame, startFeatureFrame + 15], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            });
            const featureTranslateX = interpolate(frame, [startFeatureFrame, startFeatureFrame + 15], [20, 0], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            });

            return (
              <div
                key={feature}
                className="flex items-center gap-4 bg-slate-900/40 border border-slate-800/60 rounded-xl p-4 shadow-lg backdrop-blur-sm"
                style={{
                  opacity: featureOpacity,
                  transform: `translateX(${featureTranslateX}px)`,
                }}
              >
                <div className="w-3 h-3 rounded-full bg-cyan-400 shrink-0 shadow-[0_0_8px_#22d3ee]" />
                <span className="text-lg text-slate-200 font-medium font-sans">
                  {feature}
                </span>
              </div>
            );
          })}
        </div>

        <div
          className="mt-12 text-slate-400 font-sans text-sm border-t border-slate-800/50 pt-6 max-w-lg"
          style={{ opacity: taglineOpacity }}
        >
          Contact your DOJO 2.0 representative to schedule a personalized walkthrough.
        </div>
      </div>

      {/* Fade-to-black Overlay */}
      {frame >= 165 && (
        <div
          className="absolute inset-0 bg-black z-50 pointer-events-none"
          style={{ opacity: overlayOpacity }}
        />
      )}
    </AbsoluteFill>
  );
};

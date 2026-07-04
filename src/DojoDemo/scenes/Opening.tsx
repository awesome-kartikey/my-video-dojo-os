import React from "react";
import { AbsoluteFill, Audio, staticFile, useCurrentFrame, interpolate, Easing } from "remotion";
import { fontFamily } from "../components/font";
import { Background } from "../components/Background";
import { AnimatedText } from "../components/AnimatedText";
import { FeatureCard } from "../components/FeatureCard";
import { FEATURES, SCENE } from "../constants";

export const Scene1_Welcome: React.FC = () => {
  const frame = useCurrentFrame();
  const dur = SCENE.welcome.dur;

  const logoScale = interpolate(frame, [0, 20], [0.8, 1], {
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  const exitOpacity = interpolate(frame, [dur - 15, dur], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <Background>
      <Audio src={staticFile("voiceover/dojo-demo/scene-01-welcome.mp3")} />
      <AbsoluteFill
        className="flex flex-col items-center justify-center"
        style={{ opacity: exitOpacity }}
      >
        <AnimatedText startFrame={0} className="mb-2" slideUp={false}>
          <div
            className="text-[42px] font-black tracking-tight text-cyan-400"
            style={{ fontFamily, scale: `${logoScale}` }}
          >
            DOJO 2.0
          </div>
        </AnimatedText>

        <AnimatedText startFrame={15} className="mb-16">
          <p
            className="text-lg text-slate-400 font-light tracking-wide text-center max-w-xl leading-relaxed"
            style={{ fontFamily }}
          >
            Industry 4.0 Manufacturing Workforce & Training Platform
          </p>
        </AnimatedText>

        <div className="flex gap-12">
          {FEATURES.map((f, i) => (
            <FeatureCard
              key={f.label}
              icon={f.icon}
              label={f.label}
              index={i}
              startFrame={45}
            />
          ))}
        </div>

        <AnimatedText startFrame={80} className="mt-16">
          <p
            className="text-xs text-slate-600 font-mono"
            style={{ fontFamily }}
          >
            From shop floor to boardroom
          </p>
        </AnimatedText>
      </AbsoluteFill>
    </Background>
  );
};

export const Scene2_Login: React.FC = () => {
  const frame = useCurrentFrame();
  const dur = SCENE.login.dur;
  const exitOpacity = interpolate(frame, [dur - 15, dur], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <Background>
      <Audio src={staticFile("voiceover/dojo-demo/scene-02-login.mp3")} />
      <AbsoluteFill
        className="flex flex-col items-center justify-center"
        style={{ opacity: exitOpacity }}
      >
        <AnimatedText startFrame={0}>
          <h1
            className="text-4xl font-bold text-white mb-3"
            style={{ fontFamily: fontFamily }}
          >
            Employee Login
          </h1>
        </AnimatedText>

        <AnimatedText startFrame={15} className="mb-10">
          <p className="text-base text-slate-400" style={{ fontFamily: fontFamily }}>
            Search. Select. Start.
          </p>
        </AnimatedText>

        <div
          className="rounded-xl border border-slate-700/60 bg-slate-800/60 backdrop-blur-sm overflow-hidden shadow-2xl"
          style={{ width: 520, opacity: interpolate(Math.max(0, frame - 30), [0, 20], [0, 1], { extrapolateRight: "clamp", easing: Easing.bezier(0.16, 1, 0.3, 1) }), scale: interpolate(Math.max(0, frame - 30), [0, 20], [0.95, 1], { extrapolateRight: "clamp" }) }}
        >
          <div className="p-5 border-b border-slate-700/60">
            <div className="w-full h-10 rounded-lg bg-slate-700/50 border border-slate-600/50 flex items-center px-3">
              <span className="text-sm text-slate-400" style={{ fontFamily: fontFamily }}>
                🔍 Search employee by name or code...
              </span>
            </div>
          </div>
          <div className="p-3 space-y-2">
            {["Rajesh Kumar", "Priya Sharma", "Amit Patel", "Sneha Reddy"].map(
              (name, i) => {
                const cardOpacity = interpolate(
                  Math.max(0, frame - 50 - i * 6),
                  [0, 12],
                  [0, 1],
                  { extrapolateRight: "clamp", easing: Easing.bezier(0.16, 1, 0.3, 1) },
                );
                return (
                  <div
                    key={name}
                    className="flex items-center gap-3 p-3 rounded-lg bg-slate-700/30 border border-slate-700/40"
                    style={{ opacity: cardOpacity }}
                  >
                    <div className="w-9 h-9 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-sm font-bold">
                      {name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-sm text-slate-200 font-medium" style={{ fontFamily: fontFamily }}>
                        {name}
                      </div>
                      <div className="text-xs text-slate-500" style={{ fontFamily: fontFamily }}>
                        {["EMP-0024", "EMP-0041", "EMP-0017", "EMP-0033"][i]} ·{" "}
                        {["Assembly", "Quality", "CNC", "Logistics"][i]}
                      </div>
                    </div>
                  </div>
                );
              },
            )}
          </div>
        </div>

        <AnimatedText startFrame={110} className="mt-6">
          <div className="flex items-center gap-2 text-slate-600 text-xs">
            <span className="w-2 h-2 rounded-full bg-green-500/60" />
            Session-based auth · No passwords needed
          </div>
        </AnimatedText>
      </AbsoluteFill>
    </Background>
  );
};

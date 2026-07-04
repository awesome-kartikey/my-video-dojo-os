import React from "react";
import { AbsoluteFill, Audio, staticFile, useCurrentFrame, interpolate, Easing } from "remotion";
import { fontFamily } from "../components/font";
import { Background } from "../components/Background";
import { AnimatedText } from "../components/AnimatedText";
import { ScreenFrame } from "../components/ScreenFrame";
import { SCENE } from "../constants";

export const Scene13_Training: React.FC = () => {
  const frame = useCurrentFrame();
  const dur = SCENE.training.dur;
  const exitOpacity = interpolate(frame, [dur - 15, dur], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <Background>
      <Audio src={staticFile("voiceover/dojo-demo/scene-13-training.mp3")} />
      <AbsoluteFill
        className="flex flex-col items-center justify-center"
        style={{ opacity: exitOpacity }}
      >
        <AnimatedText startFrame={0}>
          <h1 className="text-3xl font-bold text-white mb-1" style={{ fontFamily }}>
            Training Management
          </h1>
        </AnimatedText>
        <AnimatedText startFrame={15} className="mb-6">
          <p className="text-sm text-slate-400" style={{ fontFamily }}>
            Modules · Plans · Attempts — close the loop
          </p>
        </AnimatedText>

        <div className="flex gap-6">
          <ScreenFrame startFrame={30} label="Training Modules">
            <div className="p-3 h-full flex flex-col">
              <table className="w-full text-[10px]">
                <thead>
                  <tr className="text-slate-600 border-b border-slate-700/40">
                    <th className="text-left py-1.5 font-medium">Module</th>
                    <th className="text-left py-1.5 font-medium">Category</th>
                    <th className="text-right py-1.5 font-medium">Hours</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["5S Workplace Org", "Operations", "4"],
                    ["SPC Fundamentals", "Quality", "8"],
                    ["CNC Programming", "Technical", "16"],
                    ["Safety Protocols", "Safety", "6"],
                  ].map((row, i) => {
                    const rowOpacity = interpolate(
                      Math.max(0, frame - 45 - i * 5),
                      [0, 10],
                      [0, 1],
                      { extrapolateRight: "clamp" },
                    );
                    return (
                      <tr
                        key={i}
                        className="border-b border-slate-800/60"
                        style={{ opacity: rowOpacity }}
                      >
                        <td className="py-1.5 text-slate-200">{row[0]}</td>
                        <td className="py-1.5 text-slate-400">{row[1]}</td>
                        <td className="py-1.5 text-right text-slate-400">{row[2]}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <div className="mt-auto text-[10px] text-slate-600 text-center pt-3">
                Plan adherence: <span className="text-green-400">78%</span>
              </div>
            </div>
          </ScreenFrame>

          <ScreenFrame startFrame={50} label="Training Attempts">
            <div className="p-3 h-full flex flex-col">
              <table className="w-full text-[10px]">
                <thead>
                  <tr className="text-slate-600 border-b border-slate-700/40">
                    <th className="text-left py-1.5 font-medium">Employee</th>
                    <th className="text-left py-1.5 font-medium">Score</th>
                    <th className="text-left py-1.5 font-medium">Result</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Rajesh K.", "92", "Passed"],
                    ["Priya S.", "78", "Passed"],
                    ["Amit P.", "55", "Failed"],
                    ["Sneha R.", "88", "Passed"],
                  ].map((row, i) => {
                    const rowOpacity = interpolate(
                      Math.max(0, frame - 65 - i * 5),
                      [0, 10],
                      [0, 1],
                      { extrapolateRight: "clamp" },
                    );
                    return (
                      <tr
                        key={i}
                        className="border-b border-slate-800/60"
                        style={{ opacity: rowOpacity }}
                      >
                        <td className="py-1.5 text-slate-200">{row[0]}</td>
                        <td className="py-1.5 text-slate-400">{row[1]}</td>
                        <td className="py-1.5">
                          <span
                            className={`px-1.5 py-0.5 rounded-full text-[9px] font-semibold ${row[2] === "Passed" ? "text-green-400 bg-green-500/10" : "text-red-400 bg-red-500/10"}`}
                          >
                            {row[2]}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <div className="mt-auto text-[10px] text-slate-600 text-center pt-3">
                Game scores → auto-recorded as attempts
              </div>
            </div>
          </ScreenFrame>
        </div>
      </AbsoluteFill>
    </Background>
  );
};

export const Scene14_ARVR: React.FC = () => {
  const frame = useCurrentFrame();
  const dur = SCENE.arvr.dur;
  const exitOpacity = interpolate(frame, [dur - 15, dur], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const sims = [
    { title: "Critical Process Training", icon: "🥽", type: "VR", desc: "CNC & welding simulation" },
    { title: "Material Handling", icon: "👓", type: "AR", desc: "Guided picking & assembly" },
    { title: "Fire & Safety", icon: "🔥", type: "VR", desc: "Emergency scenario training" },
  ];

  return (
    <Background>
      <Audio src={staticFile("voiceover/dojo-demo/scene-14-arvr.mp3")} />
      <AbsoluteFill
        className="flex flex-col items-center justify-center"
        style={{ opacity: exitOpacity }}
      >
        <AnimatedText startFrame={0}>
          <h1 className="text-3xl font-bold text-white mb-6" style={{ fontFamily }}>
            AR/VR Simulators
          </h1>
        </AnimatedText>

        <div className="flex gap-5">
          {sims.map((sim, i) => {
            const cardOpacity = interpolate(
              Math.max(0, frame - 15 - i * 8),
              [0, 15],
              [0, 1],
              { extrapolateRight: "clamp", easing: Easing.bezier(0.16, 1, 0.3, 1) },
            );
            const cardY = interpolate(
              Math.max(0, frame - 15 - i * 8),
              [0, 15],
              [20, 0],
              { extrapolateRight: "clamp" },
            );
            return (
              <div
                key={sim.title}
                className="rounded-xl border border-slate-700/60 bg-slate-800/60 backdrop-blur-sm p-6 flex flex-col items-center gap-3 w-56 shadow-xl"
                style={{ opacity: cardOpacity, translate: `0 ${cardY}px` }}
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/20 flex items-center justify-center text-2xl">
                  {sim.icon}
                </div>
                <span className="text-sm font-semibold text-white text-center leading-snug" style={{ fontFamily }}>
                  {sim.title}
                </span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold text-cyan-400 bg-cyan-500/10 border border-cyan-500/20">
                  {sim.type}
                </span>
                <span className="text-[11px] text-slate-500 text-center" style={{ fontFamily }}>
                  {sim.desc}
                </span>
              </div>
            );
          })}
        </div>
      </AbsoluteFill>
    </Background>
  );
};

export const Scene15_Closing: React.FC = () => {
  const frame = useCurrentFrame();

  const logoScale = interpolate(frame, [0, 15], [0.85, 1], {
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  const items = [
    "📊 Operational Dashboards",
    "🧠 Skill Matrix & Assessment",
    "🎮 Interactive DOJO Workshops",
    "📈 Management Review & Compliance",
    "⚡ Quick Data Entry",
    "🥽 AR/VR Training",
  ];

  return (
    <Background>
      <Audio src={staticFile("voiceover/dojo-demo/scene-15-closing.mp3")} />
      <AbsoluteFill className="flex flex-col items-center justify-center">
        <div style={{ scale: `${logoScale}` }}>
          <div className="text-[48px] font-black tracking-tight text-cyan-400 text-center" style={{ fontFamily }}>
            DOJO 2.0
          </div>
        </div>
        <div className="mt-2 mb-8 text-base text-slate-500 font-light" style={{ fontFamily }}>
          Build a Smarter Workforce
        </div>

        <div className="grid grid-cols-2 gap-x-12 gap-y-2">
          {items.map((item, i) => {
            const itemOpacity = interpolate(
              Math.max(0, frame - 20 - i * 3),
              [0, 10],
              [0, 1],
              { extrapolateRight: "clamp" },
            );
            return (
              <div
                key={item}
                className="text-sm text-slate-300"
                style={{ opacity: itemOpacity, fontFamily }}
              >
                {item}
              </div>
            );
          })}
        </div>
      </AbsoluteFill>
    </Background>
  );
};

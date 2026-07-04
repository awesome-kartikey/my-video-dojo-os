import React from "react";
import { AbsoluteFill, Audio, staticFile, useCurrentFrame, interpolate, Easing } from "remotion";
import { fontFamily } from "../components/font";
import { Background } from "../components/Background";
import { AnimatedText } from "../components/AnimatedText";
import { ScreenFrame } from "../components/ScreenFrame";
import { SCENE } from "../constants";

const skillLevels = ["#ef4444", "#fb923c", "#eab308", "#4ade80", "#22d3ee"];
const skillNames = [
  "5S",
  "Quality Inspection",
  "CNC Operations",
  "Welding",
  "SPC",
  "Safety",
];

export const Scene6_SkillMatrix: React.FC = () => {
  const frame = useCurrentFrame();
  const dur = SCENE.skillMatrix.dur;
  const exitOpacity = interpolate(frame, [dur - 15, dur], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <Background>
      <Audio src={staticFile("voiceover/dojo-demo/scene-06-skillmatrix.mp3")} />
      <AbsoluteFill
        className="flex flex-col items-center justify-center"
        style={{ opacity: exitOpacity }}
      >
        <AnimatedText startFrame={0}>
          <h1 className="text-3xl font-bold text-white mb-1" style={{ fontFamily }}>
            Skill Matrix
          </h1>
        </AnimatedText>
        <AnimatedText startFrame={15} className="mb-6">
          <p className="text-sm text-slate-400" style={{ fontFamily }}>
            Visualize competency · Level 1–5 · Color-coded at a glance
          </p>
        </AnimatedText>

        <ScreenFrame startFrame={30} label="Skill Matrix">
          <div className="p-4 h-full flex flex-col">
            <div className="flex items-center gap-2 mb-3">
              <div className="flex-1 h-8 rounded bg-slate-700/40 border border-slate-600/40 flex items-center px-3">
                <span className="text-xs text-slate-500">🔍 Search employees...</span>
              </div>
              <div className="h-8 px-3 rounded bg-slate-700/40 border border-slate-600/40 flex items-center">
                <span className="text-xs text-slate-500">Category ▼</span>
              </div>
            </div>
            <div className="flex-1 overflow-hidden">
              <table className="w-full text-xs">
                <thead>
                  <tr className="text-slate-500 border-b border-slate-700/40">
                    <th className="text-left py-2 font-medium">Employee</th>
                    {skillNames.map((s) => (
                      <th key={s} className="py-2 font-medium text-center">
                        {s}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Rajesh K.", 4, 3, 5, 2, 3, 4],
                    ["Priya S.", 5, 4, 3, 3, 4, 5],
                    ["Amit P.", 3, 5, 4, 4, 2, 3],
                    ["Sneha R.", 2, 3, 3, 5, 4, 2],
                  ].map((row, ri) => {
                    const rowOpacity = interpolate(
                      Math.max(0, frame - 45 - ri * 8),
                      [0, 12],
                      [0, 1],
                      { extrapolateRight: "clamp" },
                    );
                    return (
                      <tr
                        key={ri}
                        className="border-b border-slate-800/60"
                        style={{ opacity: rowOpacity }}
                      >
                        <td className="py-2.5 text-slate-300">{row[0]}</td>
                        {row.slice(1).map((level, ci) => (
                          <td key={ci} className="py-2.5 text-center">
                            <span
                              className="inline-block px-2 py-0.5 rounded-full text-[10px] font-semibold text-white"
                              style={{
                                backgroundColor: skillLevels[(level as number) - 1],
                              }}
                            >
                              {level}
                            </span>
                          </td>
                        ))}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="flex gap-3 mt-2 text-[10px] text-slate-600 justify-center">
              {["1 Beginner", "2 Novice", "3 Intermediate", "4 Advanced", "5 Expert"].map(
                (l, i) => (
                  <div key={l} className="flex items-center gap-1">
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: skillLevels[i] }}
                    />
                    {l}
                  </div>
                ),
              )}
            </div>
          </div>
        </ScreenFrame>
      </AbsoluteFill>
    </Background>
  );
};

const PulsingDot: React.FC<{ color: string; delay?: number }> = ({
  color,
  delay = 0,
}) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(
    Math.sin((frame + delay) * 0.1) * 0.5 + 0.5,
    [0, 1],
    [0.4, 1],
  );
  return <div className="w-2 h-2 rounded-full" style={{ backgroundColor: color, opacity }} />;
};

export const Scene7_MiniDojo: React.FC = () => {
  const frame = useCurrentFrame();
  const dur = SCENE.minidojo.dur;
  const exitOpacity = interpolate(frame, [dur - 15, dur], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const gameOpacity = interpolate(Math.max(0, frame - 70), [0, 15], [0, 1], {
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  return (
    <Background>
      <Audio src={staticFile("voiceover/dojo-demo/scene-07-minidojo.mp3")} />
      <AbsoluteFill
        className="flex flex-col items-center justify-center"
        style={{ opacity: exitOpacity }}
      >
        <AnimatedText startFrame={0}>
          <h1 className="text-3xl font-bold text-white mb-1" style={{ fontFamily }}>
            Mini-DOJO Workshops
          </h1>
        </AnimatedText>
        <AnimatedText startFrame={15} className="mb-6">
          <p className="text-sm text-slate-400" style={{ fontFamily }}>
            15 interactive games · Mapped to real manufacturing skills
          </p>
        </AnimatedText>

        <div className="flex gap-6">
          <ScreenFrame startFrame={30} label="Game Library">
            <div className="p-3 h-full flex flex-col">
              <div className="flex items-center gap-2 mb-2 text-xs text-slate-400">
                <span className="text-cyan-400">◉</span> Your Skill Levels
              </div>
              <div className="grid grid-cols-2 gap-2 flex-1">
                {[
                  ["5S Sort", "📦", "Level 4"],
                  ["Defect Spotter", "🔍", "Level 3"],
                  ["CNC Sequence", "⚙️", "Level 5"],
                  ["Gauge Calib.", "📏", "Level 2"],
                ].map(([title, icon, level], i) => {
                  const cardOpacity = interpolate(
                    Math.max(0, frame - 40 - i * 6),
                    [0, 10],
                    [0, 1],
                    { extrapolateRight: "clamp" },
                  );
                  return (
                    <div
                      key={title}
                      className="rounded-lg bg-slate-700/30 border border-slate-700/40 p-2 flex items-center gap-2"
                      style={{ opacity: cardOpacity }}
                    >
                      <span className="text-lg">{icon}</span>
                      <div>
                        <div className="text-xs text-slate-200 font-medium" style={{ fontFamily }}>
                          {title}
                        </div>
                        <div className="text-[10px] text-slate-500">{level}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="mt-1 text-[10px] text-slate-600 text-center">
                Click any game to play
              </div>
            </div>
          </ScreenFrame>

          <div
            className="flex flex-col items-center justify-center"
            style={{ opacity: gameOpacity }}
          >
            <div className="rounded-xl border border-cyan-500/30 bg-slate-800/80 backdrop-blur-sm overflow-hidden shadow-2xl"
              style={{ width: 300 }}
            >
              <div className="bg-cyan-500/10 px-3 py-2 border-b border-cyan-500/20 flex items-center justify-between">
                <span className="text-sm text-cyan-400 font-semibold" style={{ fontFamily }}>
                  5S Sort
                </span>
                <span className="text-xs text-slate-500 font-mono" style={{ fontFamily }}>
                  ⏱ 0:45
                </span>
              </div>
              <div className="p-3 space-y-2">
                {["Sort", "Set in Order", "Shine"].map((step, i) => (
                  <div
                    key={step}
                    className="flex items-center gap-2 p-2 rounded bg-slate-700/30 border border-slate-700/40"
                  >
                    <div className="w-4 h-4 rounded border-2 border-cyan-400/50 flex items-center justify-center">
                      {i === 0 && <div className="w-2 h-2 rounded-sm bg-cyan-400" />}
                    </div>
                    <span className="text-xs text-slate-300" style={{ fontFamily }}>
                      {step}
                    </span>
                    <span className="ml-auto text-[10px] text-slate-600">drag</span>
                  </div>
                ))}
              </div>
              <div className="border-t border-slate-700/40 px-3 py-2 flex justify-between items-center">
                <span className="text-xs text-slate-500">Score: 85</span>
                <PulsingDot color="#22d3ee" />
              </div>
            </div>
            <div className="mt-3 text-xs text-slate-500" style={{ fontFamily }}>
              ✅ Auto-updates EmployeeSkill + XP
            </div>
          </div>
        </div>
      </AbsoluteFill>
    </Background>
  );
};

export const Scene8_GameShowcase: React.FC = () => {
  const frame = useCurrentFrame();
  const dur = SCENE.gameShowcase.dur;
  const exitOpacity = interpolate(frame, [dur - 15, dur], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const games = [
    { title: "Defect Spotter", icon: "🔍", desc: "Identify part defects" },
    { title: "CNC Sequence", icon: "⚙️", desc: "Order machining steps" },
    { title: "Gauge Calibration", icon: "📏", desc: "Match readings to gauges" },
    { title: "Forklift Safety", icon: "🚜", desc: "Spot safe vs unsafe" },
  ];

  const quadrant = Math.min(3, Math.floor(frame / (dur / 4)));

  return (
    <Background>
      <Audio src={staticFile("voiceover/dojo-demo/scene-08-gameshowcase.mp3")} />
      <AbsoluteFill
        className="flex flex-col items-center justify-center"
        style={{ opacity: exitOpacity }}
      >
        <AnimatedText startFrame={0}>
          <h1 className="text-3xl font-bold text-white mb-6" style={{ fontFamily }}>
            Game Variety Showcase
          </h1>
        </AnimatedText>

        <div className="grid grid-cols-2 gap-4">
          {games.map((game, i) => {
            const isActive = i === quadrant;
            const activeScale = isActive ? 1 : 0.85;
            const activeOpacity = isActive ? 1 : 0.35;

            return (
              <div
                key={game.title}
                className="rounded-xl border p-5 flex flex-col items-center gap-2 transition-all"
                style={{
                  width: 240,
                  borderColor: isActive ? "rgba(34,211,238,0.4)" : "rgba(51,65,85,0.5)",
                  backgroundColor: isActive
                    ? "rgba(34,211,238,0.08)"
                    : "rgba(30,41,59,0.5)",
                  scale: `${activeScale}`,
                  opacity: activeOpacity,
                }}
              >
                <span className="text-3xl">{game.icon}</span>
                <span className="text-sm font-semibold text-white" style={{ fontFamily }}>
                  {game.title}
                </span>
                <span className="text-[11px] text-slate-500 text-center" style={{ fontFamily }}>
                  {game.desc}
                </span>
              </div>
            );
          })}
        </div>
      </AbsoluteFill>
    </Background>
  );
};

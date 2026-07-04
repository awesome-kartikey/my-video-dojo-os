import React from "react";
import { AbsoluteFill, Audio, staticFile, useCurrentFrame, interpolate, Easing } from "remotion";
import { fontFamily } from "../components/font";
import { Background } from "../components/Background";
import { AnimatedText } from "../components/AnimatedText";
import { ScreenFrame } from "../components/ScreenFrame";
import { SCENE } from "../constants";

export const Scene11_QuickAdd: React.FC = () => {
  const frame = useCurrentFrame();
  const dur = SCENE.quickAdd.dur;
  const exitOpacity = interpolate(frame, [dur - 15, dur], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const fabRotate = interpolate(Math.max(0, frame - 35), [0, 15], [0, 45], {
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  const menuItems = [
    "Quick Attendance",
    "Quick Overtime",
    "Quick Movement",
    "Quick Employee",
    "Quick Defect",
    "Quick Rejection",
    "Quick Action Plan",
  ];

  return (
    <Background>
      <Audio src={staticFile("voiceover/dojo-demo/scene-11-quickadd.mp3")} />
      <AbsoluteFill
        className="flex flex-col items-center justify-center"
        style={{ opacity: exitOpacity }}
      >
        <AnimatedText startFrame={0}>
          <h1 className="text-3xl font-bold text-white mb-1" style={{ fontFamily }}>
            Quick-Add Data Entry
          </h1>
        </AnimatedText>
        <AnimatedText startFrame={15} className="mb-6">
          <p className="text-sm text-slate-400" style={{ fontFamily }}>
            FAB speed-dial · Seven forms · From any page
          </p>
        </AnimatedText>

        <div className="relative" style={{ width: 960, height: 400 }}>
          <ScreenFrame startFrame={0} label="Any Dashboard Page">
            <div className="p-4 flex items-center justify-center h-full">
              <div className="text-slate-600 text-sm" style={{ fontFamily }}>
                Dashboard content...
              </div>

              <div
                className="absolute bottom-6 right-6 w-12 h-12 rounded-full bg-cyan-500 shadow-lg shadow-cyan-500/30 flex items-center justify-center text-white text-xl font-bold cursor-pointer"
                style={{ rotate: `${fabRotate}deg` }}
              >
                +
              </div>
            </div>
          </ScreenFrame>

          {menuItems.slice(0, 5).map((item, i) => {
            const isVisible = frame > 35;
            const itemRotate = interpolate(
              Math.max(0, frame - 40 - i * 3),
              [0, 12],
              [0, 1],
              { extrapolateRight: "clamp", easing: Easing.bezier(0.16, 1, 0.3, 1) },
            );
            return (
              <div
                key={item}
                className="absolute flex items-center gap-2"
                style={{
                  bottom: 85 + i * 38,
                  right: isVisible ? 70 : 20,
                  opacity: isVisible ? itemRotate : 0,
                  translate: isVisible ? `0 ${(1 - itemRotate) * 10}px` : undefined,
                }}
              >
                <div className="px-2 py-1 rounded bg-slate-700 border border-slate-600 text-xs text-slate-300 whitespace-nowrap shadow-lg" style={{ fontFamily }}>
                  {item}
                </div>
                <div className="w-8 h-8 rounded-full bg-cyan-500/80 flex items-center justify-center text-white text-sm shadow-lg shadow-cyan-500/20">
                  {["📋", "⏰", "🔄", "👤", "⚠️"][i]}
                </div>
              </div>
            );
          })}
        </div>

        <AnimatedText startFrame={90} className="mt-4">
          <div className="text-xs text-slate-500 flex items-center gap-4" style={{ fontFamily }}>
            <span>✅ Auto-invalidates dashboard caches</span>
            <span>✅ Zod validation</span>
            <span>✅ Toast notifications</span>
          </div>
        </AnimatedText>
      </AbsoluteFill>
    </Background>
  );
};

export const Scene12_Employees: React.FC = () => {
  const frame = useCurrentFrame();
  const dur = SCENE.employees.dur;
  const exitOpacity = interpolate(frame, [dur - 15, dur], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <Background>
      <Audio src={staticFile("voiceover/dojo-demo/scene-12-employees.mp3")} />
      <AbsoluteFill
        className="flex flex-col items-center justify-center"
        style={{ opacity: exitOpacity }}
      >
        <AnimatedText startFrame={0}>
          <h1 className="text-3xl font-bold text-white mb-1" style={{ fontFamily }}>
            Employee Management
          </h1>
        </AnimatedText>
        <AnimatedText startFrame={15} className="mb-6">
          <p className="text-sm text-slate-400" style={{ fontFamily }}>
            Full CRUD · Movement history · Status tracking
          </p>
        </AnimatedText>

        <div className="flex gap-6">
          <ScreenFrame startFrame={30} label="Employee Roster">
            <div className="p-3 h-full flex flex-col">
              <div className="flex items-center justify-between mb-2">
                <div className="flex-1 h-8 rounded bg-slate-700/40 border border-slate-600/40 flex items-center px-3 max-w-[200px]">
                  <span className="text-[10px] text-slate-500">🔍 Search...</span>
                </div>
                <span className="text-[10px] text-cyan-400 font-medium ml-2">+ Add</span>
              </div>
              <table className="w-full text-[10px]">
                <thead>
                  <tr className="text-slate-600 border-b border-slate-700/40">
                    <th className="text-left py-1.5 font-medium">Code</th>
                    <th className="text-left py-1.5 font-medium">Name</th>
                    <th className="text-left py-1.5 font-medium">Dept</th>
                    <th className="text-left py-1.5 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["EMP-001", "Rajesh Kumar", "Assembly", "Active"],
                    ["EMP-002", "Priya Sharma", "Quality", "Active"],
                    ["EMP-003", "Amit Patel", "CNC", "Active"],
                    ["EMP-004", "Sneha Reddy", "Logistics", "Inactive"],
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
                        <td className="py-1.5 text-slate-400 font-mono">{row[0]}</td>
                        <td className="py-1.5 text-slate-200">{row[1]}</td>
                        <td className="py-1.5 text-slate-400">{row[2]}</td>
                        <td className="py-1.5">
                          <span
                            className={`px-1.5 py-0.5 rounded-full text-[9px] font-semibold ${row[3] === "Active" ? "text-green-400 bg-green-500/10" : "text-slate-500 bg-slate-600/20"}`}
                          >
                            {row[3]}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </ScreenFrame>

          <ScreenFrame startFrame={50} label="Employee Movements">
            <div className="p-3 h-full flex flex-col">
              <div className="text-xs text-slate-400 mb-2">Movement Timeline</div>
              {[
                { emp: "Rajesh K.", type: "Promoted", date: "Jun 15" },
                { emp: "Priya S.", type: "Transferred", date: "Jun 10" },
                { emp: "Amit P.", type: "Joined", date: "Jun 1" },
              ].map((mov, i) => {
                const movOpacity = interpolate(
                  Math.max(0, frame - 65 - i * 6),
                  [0, 10],
                  [0, 1],
                  { extrapolateRight: "clamp" },
                );
                const moveColors: Record<string, string> = {
                  Promoted: "#22d3ee",
                  Transferred: "#fb923c",
                  Joined: "#4ade80",
                };
                return (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-2 rounded-lg bg-slate-700/20 border border-slate-700/30 mb-2"
                    style={{ opacity: movOpacity }}
                  >
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: moveColors[mov.type] || "#64748b" }}
                    />
                    <div className="flex-1">
                      <div className="text-xs text-slate-200 font-medium" style={{ fontFamily }}>
                        {mov.emp}
                      </div>
                      <div className="text-[10px] text-slate-500">{mov.type}</div>
                    </div>
                    <span className="text-[10px] text-slate-600">{mov.date}</span>
                  </div>
                );
              })}
            </div>
          </ScreenFrame>
        </div>
      </AbsoluteFill>
    </Background>
  );
};

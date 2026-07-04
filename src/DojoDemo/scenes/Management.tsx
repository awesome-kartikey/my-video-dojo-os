import React from "react";
import { AbsoluteFill, Audio, staticFile, useCurrentFrame, interpolate, Easing } from "remotion";
import { fontFamily } from "../components/font";
import { Background } from "../components/Background";
import { AnimatedText } from "../components/AnimatedText";
import { ScreenFrame } from "../components/ScreenFrame";
import { SCENE } from "../constants";

export const Scene9_Management: React.FC = () => {
  const frame = useCurrentFrame();
  const dur = SCENE.management.dur;
  const exitOpacity = interpolate(frame, [dur - 15, dur], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const complianceDash = interpolate(
    Math.min(frame, 40),
    [0, 40],
    [0, 283],
    { extrapolateRight: "clamp", easing: Easing.bezier(0.16, 1, 0.3, 1) },
  );

  return (
    <Background>
      <Audio src={staticFile("voiceover/dojo-demo/scene-09-management.mp3")} />
      <AbsoluteFill
        className="flex flex-col items-center justify-center"
        style={{ opacity: exitOpacity }}
      >
        <AnimatedText startFrame={0}>
          <h1 className="text-3xl font-bold text-white mb-1" style={{ fontFamily }}>
            Management Review
          </h1>
        </AnimatedText>
        <AnimatedText startFrame={15} className="mb-6">
          <p className="text-sm text-slate-400" style={{ fontFamily }}>
            Executive summary · Board-report-ready
          </p>
        </AnimatedText>

        <ScreenFrame startFrame={30} label="Management Review">
          <div className="p-4 h-full flex flex-col gap-2">
            <div className="flex gap-3">
              <div
                className="flex-1 rounded-lg bg-slate-700/30 border border-slate-700/40 p-3"
              >
                <span className="text-[10px] text-slate-500 uppercase tracking-wider">
                  Executive Summary
                </span>
                <p className="text-[11px] text-slate-400 mt-1 leading-relaxed" style={{ fontFamily }}>
                  Strong operational performance with improving quality metrics. Training
                  adherence up 12% this quarter.
                </p>
              </div>
              <div className="w-28 rounded-lg bg-slate-700/30 border border-slate-700/40 p-3 flex flex-col items-center">
                <span className="text-[10px] text-slate-500">Compliance</span>
                <svg viewBox="0 0 100 50" className="w-20 h-12 mt-1">
                  <path
                    d="M 10 50 A 40 40 0 0 1 90 50"
                    fill="none"
                    stroke="#334155"
                    strokeWidth="6"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 10 50 A 40 40 0 0 1 90 50"
                    fill="none"
                    stroke="#22d3ee"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeDasharray={`${complianceDash} 283`}
                  />
                </svg>
                <span className="text-lg font-bold text-cyan-400 mt-1">87%</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 flex-1">
              <div className="rounded-lg bg-slate-700/20 border border-slate-700/30 p-3">
                <span className="text-[10px] text-slate-500">Customer Defect Trend</span>
                <svg viewBox="0 0 180 40" className="w-full h-10 mt-1">
                  <polyline
                    points="0,35 30,30 60,32 90,20 120,25 150,15 180,18"
                    fill="none"
                    stroke="#ef4444"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
              <div className="rounded-lg bg-slate-700/20 border border-slate-700/30 p-3">
                <span className="text-[10px] text-slate-500">Internal Rejection</span>
                <svg viewBox="0 0 180 40" className="w-full h-10 mt-1">
                  <polyline
                    points="0,20 30,22 60,18 90,25 120,15 150,12 180,10"
                    fill="none"
                    stroke="#fb923c"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="rounded-lg bg-slate-700/20 border border-slate-700/30 p-2 flex items-center justify-between">
                <span className="text-[10px] text-slate-500">Training Adherence</span>
                <div className="flex items-center gap-2">
                  <div className="w-16 h-2 rounded-full bg-slate-700 overflow-hidden">
                    <div className="h-full rounded-full bg-green-400" style={{ width: "78%" }} />
                  </div>
                  <span className="text-[10px] text-green-400 font-bold">78%</span>
                </div>
              </div>
              <div className="rounded-lg bg-slate-700/20 border border-slate-700/30 p-2 flex items-center justify-between">
                <span className="text-[10px] text-slate-500">Action Plans</span>
                <span className="text-[10px] text-amber-400 font-bold">12 active</span>
              </div>
            </div>
          </div>
        </ScreenFrame>
      </AbsoluteFill>
    </Background>
  );
};

export const Scene10_Quality: React.FC = () => {
  const frame = useCurrentFrame();
  const dur = SCENE.quality.dur;
  const exitOpacity = interpolate(frame, [dur - 15, dur], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <Background>
      <Audio src={staticFile("voiceover/dojo-demo/scene-10-quality.mp3")} />
      <AbsoluteFill
        className="flex flex-col items-center justify-center"
        style={{ opacity: exitOpacity }}
      >
        <AnimatedText startFrame={0}>
          <h1 className="text-3xl font-bold text-white mb-1" style={{ fontFamily }}>
            Quality & Corrective Action
          </h1>
        </AnimatedText>
        <AnimatedText startFrame={15} className="mb-6">
          <p className="text-sm text-slate-400" style={{ fontFamily }}>
            Full traceability: defect → action plan → resolution
          </p>
        </AnimatedText>

        <div className="flex gap-6">
          <ScreenFrame startFrame={30} label="Customer Defects">
            <div className="p-3 h-full flex flex-col">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-slate-400">Recent Defects</span>
                <span className="text-[10px] text-cyan-400 font-medium">+ Add</span>
              </div>
              <table className="w-full text-[10px]">
                <thead>
                  <tr className="text-slate-600 border-b border-slate-700/40">
                    <th className="text-left py-1.5 font-medium">Customer</th>
                    <th className="text-left py-1.5 font-medium">Defect</th>
                    <th className="text-left py-1.5 font-medium">Severity</th>
                    <th className="text-right py-1.5 font-medium">Qty</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["AutoParts Co", "Surface Scratch", "Minor", "12"],
                    ["MotoGear Ltd", "Thread Mismatch", "Critical", "3"],
                    ["Precise Inc", "Dimension OOS", "Major", "7"],
                  ].map((row, i) => {
                    const rowOpacity = interpolate(
                      Math.max(0, frame - 45 - i * 6),
                      [0, 10],
                      [0, 1],
                      { extrapolateRight: "clamp" },
                    );
                    const severityColor =
                      row[2] === "Critical"
                        ? "#ef4444"
                        : row[2] === "Major"
                          ? "#fb923c"
                          : "#eab308";
                    return (
                      <tr
                        key={i}
                        className="border-b border-slate-800/60"
                        style={{ opacity: rowOpacity }}
                      >
                        <td className="py-1.5 text-slate-300">{row[0]}</td>
                        <td className="py-1.5 text-slate-400">{row[1]}</td>
                        <td className="py-1.5">
                          <span
                            className="px-1.5 py-0.5 rounded-full text-[9px] font-semibold text-white"
                            style={{ backgroundColor: severityColor + "99" }}
                          >
                            {row[2]}
                          </span>
                        </td>
                        <td className="py-1.5 text-right text-slate-300">{row[3]}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </ScreenFrame>

          <ScreenFrame startFrame={45} label="Action Plans">
            <div className="p-3 h-full flex flex-col">
              <div className="text-xs text-slate-400 mb-2">Improvement Tracking</div>
              {[
                { title: "Reduce surface defects", progress: 65, owner: "Rajesh K." },
                { title: "Update torque specs", progress: 30, owner: "Priya S." },
                { title: "Operator retraining", progress: 90, owner: "Amit P." },
              ].map((plan, i) => {
                const planOpacity = interpolate(
                  Math.max(0, frame - 60 - i * 6),
                  [0, 10],
                  [0, 1],
                  { extrapolateRight: "clamp" },
                );
                return (
                  <div
                    key={plan.title}
                    className="rounded-lg bg-slate-700/30 border border-slate-700/40 p-2 mb-2"
                    style={{ opacity: planOpacity }}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-slate-200 font-medium" style={{ fontFamily }}>
                        {plan.title}
                      </span>
                      <span className="text-[10px] text-slate-500">{plan.owner}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-1.5 rounded-full bg-slate-700 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-cyan-400"
                          style={{ width: `${plan.progress}%` }}
                        />
                      </div>
                      <span className="text-[10px] text-cyan-400 font-mono">
                        {plan.progress}%
                      </span>
                    </div>
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

import React from "react";
import { AbsoluteFill, Audio, staticFile, useCurrentFrame, interpolate, Easing } from "remotion";
import { fontFamily } from "../components/font";
import { Background } from "../components/Background";
import { AnimatedText } from "../components/AnimatedText";
import { ScreenFrame } from "../components/ScreenFrame";
import { SCENE, NAV_SECTIONS } from "../constants";

const SidebarMock: React.FC<{ frame: number; startFrame: number }> = ({
  frame,
  startFrame,
}) => {
  const localFrame = Math.max(0, frame - startFrame);
  const opacity = interpolate(localFrame, [0, 15], [0, 1], {
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  return (
    <div
      className="absolute left-0 top-0 bottom-0 w-48 bg-slate-900/90 border-r border-slate-700/60 p-3 pt-2 flex flex-col gap-4"
      style={{ opacity }}
    >
      <div className="text-cyan-400 text-sm font-black tracking-tight">
        DOJO 2.0
      </div>
      {NAV_SECTIONS.map((section) => (
        <div key={section.section}>
          <div className="text-[10px] uppercase tracking-widest text-slate-600 mb-1.5 font-semibold">
            {section.section}
          </div>
          <div className="space-y-1">
            {section.items.map((item, i) => {
              const itemOpacity = interpolate(
                Math.max(0, localFrame - 10 - i * 3),
                [0, 10],
                [0, 1],
                { extrapolateRight: "clamp" },
              );
              const isActive = i === 0 && section.section === "Overview";
              return (
                <div
                  key={item}
                  className="text-xs py-1.5 px-2 rounded-md"
                  style={{
                    opacity: itemOpacity,
                    backgroundColor: isActive ? "rgba(34, 211, 238, 0.1)" : "transparent",
                    color: isActive ? "#22d3ee" : "#64748b",
                  }}
                >
                  {item}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export const Scene3_Navigation: React.FC = () => {
  const frame = useCurrentFrame();
  const dur = SCENE.navigation.dur;
  const exitOpacity = interpolate(frame, [dur - 15, dur], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <Background>
      <Audio src={staticFile("voiceover/dojo-demo/scene-03-navigation.mp3")} />
      <AbsoluteFill
        className="flex flex-col items-center justify-center"
        style={{ opacity: exitOpacity }}
      >
        <AnimatedText startFrame={0}>
          <h1
            className="text-4xl font-bold text-white mb-2 text-center"
            style={{ fontFamily }}
          >
            Dashboard Command Center
          </h1>
        </AnimatedText>
        <AnimatedText startFrame={15} className="mb-8">
          <p className="text-base text-slate-400 text-center" style={{ fontFamily }}>
            Collapsible sidebar · Dynamic breadcrumb · Theme toggle
          </p>
        </AnimatedText>

        <ScreenFrame startFrame={35} label="Dashboard Shell">
          <div className="relative w-full h-full">
            <SidebarMock frame={frame} startFrame={35} />
            <div className="absolute left-48 right-0 top-0 bottom-0 p-4">
              <div className="flex items-center gap-2 mb-4 text-xs text-slate-500">
                <span>🏠</span>
                <span>/</span>
                <span className="text-cyan-400">Manpower Dashboard</span>
              </div>
              <div className="flex gap-2 mb-4">
                <div className="h-5 w-20 rounded bg-slate-700/40" />
                <div className="h-5 w-16 rounded bg-slate-700/40" />
                <div className="ml-auto flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-cyan-500/30" />
                  <div className="w-6 h-6 rounded bg-slate-700/40" />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="h-20 rounded-lg bg-slate-700/30 border border-slate-700/40 p-2"
                  >
                    <div className="text-[10px] text-slate-500">KPI {i}</div>
                    <div className="text-lg font-bold text-white mt-1">--</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScreenFrame>
      </AbsoluteFill>
    </Background>
  );
};

function KpiBox({
  label,
  value,
  sub,
  color,
}: {
  label: string;
  value: string;
  sub: string;
  color: string;
}) {
  return (
    <div className="rounded-lg bg-slate-700/30 border border-slate-700/40 p-3 flex flex-col">
      <span className="text-[10px] text-slate-500 uppercase tracking-wider">{label}</span>
      <span className="text-xl font-bold" style={{ color }}>
        {value}
      </span>
      <span className="text-[10px] text-slate-600">{sub}</span>
    </div>
  );
}

export const Scene4_Manpower: React.FC = () => {
  const frame = useCurrentFrame();
  const dur = SCENE.manpower.dur;
  const exitOpacity = interpolate(frame, [dur - 15, dur], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <Background>
      <Audio src={staticFile("voiceover/dojo-demo/scene-04-manpower.mp3")} />
      <AbsoluteFill
        className="flex flex-col items-center justify-center"
        style={{ opacity: exitOpacity }}
      >
        <AnimatedText startFrame={0}>
          <h1
            className="text-3xl font-bold text-white mb-1"
            style={{ fontFamily }}
          >
            Manpower Dashboard
          </h1>
        </AnimatedText>
        <AnimatedText startFrame={15} className="mb-6">
          <p className="text-sm text-slate-400" style={{ fontFamily }}>
            Your operational pulse — in real time
          </p>
        </AnimatedText>

        <ScreenFrame startFrame={30} label="Manpower Dashboard">
          <div className="p-4 h-full flex flex-col gap-2">
            <div className="grid grid-cols-3 gap-2">
              <KpiBox label="Shift A" value="24/28" sub="Required / Actual" color="#22d3ee" />
              <KpiBox label="Absenteeism" value="3.2%" sub="Last 30 days ↓" color="#4ade80" />
              <KpiBox label="Attrition" value="8.7%" sub="12-month trend" color="#fb923c" />
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="rounded-lg bg-slate-700/30 border border-slate-700/40 p-3 flex flex-col items-center">
                <span className="text-[10px] text-slate-500">Coverage</span>
                <div className="relative w-16 h-16 mt-1">
                  <svg viewBox="0 0 36 36" className="w-full h-full">
                    <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#334155" strokeWidth="3" />
                    <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#22d3ee" strokeWidth="3" strokeDasharray="86, 100" />
                  </svg>
                  <span className="absolute inset-0 flex items-center justify-center text-sm font-bold text-cyan-400">86%</span>
                </div>
              </div>
              <div className="rounded-lg bg-slate-700/30 border border-slate-700/40 p-3 flex flex-col items-center">
                <span className="text-[10px] text-slate-500">Utilization</span>
                <div className="relative w-16 h-16 mt-1">
                  <svg viewBox="0 0 36 36" className="w-full h-full">
                    <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#334155" strokeWidth="3" />
                    <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#4ade80" strokeWidth="3" strokeDasharray="74, 100" />
                  </svg>
                  <span className="absolute inset-0 flex items-center justify-center text-sm font-bold text-green-400">74%</span>
                </div>
              </div>
              <div className="rounded-lg bg-slate-700/30 border border-slate-700/40 p-3 flex flex-col items-center">
                <span className="text-[10px] text-slate-500">Today OT</span>
                <div className="relative w-16 h-16 mt-1">
                  <svg viewBox="0 0 36 36" className="w-full h-full">
                    <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#334155" strokeWidth="3" />
                    <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#fb923c" strokeWidth="3" strokeDasharray="42, 100" />
                  </svg>
                  <span className="absolute inset-0 flex items-center justify-center text-sm font-bold text-orange-400">42h</span>
                </div>
              </div>
            </div>
            <div className="flex-1 rounded-lg bg-slate-700/20 border border-slate-700/30 p-3 flex items-center justify-center">
              <span className="text-[10px] text-slate-600">
                Absenteeism Trend · Attrition Reasons · Overtime Trend →
              </span>
            </div>
            <div className="text-[9px] text-slate-600 text-center">
              Date picker · PDF Export · Share · Live Alerts
            </div>
          </div>
        </ScreenFrame>
      </AbsoluteFill>
    </Background>
  );
};

export const Scene5_DrillDown: React.FC = () => {
  const frame = useCurrentFrame();
  const dur = SCENE.drilldown.dur;
  const exitOpacity = interpolate(frame, [dur - 15, dur], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const overlayOpacity = interpolate(
    Math.max(0, frame - 30),
    [0, 15],
    [0, 0.7],
    { extrapolateRight: "clamp" },
  );
  const modalScale = interpolate(
    Math.max(0, frame - 30),
    [0, 20],
    [0.9, 1],
    { extrapolateRight: "clamp", easing: Easing.bezier(0.16, 1, 0.3, 1) },
  );

  return (
    <Background>
      <Audio src={staticFile("voiceover/dojo-demo/scene-05-drilldown.mp3")} />
      <AbsoluteFill
        className="flex flex-col items-center justify-center"
        style={{ opacity: exitOpacity }}
      >
        <AnimatedText startFrame={0}>
          <h1
            className="text-3xl font-bold text-white mb-1"
            style={{ fontFamily }}
          >
            Dive Deeper
          </h1>
        </AnimatedText>
        <AnimatedText startFrame={15} className="mb-8">
          <p className="text-sm text-slate-400" style={{ fontFamily }}>
            Click any chart to expand · Info modals explain every metric
          </p>
        </AnimatedText>

        <div className="relative" style={{ width: 960, height: 540 }}>
          <ScreenFrame startFrame={0} label="Dashboard">
            <div className="p-4 flex items-center justify-center h-full">
              <div className="rounded-lg bg-slate-700/30 border border-slate-700/40 p-4 w-80">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-slate-400">Absenteeism Trend</span>
                  <span className="text-cyan-400 text-xs">⛶</span>
                </div>
                <svg viewBox="0 0 200 60" className="w-full h-16">
                  <polyline
                    points="0,50 30,40 60,45 90,25 120,35 150,20 180,30"
                    fill="none"
                    stroke="#22d3ee"
                    strokeWidth="2"
                  />
                  <circle cx="90" cy="25" r="3" fill="#22d3ee" />
                </svg>
              </div>
            </div>
          </ScreenFrame>

          <div
            className="absolute inset-0 bg-slate-950 rounded-xl flex items-center justify-center"
            style={{ opacity: overlayOpacity }}
          >
            <div
              className="bg-slate-800 rounded-xl border border-slate-700 shadow-2xl p-5 w-[700px]"
              style={{ scale: `${modalScale}` }}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-white font-semibold text-base" style={{ fontFamily }}>
                  Absenteeism Trend — Expanded
                </h3>
                <span className="text-slate-500 text-xs">✕</span>
              </div>
              <svg viewBox="0 0 500 120" className="w-full h-28">
                <polyline
                  points="0,100 50,80 100,90 150,55 200,70 250,40 300,60 350,30 400,50 450,35 500,45"
                  fill="none"
                  stroke="#22d3ee"
                  strokeWidth="2.5"
                />
                {[0, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500].map(
                  (x, i) => (
                    <circle key={x} cx={x} cy={[100, 80, 90, 55, 70, 40, 60, 30, 50, 35, 45][i]} r="3.5" fill="#22d3ee" />
                  ),
                )}
              </svg>
              <div className="flex justify-between text-[10px] text-slate-600 mt-1">
                <span>Jun 1</span>
                <span>Jun 15</span>
                <span>Jun 30</span>
              </div>
              <div className="mt-3 p-2 rounded bg-slate-700/40 border border-slate-700/50">
                <span className="text-xs text-cyan-400 font-medium" style={{ fontFamily }}>
                  ℹ Absenteeism Rate
                </span>
                <p className="text-[11px] text-slate-400 mt-1 leading-relaxed" style={{ fontFamily }}>
                  Percentage of scheduled workforce absent over the selected period.
                </p>
              </div>
            </div>
          </div>
        </div>
      </AbsoluteFill>
    </Background>
  );
};

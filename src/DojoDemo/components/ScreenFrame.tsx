import React from "react";
import { interpolate, Easing, useCurrentFrame } from "remotion";

interface ScreenFrameProps {
  startFrame: number;
  children: React.ReactNode;
  label?: string;
}

export const ScreenFrame: React.FC<ScreenFrameProps> = ({
  startFrame,
  children,
  label,
}) => {
  const frame = useCurrentFrame();
  const localFrame = Math.max(0, frame - startFrame);

  const opacity = interpolate(localFrame, [0, 15], [0, 1], {
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });
  const scale = interpolate(localFrame, [0, 15], [0.95, 1], {
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  return (
    <div
      className="relative rounded-xl border border-slate-700/60 bg-slate-800/60 backdrop-blur-sm overflow-hidden shadow-2xl"
      style={{ opacity, scale, width: 960, height: 540 }}
    >
      {label && (
        <div className="absolute top-0 left-0 right-0 h-8 bg-slate-800 border-b border-slate-700/60 flex items-center px-4 gap-2 z-10">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
          </div>
          <span className="text-xs text-slate-500 ml-3">{label}</span>
        </div>
      )}
      <div className="w-full h-full pt-8">
        {children}
      </div>
    </div>
  );
};

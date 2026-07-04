import React from "react";
import { interpolate, Easing, useCurrentFrame } from "remotion";

interface FeatureCardProps {
  icon: string;
  label: string;
  index: number;
  startFrame: number;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  label,
  index,
  startFrame,
}) => {
  const frame = useCurrentFrame();

  const localFrame = Math.max(0, frame - startFrame - index * 8);
  const opacity = interpolate(localFrame, [0, 15], [0, 1], {
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });
  const scale = interpolate(localFrame, [0, 15], [0.85, 1], {
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  return (
    <div
      className="flex flex-col items-center gap-3"
      style={{ opacity, scale }}
    >
      <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-2xl">
        {icon}
      </div>
      <span className="text-sm text-slate-300 font-medium text-center leading-tight max-w-[100px]">
        {label}
      </span>
    </div>
  );
};

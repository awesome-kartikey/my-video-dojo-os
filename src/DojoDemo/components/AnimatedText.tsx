import React from "react";
import { interpolate, Easing, useCurrentFrame } from "remotion";

interface AnimatedTextProps {
  children: React.ReactNode;
  startFrame: number;
  duration?: number;
  className?: string;
  slideUp?: boolean;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  children,
  startFrame,
  duration = 20,
  className = "",
  slideUp = true,
}) => {
  const frame = useCurrentFrame();

  const localFrame = Math.max(0, frame - startFrame);

  const opacity = interpolate(localFrame, [0, duration], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  const translateY = slideUp
    ? interpolate(localFrame, [0, duration], [30, 0], {
        extrapolateRight: "clamp",
        easing: Easing.bezier(0.16, 1, 0.3, 1),
      })
    : 0;

  return (
    <div
      className={className}
      style={{ opacity, translate: `0 ${translateY}px` }}
    >
      {children}
    </div>
  );
};

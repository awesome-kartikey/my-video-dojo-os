import React from "react";
import { AbsoluteFill } from "remotion";

export const Background: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = "" }) => {
  return (
    <AbsoluteFill
      className={`bg-gradient-to-b from-slate-900 to-slate-950 ${className}`}
    >
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 25% 50%, #22d3ee 0%, transparent 50%), radial-gradient(circle at 75% 50%, #0891b2 0%, transparent 50%)",
        }}
      />
      {children}
    </AbsoluteFill>
  );
};

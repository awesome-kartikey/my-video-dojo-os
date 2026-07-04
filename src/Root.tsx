import React from "react";
import "./index.css";
import { Composition } from "remotion";
import { DojoDemo } from "./DojoDemo/DojoDemo";
import { TOTAL_FRAMES } from "./DojoDemo/durations";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="DojoDemo"
        component={DojoDemo}
        durationInFrames={TOTAL_FRAMES}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};

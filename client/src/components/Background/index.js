import React from "react";
import Smoke from "../video/smoke.mp4";

const Background = () => {
  return (
    <div>
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          width: "100%",
          left: "50%",
          top: "50%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: "-1",
          opacity: "0.5",
        }}
      >
        <source src={Smoke} type="video/mp4" />
      </video>
    </div>
  );
};

export default Background;

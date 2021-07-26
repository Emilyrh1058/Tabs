import React from "react";
import Smoke from "../video/smoke2.mp4";

const Background = () => {
  return (
    <div>
      <video
        autoPlay
        loop
        muted
        style={{
          position: "fixed",
          width: "100%",
          left: "50%",
          top: "50%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: "-1",
          opacity: "0.95",
        }}
      >
        <source src={Smoke} type="video/mp4" />
      </video>
    </div>
  );
};

export default Background;

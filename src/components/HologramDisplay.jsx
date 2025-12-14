import React from "react";

const HologramDisplay = ({ text }) => {
  return (
    <div className="hologram-screen">
      <h1 className="hologram-text">{text}</h1>
    </div>
  );
};

export default HologramDisplay;

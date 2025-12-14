import React from "react";

const DialControls = ({ rotateLeft, rotateRight }) => {
  return (
    <div className="control-panel">
      <button className="rotate-btn" onClick={rotateLeft}>◀</button>
      <button className="rotate-btn" onClick={rotateRight}>▶</button>
    </div>
  );
};

export default DialControls;

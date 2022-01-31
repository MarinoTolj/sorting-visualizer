import React from "react";

const DEFAULT = "rgba(233,236,239,255)";
const RED = "rgba(220,53,69,255)";
const YELLOW = "rgba(255,193,7,255)";
const GREEN = "rgba(80,196,153,255)";

//rgba(25,135,84,255)

const ProgressBar = ({ steps }) => {
  const color =
    steps.done / steps.total < 0.5
      ? RED
      : steps.done / steps.total >= 0.5 && steps.done / steps.total < 0.75
      ? YELLOW
      : steps.done / steps.total >= 0.74
      ? GREEN
      : DEFAULT;

  const divStyle = {
    width: "1280px",
    height: "30px",
    backgroundColor: DEFAULT,
    borderRadius: "10px",
    marginBottom: "5px",
  };

  const barStyle = {
    width: maps(steps.done / steps.total, 0, 1, 0, 1280),
    height: "30px",
    backgroundColor: color,
    borderRadius: "10px",
  };

  function maps(n, start1, stop1, start2, stop2) {
    if (isNaN(n)) return 0;

    return ((n - start1) / (stop1 - start1)) * (stop2 - start2) + start2;
  }

  return (
    <div style={divStyle}>
      <div style={barStyle}></div>
    </div>
  );
};

export default ProgressBar;

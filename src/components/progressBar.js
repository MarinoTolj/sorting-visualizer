import React from "react";
import * as styles from "../styles/progressBar.module.css";
import classNames from "classnames";

const ProgressBar = ({ steps }) => {
  const variant =
    steps.done / steps.total < 0.5
      ? "red"
      : steps.done / steps.total >= 0.5 && steps.done / steps.total < 0.75
      ? "yellow"
      : "green";
  const style = {
    width: "1280px",
    height: "30px",
    backgroundColor: variant,
    border: "1px solid grey",
    borderRadius: "5px",
  };

  return (
    <div style={style}>
      {/* <progress
        className={styles.progressbar}
        style={style}
        value={steps.done}
        max={steps.total}
      /> */}
    </div>
  );
};

export default ProgressBar;

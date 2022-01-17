import React from "react";
import * as styles from "../styles/toggle.module.css";
import classNames from "classnames";

const Toggle = ({ setToggle }) => {
  return (
    <label className={styles.switch1}>
      <input type="checkbox" onChange={() => setToggle((prev) => !prev)} />
      <span className={classNames(styles.slider, styles.round)}></span>
    </label>
  );
};

export default Toggle;

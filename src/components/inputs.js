import React from "react";
import * as styles from "../styles/input.module.css";

const ARRAY_SIZE_MIN = 5;
const ARRAY_SIZE_MAX = 256;

const SORT_SPEED_MIN = 5;
const SORT_SPEED_MAX = 1000;

const Inputs = ({
  arraySize,
  setArraySize,
  sortSpeed,
  setSortSpeed,
  isRunning,
}) => {
  const handleChange = (e) => {
    setArraySize(parseInt(e.target.value));
  };
  const handleSpeed = (e) => {
    setSortSpeed(parseInt(e.target.value));
  };
  return (
    <div className={styles.inputcontainer}>
      <div className={styles.input}>
        <h2>Change the size of array</h2>
        {ARRAY_SIZE_MIN}
        <input
          type="range"
          min={ARRAY_SIZE_MIN}
          max={ARRAY_SIZE_MAX}
          value={arraySize}
          onChange={handleChange}
          className={styles.slider}
          disabled={isRunning}
        />
        {ARRAY_SIZE_MAX}
        <br />
        {arraySize} elements
      </div>

      <br />
      <div className={styles.input}>
        <h2>Change the speed of sorting</h2>
        {SORT_SPEED_MIN}ms
        <input
          type="range"
          min={SORT_SPEED_MIN}
          max={SORT_SPEED_MAX}
          value={sortSpeed}
          onChange={handleSpeed}
          className={styles.slider}
          disabled={isRunning}
        />
        {SORT_SPEED_MAX}ms
        <br />
        {sortSpeed}ms
      </div>
    </div>
  );
};

export default Inputs;

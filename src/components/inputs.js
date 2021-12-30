import React from "react";
import * as styles from "../styles/input.module.css";

const ARRAY_SIZE_MIN = 5;
const ARRAY_SIZE_MAX = 256;

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
        5ms
        <input
          type="range"
          min={5}
          max={1000}
          value={sortSpeed}
          onChange={handleSpeed}
          className={styles.slider}
          disabled={isRunning}
        />
        1000ms
        <br />
        {sortSpeed}ms
      </div>
    </div>
  );
};

export default Inputs;

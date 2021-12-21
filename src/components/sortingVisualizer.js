import React from "react";
import * as styles from "../styles/sortingVisualizer.module.css";
import { useState, useEffect } from "react";
import ButtonComponent from "./button";
import AlgorithmChoice from "../algorithms/algorithmChoice";
import ArrayList from "./arrayList";

const MIN_VALUE_OF_ARRAY = 5;
const MAX_VALUE_OF_ARRAY = 300;
const ARRAY_SIZE_MIN = 5;
const ARRAY_SIZE_MAX = 125;
export const COLOR_ARRAY = "rgba(13,110,253,255)";

export default function SortingVisualizer() {
  const [arraySize, setArraySize] = useState(ARRAY_SIZE_MAX);
  const [sortSpeed, setSortSpeed] = useState(10);
  const [array, setArray] = useState(GenerateRandomArray());
  const [description, setDescription] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const buttons = [
    {
      variant: "secondary",
      text: "Bubble sort",
    },
    {
      variant: "secondary",
      text: "Insertion sort",
    },
    {
      variant: "secondary",
      text: "Selection sort",
    },
  ];

  const handleChange = (e) => {
    setArraySize(parseInt(e.target.value));
  };

  const handleSpeed = (e) => {
    setSortSpeed(parseInt(e.target.value));
  };

  useEffect(() => {
    handleReset();
  }, [arraySize]);

  const handleAlgorithmChoice = (e) => {
    console.log(e.target);
    AlgorithmChoice(
      array,
      setArray,
      setIsRunning,
      setDescription,
      sortSpeed,
      e.target.value
    );
  };

  function handleReset() {
    console.log(window.innerWidth);
    setArray(GenerateRandomArray());
  }

  function GenerateRandomArray() {
    let array = [];
    for (let i = 0; i < arraySize; i++) {
      array.push({
        value: Math.floor(
          Math.random() * (MAX_VALUE_OF_ARRAY - MIN_VALUE_OF_ARRAY + 1) +
            MIN_VALUE_OF_ARRAY
        ),
        color: COLOR_ARRAY,
      });
    }
    return array;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Sorting Visualizer</h1>

      <div className={styles.btn}>
        <ButtonComponent
          variant="primary"
          text={"Reset"}
          onClick={handleReset}
          disabled={isRunning}
        />
        {buttons.map((button, index) => (
          <ButtonComponent
            key={index}
            variant={button.variant}
            onClick={handleAlgorithmChoice}
            value={button.text}
            text={button.text}
            size={button.size}
            disabled={isRunning}
          />
        ))}
      </div>
      <h2>Change the size of array</h2>
      <input
        type="range"
        min={ARRAY_SIZE_MIN}
        max={ARRAY_SIZE_MAX}
        value={arraySize}
        onChange={handleChange}
        className={styles.slider}
        disabled={isRunning}
      />
      <br />
      <h2>Change the speed of array</h2>
      <input
        type="range"
        min={5}
        max={1000}
        value={sortSpeed}
        onChange={handleSpeed}
        className={styles.slider}
        disabled={isRunning}
      />
      <ArrayList array={array} description={description} styles={styles} />
    </div>
  );
}

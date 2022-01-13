import React from "react";
import * as styles from "../styles/sortingVisualizer.module.css";
import { useState, useEffect } from "react";

import AlgorithmChoice from "../algorithms/algorithmChoice";
import ArrayList from "./arrayList";
import Inputs from "./inputs";
import Buttons from "./buttons";

const MIN_VALUE_OF_ARRAY = 5;
const MAX_VALUE_OF_ARRAY = 300;

export const COLUMNS_COLOR = "rgba(13,110,253,255)";

export default function SortingVisualizer() {
  const [arraySize, setArraySize] = useState(256);
  const [sortSpeed, setSortSpeed] = useState(5);
  const [array, setArray] = useState(GenerateRandomArray());
  const [description, setDescription] = useState("");
  //checks if algorithm is running which makes other buttons disabled because it leads to problems
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    handleReset();
  }, [arraySize]);

  const handleAlgorithmChoice = (e) => {
    AlgorithmChoice(
      array,
      setArray,
      setIsRunning,
      setDescription,
      sortSpeed,
      e.target.value
    );
  };

  const worstCaseArray = () => {
    let array = [];
    for (let i = 0; i < arraySize; i++) {
      array.push({ value: MAX_VALUE_OF_ARRAY - i, color: COLUMNS_COLOR });
    }

    setArray(array);
  };

  const bestCaseArray = () => {
    let array = [];
    for (let i = 0; i < arraySize; i++) {
      array.push({ value: 45 + i, color: COLUMNS_COLOR });
    }

    setArray(array);
  };

  function handleReset() {
    setArray(GenerateRandomArray());
  }

  function GenerateRandomArray() {
    let array = [];
    for (let i = 0; i < arraySize; i++) {
      array.push({
        value: Math.floor(
          Math.random() * (MAX_VALUE_OF_ARRAY - MIN_VALUE_OF_ARRAY) +
            MIN_VALUE_OF_ARRAY
        ),
        color: COLUMNS_COLOR,
      });
    }

    return array;
  }

  return (
    <div className={styles.container}>
      <h1>Sorting Visualizer</h1>
      <Buttons
        handleReset={handleReset}
        isRunning={isRunning}
        handleAlgorithmChoice={handleAlgorithmChoice}
        worstCaseArray={worstCaseArray}
        bestCaseArray={bestCaseArray}
      />
      <Inputs
        arraySize={arraySize}
        setArraySize={setArraySize}
        sortSpeed={sortSpeed}
        setSortSpeed={setSortSpeed}
        isRunning={isRunning}
      />

      <ArrayList
        array={array}
        description={description}
        arraySize={arraySize}
      />
    </div>
  );
}
//function for pausing the algorithm so that changes are visible for certain amount of time
export function sleep(sortSpeed) {
  return new Promise((resolve) => setTimeout(resolve, sortSpeed));
}

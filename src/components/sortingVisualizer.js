import React from "react";
import * as styles from "../styles/sortingVisualizer.module.css";
import { useState, useEffect } from "react";

import AlgorithmChoice from "../algorithms/algorithmChoice";
import ArrayList from "./arrayList";
import Inputs from "./inputs";
import Buttons from "./buttons";

const MIN_VALUE_OF_ARRAY = 5;
const MAX_VALUE_OF_ARRAY = 300;

export const COLOR_ARRAY = "rgba(13,110,253,255)";

export default function SortingVisualizer() {
  const [arraySize, setArraySize] = useState(256);
  const [sortSpeed, setSortSpeed] = useState(5);
  const [array, setArray] = useState(GenerateRandomArray());
  const [description, setDescription] = useState("");
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
      array.push({ value: MAX_VALUE_OF_ARRAY - i, color: COLOR_ARRAY });
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
        value: MAX_VALUE_OF_ARRAY - i,
        color: COLOR_ARRAY,
      });
    }
    array = shuffle(array);
    return array;
  }

  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
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

export function sleep(sortSpeed) {
  return new Promise((resolve) => setTimeout(resolve, sortSpeed));
}

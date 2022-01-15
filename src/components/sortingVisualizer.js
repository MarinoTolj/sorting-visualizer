import React from "react";
import * as styles from "../styles/sortingVisualizer.module.css";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";

import AlgorithmChoice from "../algorithms/algorithmChoice";
import ArrayList from "./arrayList";
import Inputs from "./inputs";
import Buttons from "./buttons";

const MIN_VALUE_OF_ARRAY = 5;
const MAX_VALUE_OF_ARRAY = 300;

export const COLUMNS_COLOR = "rgba(13,110,253,255)";

export default function SortingVisualizer() {
  const [arraySize, setArraySize] = useState(64);
  const [sortSpeed, setSortSpeed] = useState(5);
  const [array, setArray] = useState(GenerateRandomArray());
  const [description, setDescription] = useState("");

  //checks if algorithm is running which makes other buttons disabled because it leads to problems
  const [isRunning, setIsRunning] = useState(false);
  const [animations, setAnimations] = useState([]);

  useEffect(() => {
    handleReset();
  }, [arraySize]);

  useEffect(() => {
    if (animations.length > 0) {
      handleAnimation();
    }
  }, [animations]);

  useEffect(() => {
    console.log(sortSpeed);
    setSortSpeed(sortSpeed);
  }, [sortSpeed]);

  const handleAlgorithmChoice = (e) => {
    let animations = [];
    /* handleName(e.target.value); */

    animations = AlgorithmChoice(
      array,
      setArray,
      animations,
      sortSpeed,
      setDescription,
      e.target.value
    );
    setAnimations(animations);
  };

  const worstCaseArray = () => {
    let array = [];
    for (let i = 0; i < arraySize; i++) {
      array.push({ value: MAX_VALUE_OF_ARRAY - i, color: COLUMNS_COLOR });
    }

    setArray(array);
  };

  /* const bestCaseArray = () => {
    let array = [];
    for (let i = 0; i < arraySize; i++) {
      array.push({ value: 45 + i, color: COLUMNS_COLOR });
    }

    setArray(array);
  }; */

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

  const handleBubble = () => {
    let temp = 0;
    let array2 = [...array];
    for (let i = 0; i < array2.length; i++) {
      for (let j = 0; j < array2.length - 1; j++) {
        if (array2[j].value > array2[j + 1].value) {
          temp = array2[j];
          array2[j] = array2[j + 1];
          array2[j + 1] = temp;
          animations.push({ x: j, y: j + 1 });
        }
      }
    }

    setAnimations([...animations]);
    console.log(animations);
  };

  const handleAnimation = async () => {
    let temp = 0;

    for (let i = 0; i < animations.length; i++) {
      array[animations[i].x].color = "red";
      array[animations[i].y].color = "red";

      temp = array[animations[i].x].value;
      array[animations[i].x].value = array[animations[i].y].value;
      array[animations[i].y].value = temp;

      setArray([...array]);
      await sleep(sortSpeed);
      array[animations[i].x].color = COLUMNS_COLOR;
      array[animations[i].y].color = COLUMNS_COLOR;
    }
    setArray([...array]);
  };

  return (
    <div className={styles.container}>
      <h1>Sorting Visualizer</h1>
      <Buttons
        handleReset={handleReset}
        isRunning={isRunning}
        handleAlgorithmChoice={handleAlgorithmChoice}
        worstCaseArray={worstCaseArray}
        /* bestCaseArray={bestCaseArray} */
      />
      <Button onClick={handleBubble}>Bubble 2</Button>
      <Button onClick={handleAnimation}>Sort</Button>
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

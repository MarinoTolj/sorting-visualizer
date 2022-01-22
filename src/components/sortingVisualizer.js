import React from "react";
import * as styles from "../styles/sortingVisualizer.module.css";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";

import AlgorithmChoice from "../algorithms/algorithmChoice";
import ArrayList from "./arrayList";
import Inputs from "./inputs";
import Buttons from "./buttons";

const MIN_VALUE_OF_ARRAY = 5;
const MAX_VALUE_OF_ARRAY = 200;

export const COLUMNS_COLOR = "rgba(13,110,253,255)";

export default function SortingVisualizer() {
  const [arraySize, setArraySize] = useState(32);
  const [sortSpeed, setSortSpeed] = useState(5);
  const [array, setArray] = useState(GenerateRandomArray());
  const [description, setDescription] = useState("");
  const [bucketSize, setBucketSize] = useState(15);
  const [steps, setSteps] = useState({ total: 0, remaining: 0 });
  /* const [totalSteps, setTotalSteps] = useState(0); */

  //checks if algorithm is running which makes other buttons disabled because it leads to problems
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    handleReset();
  }, [arraySize]);

  /* useEffect(() => {
    if (animations.length > 0) {
      handleAnimation();
    }
  }, [animations]); */

  /* useEffect(() => {
    console.log("run", isRunning);
    setSortSpeed(sortSpeed);
  }, [isRunning]); */

  const handleAlgorithmChoice = (e) => {
    AlgorithmChoice(
      array,
      setArray,
      sortSpeed,
      setDescription,
      setIsRunning,
      e.target.value,
      bucketSize,
      setSteps
    );
  };

  const worstCaseArray = () => {
    /* let array = [];
    let size = arraySize >= 200 ? 200 : arraySize;
    for (let i = 0; i < size; i++) {
      array.push({ value: MAX_VALUE_OF_ARRAY - i, color: COLUMNS_COLOR });
    } */
    let worstCaseArray = array
      .sort(function (a, b) {
        return a.value - b.value;
      })
      .reverse();

    setArray([...worstCaseArray]);
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

  /* const handleBubble = () => {
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
    console.log("hello", sortSpeed);

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
  }; */

  return (
    <div className={styles.container}>
      <h2>
        Number of steps to sort array: {steps.total}, remaining{" "}
        {steps.remaining}
      </h2>
      <Buttons
        handleReset={handleReset}
        isRunning={isRunning}
        handleAlgorithmChoice={handleAlgorithmChoice}
        worstCaseArray={worstCaseArray}
        bucketSize={bucketSize}
        setBucketSize={setBucketSize}
        arraySize={arraySize}
        /* bestCaseArray={bestCaseArray} */
      />
      {/* <Button onClick={handleBubble}>Bubble 2</Button>
      <Button onClick={handleAnimation}>Sort</Button> */}
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

import React from "react";
import * as styles from "../styles/sortingVisualizer.module.css";
import { useState, useEffect } from "react";
import BubbleSort from "../algorithms/bubbleSort";
import ButtonComponent from "./button";
import { Container } from "react-bootstrap";

const MIN_VALUE_OF_ARRAY = 5;
const MAX_VALUE_OF_ARRAY = 300;
const ARRAY_SIZE_MIN = 5;
const ARRAY_SIZE_MAX = 125;

export default function SortingVisualizer() {
  const [arraySize, setArraySize] = useState(100);
  const [array, setArray] = useState(GenerateRandomArray());

  const buttons = [
    {
      variant: "primary",
      onClickEvent: handleReset,
      text: "Reset",
    },
    {
      variant: "secondary",
      onClickEvent: handleBubble,
      text: "Bubble sort",
    },
    {
      variant: "secondary",
      onClickEvent: handleBubble,
      text: "merge sort",
    },
  ];

  const handleChange = (e) => {
    setArraySize(parseInt(e.target.value));
  };

  useEffect(() => {
    handleReset();
  }, [arraySize]);

  function handleBubble() {
    BubbleSort(array, setArray);
  }

  function handleReset() {
    console.log(navigator.userAgent);
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
        color: "blue",
      });
    }
    return array;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Sorting Visualizer</h1>
      <div className={styles.btn}>
        {buttons.map((button, index) => (
          <ButtonComponent
            key={index}
            variant={button.variant}
            onClick={button.onClickEvent}
            text={button.text}
            size={button.size}
          />
        ))}
      </div>
      <p>Change the size of array</p>
      <input
        type="range"
        min={ARRAY_SIZE_MIN}
        max={ARRAY_SIZE_MAX}
        value={arraySize}
        onChange={handleChange}
        className={styles.slider}
      />

      <div className={styles.arraycontainer}>
        {array.map((element, index) => (
          <div
            key={index}
            className={styles.arrayelement}
            style={{
              width: "4px",
              height: `${element.value}px`,
              backgroundColor: `${element.color}`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

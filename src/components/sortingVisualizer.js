import React from "react";
import * as styles from "../styles/sortingVisualizer.module.css";
import { useState, useEffect } from "react";
import BubbleSort from "../algorithms/bubbleSort";
import ButtonComponent from "./button";

const MIN_VALUE_OF_ARRAY = 5;
const MAX_VALUE_OF_ARRAY = 300;
const ARRAY_SIZE = 25;

export default function SortingVisualizer() {
  const [array, setArray] = useState([{ value: 100, color: "blue" }]);
  const buttons = [
    {
      variant: "primary",
      onClickEvent: handleReset,
      text: "Reset",
      size: "sm",
    },
    {
      variant: "secondary",
      onClickEvent: handleBubble,
      text: "Bubble sort",
      size: "sm",
    },
  ];

  function handleBubble() {
    BubbleSort(array, setArray);
  }

  function handleReset() {
    console.log(buttons);
    const array = [];
    console.log("Hello");
    for (let i = 0; i < ARRAY_SIZE; i++) {
      array.push({
        value: Math.floor(
          Math.random() * (MAX_VALUE_OF_ARRAY - MIN_VALUE_OF_ARRAY + 1) +
            MIN_VALUE_OF_ARRAY
        ),
        color: "blue",
      });
    }

    setArray(array);
  }

  return (
    <div className={styles.arraycontainer}>
      {buttons.map((button, index) => (
        <ButtonComponent
          key={index}
          variant={button.variant}
          onClick={button.onClickEvent}
          text={button.text}
          size={button.size}
        />
      ))}

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
  );
}

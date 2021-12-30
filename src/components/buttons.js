import React from "react";
import ButtonComponent from "./button";
import * as styles from "../styles/sortingVisualizer.module.css";

const Buttons = ({
  handleReset,
  isRunning,
  handleAlgorithmChoice,
  worstCaseArray,
}) => {
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
    {
      variant: "secondary",
      text: "Merge sort",
    },
    {
      variant: "secondary",
      text: "Quick sort",
    },
    {
      variant: "secondary",
      text: "Heap sort",
    },
  ];
  return (
    <div className={styles.btn}>
      <ButtonComponent
        variant="primary"
        text={"Reset"}
        onClick={handleReset}
        disabled={isRunning}
      />
      <ButtonComponent
        variant="danger"
        text={"Worst Case"}
        onClick={worstCaseArray}
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
  );
};

export default Buttons;

import React from "react";
import * as styles from "../styles/sortingVisualizer.module.css";
import Button from "react-bootstrap/Button";

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
    { variant: "secondary", text: "Radix sort" },
  ];
  return (
    <div className={styles.btn}>
      <Button variant="primary" onClick={handleReset} disabled={isRunning}>
        Reset
      </Button>
      <Button variant="danger" onClick={worstCaseArray} disabled={isRunning}>
        Worst Case
      </Button>
      {buttons.map((button, index) => (
        <Button
          key={index}
          variant={button.variant}
          onClick={handleAlgorithmChoice}
          value={button.text}
          disabled={isRunning}
        >
          {button.text}
        </Button>
      ))}
    </div>
  );
};

export default Buttons;

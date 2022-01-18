import React, { useState } from "react";
import * as styles from "../styles/sortingVisualizer.module.css";
import { Button, Dropdown } from "react-bootstrap";

const Buttons = ({
  handleReset,
  isRunning,
  handleAlgorithmChoice,
  worstCaseArray,
  bucketSize,
  setBucketSize,
  arraySize,
}) => {
  return (
    <div className={styles.btn}>
      <Button variant="primary" onClick={handleReset} disabled={isRunning}>
        Reset
      </Button>
      {/* <Button variant="success" onClick={bestCaseArray} disabled={isRunning}>
        Best Case
      </Button> */}
      <Button variant="danger" onClick={worstCaseArray} disabled={isRunning}>
        Worst Case
      </Button>
      {/* {buttons.map((button, index) => (
        <Button
          key={index}
          variant={button.variant}
          onClick={handleAlgorithmChoice}
          value={button.text}
          disabled={isRunning}
        >
          {button.text}
        </Button>
      ))} */}
      <Button
        variant="secondary"
        onClick={handleAlgorithmChoice}
        disabled={isRunning}
        value="Bubble sort"
      >
        Bubble Sort
      </Button>
      <Button
        variant="secondary"
        onClick={handleAlgorithmChoice}
        disabled={isRunning}
        value="Insertion sort"
      >
        Insertion Sort
      </Button>
      <Button
        variant="secondary"
        onClick={handleAlgorithmChoice}
        disabled={isRunning}
        value="Selection sort"
      >
        Selection Sort
      </Button>

      <Dropdown>
        <Dropdown.Toggle
          variant="secondary"
          id="dropdown-basic"
          disabled={isRunning}
        >
          Merge Sort
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Button
            variant="secondary"
            onClick={handleAlgorithmChoice}
            disabled={isRunning}
            value="Merge sort-recursive"
          >
            Recursive
          </Button>
          <Dropdown.Divider />
          <Button
            variant="secondary"
            onClick={handleAlgorithmChoice}
            disabled={isRunning}
            value="Merge sort-non-recursive"
          >
            Non-recursive
          </Button>
        </Dropdown.Menu>
      </Dropdown>
      <Button
        variant="secondary"
        onClick={handleAlgorithmChoice}
        disabled={isRunning}
        value="Quick sort"
      >
        Quick Sort
      </Button>

      <Dropdown>
        <Dropdown.Toggle
          variant="secondary"
          id="dropdown-basic"
          disabled={isRunning}
        >
          Heap Sort
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Button
            variant="secondary"
            onClick={handleAlgorithmChoice}
            disabled={isRunning}
            value="Heap sort max-heap"
          >
            Max-Heap
          </Button>
          <Dropdown.Divider />
          <Button
            variant="secondary"
            onClick={handleAlgorithmChoice}
            disabled={isRunning}
            value="Heap sort min-heap"
          >
            Min-Heap
          </Button>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown>
        <Dropdown.Toggle
          variant="secondary"
          id="dropdown-basic"
          disabled={isRunning}
        >
          Bucket sort
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <p>Change the size of bucket</p>
          <input
            type="range"
            min="1"
            max={arraySize}
            value={bucketSize}
            onChange={(e) => setBucketSize(e.target.value)}
          />
          {bucketSize}
          <Dropdown.Divider />
          <Button
            variant="secondary"
            onClick={handleAlgorithmChoice}
            disabled={isRunning}
            value="Bucket sort"
          >
            Sort
          </Button>
        </Dropdown.Menu>
      </Dropdown>
      {/* <Dropdown>
        <Dropdown.Toggle
          variant="secondary"
          id="dropdown-basic"
          disabled={isRunning}
        >
          Radix Sort
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Button
            variant="secondary"
            onClick={handleAlgorithmChoice}
            disabled={isRunning}
            value="Radix sort lsd"
          >
            LSD Variant
          </Button>
          <Dropdown.Divider />
          <Button
            variant="secondary"
            onClick={handleAlgorithmChoice}
            disabled={isRunning}
            value="Radix sort msd"
          >
            MSD Variant
          </Button>
        </Dropdown.Menu>
      </Dropdown> */}
      <Button
        variant="secondary"
        onClick={handleAlgorithmChoice}
        disabled={isRunning}
        value="Radix sort lsd"
      >
        Radix Sort
      </Button>

      <Button
        variant="secondary"
        onClick={handleAlgorithmChoice}
        disabled={isRunning}
        value="Counting sort"
      >
        Counting Sort
      </Button>
    </div>
  );
};

export default Buttons;

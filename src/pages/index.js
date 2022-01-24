import React from "react";
import SortingVisualizer from "../components/sortingVisualizer";
import "bootstrap/dist/css/bootstrap.min.css";
import Toggle from "../components/toggle";
import { useState, useEffect } from "react";
import { COLUMNS_COLOR } from "../components/sortingVisualizer";

const MIN_VALUE_OF_ARRAY = 5;
const MAX_VALUE_OF_ARRAY = 200;

export default function Index() {
  const [toggle, setToggle] = useState(false);
  const [arraySize, setArraySize] = useState(32);
  const [array, setArray] = useState([]);
  const [secondaryArray, setSecondaryArray] = useState([]);

  function handleReset() {
    GenerateRandomArray();
  }

  useEffect(() => {
    handleReset();
  }, [arraySize]);

  function GenerateRandomArray() {
    let array = [];
    let secondaryArray = [];
    let integer,
      values = [];

    for (let i = 0; i < arraySize; i++) {
      integer = generateRandomInteger();
      values.push(integer);

      array.push({
        value: integer,
        color: COLUMNS_COLOR,
      });
    }

    for (let i = 0; i < arraySize; i++) {
      secondaryArray.push({
        value: values[i],
        color: COLUMNS_COLOR,
      });
    }
    setArray([...array]);
    setSecondaryArray([...secondaryArray]);
  }

  function generateRandomInteger() {
    return Math.floor(
      Math.random() * (MAX_VALUE_OF_ARRAY - MIN_VALUE_OF_ARRAY) +
        MIN_VALUE_OF_ARRAY
    );
  }

  return (
    <div>
      <h1 style={{ display: "flex", justifyContent: "center" }}>
        Sorting Visualizer
      </h1>
      {/* <Toggle setToggle={setToggle} /> */}
      <SortingVisualizer
        array={array}
        setArray={setArray}
        handleReset={handleReset}
        arraySize={arraySize}
        setArraySize={setArraySize}
      >
        <Toggle setToggle={setToggle} />
      </SortingVisualizer>
      {toggle && (
        <SortingVisualizer
          array={secondaryArray}
          setArray={setSecondaryArray}
          handleReset={handleReset}
          arraySize={arraySize}
          setArraySize={setArraySize}
        />
      )}
    </div>
  );
}

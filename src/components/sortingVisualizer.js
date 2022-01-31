import React from "react";
import * as styles from "../styles/sortingVisualizer.module.css";
import { useState } from "react";

import AlgorithmChoice from "../algorithms/algorithmChoice";
import ArrayList from "./arrayList";
import Inputs from "./inputs";
import Buttons from "./buttons";
import ProgressBar from "./progressBar";

export const COLUMNS_COLOR = "rgba(13,110,253,255)";

export default function SortingVisualizer({
  array,
  setArray,
  handleReset,
  arraySize,
  setArraySize,
  description,
  setDescription,
  children,
}) {
  const [sortSpeed, setSortSpeed] = useState(5);
  /*  const [description, setDescription] = useState(""); */
  const [bucketSize, setBucketSize] = useState(15);
  const [steps, setSteps] = useState({ total: 0, done: 0 });

  //checks if algorithm is running which makes other buttons disabled because it leads to problems
  const [isRunning, setIsRunning] = useState(false);

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
    let worstCaseArray = array
      .sort(function (a, b) {
        return a.value - b.value;
      })
      .reverse();

    setArray([...worstCaseArray]);
  };

  return (
    <div className={styles.container}>
      <h3>
        Number of steps to sort array: {steps.done}/{steps.total}
      </h3>

      <ProgressBar steps={steps} />

      <Buttons
        handleReset={handleReset}
        isRunning={isRunning}
        handleAlgorithmChoice={handleAlgorithmChoice}
        worstCaseArray={worstCaseArray}
        bucketSize={bucketSize}
        setBucketSize={setBucketSize}
        arraySize={arraySize}
      />
      {children}
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

/* export const pageQuery = graphql`
  query MyQuery {
    markdownRemark {
      frontmatter {
        date
        slug
        title
      }
    }
  }
`; */

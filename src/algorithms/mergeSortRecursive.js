import { COLUMNS_COLOR } from "../components/sortingVisualizer";
import { sleep } from "../components/sortingVisualizer";

export default function mergeSortRecursive(
  array,
  setArray,
  sortSpeed,
  setIsRunning,
  setSteps
) {
  let steps = [];
  let auxiliaryArray = [...array];
  let tempArray = [...array];

  SplitMerge(tempArray, 0, array.length - 1, auxiliaryArray, steps);

  Vizualize(array, setArray, steps, sortSpeed, setIsRunning, setSteps);
}

function SplitMerge(mainArray, startIndex, endIndex, auxiliaryArray, steps) {
  if (startIndex === endIndex) return;
  const middleIndex = Math.floor((startIndex + endIndex) / 2);

  SplitMerge(auxiliaryArray, startIndex, middleIndex, mainArray, steps);
  SplitMerge(auxiliaryArray, middleIndex + 1, endIndex, mainArray, steps);
  Merge(mainArray, startIndex, middleIndex, endIndex, auxiliaryArray, steps);
}

function Merge(
  mainArray,
  startIndex,
  middleIndex,
  endIndex,
  auxiliaryArray,
  steps
) {
  let k = startIndex;
  let i = startIndex;
  let j = middleIndex + 1;

  while (i <= middleIndex && j <= endIndex) {
    if (auxiliaryArray[i].value <= auxiliaryArray[j].value) {
      steps.push({ x: i, y: j, q: k, z: auxiliaryArray[i].value });
      mainArray[k++] = auxiliaryArray[i++];
    } else {
      steps.push({ x: i, y: j, q: k, z: auxiliaryArray[j].value });
      mainArray[k++] = auxiliaryArray[j++];
    }
  }

  while (i <= middleIndex) {
    steps.push({ x: i, y: j, q: k, z: auxiliaryArray[i].value });
    mainArray[k++] = auxiliaryArray[i++];
  }

  while (j <= endIndex) {
    steps.push({ x: i, y: j, q: k, z: auxiliaryArray[j].value });
    mainArray[k++] = auxiliaryArray[j++];
  }
}

async function Vizualize(
  array,
  setArray,
  steps,
  sortSpeed,
  setIsRunning,
  setSteps
) {
  setIsRunning(true);

  for (let i = 0; i < steps.length; i++) {
    array[steps[i].x].color = "red";
    if (array[steps[i].y] !== undefined) {
      array[steps[i].y].color = "red";
    }

    array[steps[i].q].value = steps[i].z;

    setArray([...array]);
    await sleep(sortSpeed);

    array[steps[i].x].color = COLUMNS_COLOR;
    if (array[steps[i].y] !== undefined) {
      array[steps[i].y].color = COLUMNS_COLOR;
    }
    setSteps({ total: steps.length, done: i + 1 });
  }

  setIsRunning(false);
}

import { COLUMNS_COLOR } from "../components/sortingVisualizer";
import { sleep } from "../components/sortingVisualizer";

export default function mergeSortRecursive(
  array,
  setArray,
  sortSpeed,
  setIsRunning
) {
  let steps = [];
  let auxiliaryArray = [...array];
  let tempArray = [...array];

  SplitMerge(tempArray, 0, array.length - 1, auxiliaryArray, steps);

  Vizualize(array, setArray, steps, sortSpeed, setIsRunning);
}

function SplitMerge(mainArray, startIndex, endIndex, auxiliaryArray, steps) {
  if (startIndex === endIndex) return;
  const middleIndex = Math.floor((startIndex + endIndex) / 2);
  /* console.log(middleIndex); */
  /* let leftArray = array.slice(0, middleIndex);
  let rightArray = array.slice(middleIndex, array.length); */
  SplitMerge(auxiliaryArray, startIndex, middleIndex, mainArray, steps);
  SplitMerge(auxiliaryArray, middleIndex + 1, endIndex, mainArray, steps);
  Merge(mainArray, startIndex, middleIndex, endIndex, auxiliaryArray, steps);
  /* return Merge(
    SplitMerge(leftArray, steps),
    SplitMerge(rightArray, steps),
    steps
  ); */
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
    steps.push({ x: i, y: j, q: -1 });
    if (auxiliaryArray[i].value <= auxiliaryArray[j].value) {
      steps.push({ x: k, y: auxiliaryArray[i].value, q: 1 });
      mainArray[k++] = auxiliaryArray[i++];
    } else {
      steps.push({ x: k, y: auxiliaryArray[j].value, q: 1 });
      mainArray[k++] = auxiliaryArray[j++];
    }
  }

  while (i <= middleIndex) {
    steps.push({ x: i, y: i, q: -1 });
    steps.push({ x: k, y: auxiliaryArray[i].value, q: 1 });
    mainArray[k++] = auxiliaryArray[i++];
  }

  while (j <= endIndex) {
    steps.push({ x: j, y: j, q: -1 });
    steps.push({ x: k, y: auxiliaryArray[j].value, q: 1 });
    mainArray[k++] = auxiliaryArray[j++];
  }

  /* const output = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
    const leftElement = leftArray[leftIndex];
    const rightElement = rightArray[rightIndex];

    if (leftElement.value < rightElement.value) {
      output.push(leftElement);
      steps.push.push({ x: leftIndex, y: rightIndex });
      leftIndex++;
    } else {
      output.push(rightElement);
      steps.push({ x: leftIndex, y: rightIndex });
      rightIndex++;
    }
    console.log(leftIndex);
  }
  
  return [
    ...output,
    ...leftArray.slice(leftIndex),
    ...rightArray.slice(rightIndex),
  ]; */
}

async function Vizualize(array, setArray, steps, sortSpeed, setIsRunning) {
  let temp = 0;
  console.log(steps);
  setIsRunning(true);

  for (let i = 0; i < steps.length; i++) {
    if (steps[i].q === -1) {
      array[steps[i].x].color = "red";
      array[steps[i].y].color = "red";

      /* temp = array[steps[i].x];
      array[steps[i].x] = array[steps[i].y];
      array[steps[i].y] = temp; */

      setArray([...array]);
      await sleep(sortSpeed);

      array[steps[i].x].color = COLUMNS_COLOR;
      array[steps[i].y].color = COLUMNS_COLOR;
    } else {
      array[steps[i].x].value = steps[i].y;

      /* temp = array[steps[i].x];
      array[steps[i].x] = array[steps[i].y];
      array[steps[i].y] = temp; */

      setArray([...array]);
      await sleep(sortSpeed);
    }
  }

  /* setArray([...array]); */

  setIsRunning(false);
}

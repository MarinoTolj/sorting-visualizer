import { COLUMNS_COLOR } from "../components/sortingVisualizer";
import { sleep } from "../components/sortingVisualizer";
import InsertionSort from "./insertionSort";

export default function BucketSort(
  array,
  setArray,
  sortSpeed,
  setIsRunning,
  setSteps,
  bucketSize
) {
  let i,
    minValue = array[0],
    maxValue = array[0];
  let secondaryArray = [...array];
  let steps = [];

  secondaryArray.forEach((currentValue) => {
    if (currentValue.value < minValue.value) {
      minValue = currentValue;
    } else if (currentValue.value > maxValue.value) {
      maxValue = currentValue;
    }
  });
  let bucketCount =
    Math.floor((maxValue.value - minValue.value) / bucketSize) + 1;
  let allBuckets = Array.from({ length: bucketCount }, () => []);
  //calculating where each values goes to what bucket and storing its index in x
  for (let j = 0; j < secondaryArray.length; j++) {
    i = Math.floor((secondaryArray[j].value - minValue.value) / bucketSize);

    allBuckets[i].push(secondaryArray[j]);

    steps.push({ x: j, y: -1 });
  }
  //reconstruction of array from buckets
  let g = 0;
  for (let k = 0; k < bucketCount; k++) {
    for (let l = 0; l < allBuckets[k].length; l++) {
      // at y we store value which need to go at g index
      steps.push({ x: g, y: allBuckets[k][l].value });
      secondaryArray[g] = allBuckets[k][l];

      g++;
    }
  }
  Visualize(array, setArray, steps, sortSpeed, setIsRunning, setSteps);
}

async function Visualize(
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
    if (steps[i].y !== -1) {
      array[steps[i].x].value = steps[i].y;
    }
    setArray([...array]);
    await sleep(sortSpeed);
    array[steps[i].x].color = COLUMNS_COLOR;
    setSteps({ total: steps.length, done: i + 1 });
  }
  //calling insertion sort to sort buckets
  InsertionSort(array, setArray, sortSpeed, setIsRunning, setSteps);
  setIsRunning(false);
}

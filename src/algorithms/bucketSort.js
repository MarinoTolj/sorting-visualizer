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
  let array2 = [...array];
  let steps = [];

  array2.forEach((currentValue) => {
    if (currentValue.value < minValue.value) {
      minValue = currentValue;
    } else if (currentValue.value > maxValue.value) {
      maxValue = currentValue;
    }
  });

  let bucketCount =
    Math.floor((maxValue.value - minValue.value) / bucketSize) + 1;

  let allBuckets = Array.from({ length: bucketCount }, () => []);

  for (let j = 0; j < array2.length; j++) {
    i = Math.floor((array2[j].value - minValue.value) / bucketSize);

    allBuckets[i].push(array2[j]);
    steps.push({ x: j, y: -1 });
  }

  let g = 0;
  for (let k = 0; k < bucketCount; k++) {
    for (let l = 0; l < allBuckets[k].length; l++) {
      steps.push({ x: g, y: allBuckets[k][l].value });
      array2[g] = allBuckets[k][l];

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

    if (steps[i].y !== -1) array[steps[i].x].value = steps[i].y;

    setArray([...array]);
    await sleep(sortSpeed);

    array[steps[i].x].color = COLUMNS_COLOR;
    setSteps({ total: steps.length, done: i + 1 });
  }

  InsertionSort(array, setArray, sortSpeed, setIsRunning, setSteps);

  setIsRunning(false);
}

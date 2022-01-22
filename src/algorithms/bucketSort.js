import { COLUMNS_COLOR } from "../components/sortingVisualizer";
import { sleep } from "../components/sortingVisualizer";
import InsertionSort from "./insertionSort";

export default function BucketSort(
  array,
  setArray,
  sortSpeed,
  setIsRunning,
  bucketSize
) {
  setIsRunning(true);

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
  console.log(steps.length);
  Vizualize(array, setArray, steps, sortSpeed, setIsRunning);
}

async function Vizualize(array, setArray, steps, sortSpeed, setIsRunning) {
  let temp = 0;
  setIsRunning(true);

  for (let i = 0; i < steps.length; i++) {
    array[steps[i].x].color = "red";

    if (steps[i].y !== -1) array[steps[i].x].value = steps[i].y;

    setArray([...array]);
    await sleep(sortSpeed);

    array[steps[i].x].color = COLUMNS_COLOR;
  }

  InsertionSort(array, setArray, sortSpeed, setIsRunning);

  setIsRunning(false);
}

import { COLUMNS_COLOR } from "../components/sortingVisualizer";
import { sleep } from "../components/sortingVisualizer";
import InsertionSort from "./insertionSort";

export default async function BucketSort(
  array,
  setArray,
  sortSpeed,
  setIsRunning
) {
  setIsRunning(true);

  let i,
    minValue = array[0],
    maxValue = array[0],
    bucketSize = 15;

  array.forEach((currentValue) => {
    if (currentValue.value < minValue.value) {
      minValue = currentValue;
    } else if (currentValue.value > maxValue.value) {
      maxValue = currentValue;
    }
  });

  let bucketCount =
    Math.floor((maxValue.value - minValue.value) / bucketSize) + 1;

  let allBuckets = Array.from({ length: bucketCount }, () => []);

  for (let j = 0; j < array.length; j++) {
    i = Math.floor((array[j].value - minValue.value) / bucketSize);

    allBuckets[i].push(array[j]);
    array[j].color = "red";
    setArray([...array]);
    await sleep(sortSpeed);
    array[j].color = COLUMNS_COLOR;
  }

  let g = 0;
  for (let k = 0; k < bucketCount; k++) {
    for (let l = 0; l < allBuckets[k].length; l++) {
      array[g] = allBuckets[k][l];
      array[g].color = "red";
      setArray([...array]);
      await sleep(sortSpeed);
      array[g].color = COLUMNS_COLOR;
      g++;
    }
  }
  InsertionSort(array, setArray, sortSpeed, setIsRunning);

  setIsRunning(false);
}

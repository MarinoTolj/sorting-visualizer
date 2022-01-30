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
  let temp;

  secondaryArray.forEach((currentValue) => {
    if (currentValue.value < minValue.value) {
      minValue = currentValue;
    } else if (currentValue.value > maxValue.value) {
      maxValue = currentValue;
    }
  });
  let bucketCount =
    Math.floor((maxValue.value - minValue.value) / bucketSize) + 1;
  console.log(bucketCount);
  let allBuckets = Array.from({ length: bucketCount }, () => []);
  //calculating where each values goes to what bucket and storing its index in x. Denoting that these steps are for bucket sort
  for (let j = 0; j < secondaryArray.length; j++) {
    i = Math.floor((secondaryArray[j].value - minValue.value) / bucketSize);

    allBuckets[i].push(secondaryArray[j]);

    steps.push({ x: j, y: -1, sort: "Bucket" });
  }
  //reconstruction of array from buckets
  let g = 0;
  console.log(allBuckets);
  for (let k = 0; k < bucketCount; k++) {
    for (let l = 0; l < allBuckets[k].length; l++) {
      // at y we store value which need to go at g index
      steps.push({ x: g, y: allBuckets[k][l].value, sort: "Bucket" });
      secondaryArray[g] = allBuckets[k][l];

      g++;
    }
  }
  //Insertion sort
  for (let i = 1; i < secondaryArray.length; i++) {
    let j = i;

    while (j > 0 && secondaryArray[j - 1].value > secondaryArray[j].value) {
      temp = secondaryArray[j];
      secondaryArray[j] = secondaryArray[j - 1];
      secondaryArray[j - 1] = temp;
      // pushing j j-1 indices to x and y respectivly to remember that values at those indices needs to be swapped. Denoting that these steps are for insertion sort
      steps.push({ x: j, y: j - 1, sort: "Insertion" });

      j--;
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
  let temp;
  setIsRunning(true);

  for (let i = 0; i < steps.length; i++) {
    if (steps[i].sort === "Bucket") {
      //visualizing for bucket sort
      array[steps[i].x].color = "red";
      if (steps[i].y !== -1) {
        array[steps[i].x].value = steps[i].y;
      }
      setArray([...array]);
      await sleep(sortSpeed);

      array[steps[i].x].color = COLUMNS_COLOR;
    } else {
      //visualizing for insertion sort
      array[steps[i].x].color = "red";

      temp = array[steps[i].x];
      array[steps[i].x] = array[steps[i].y];
      array[steps[i].y] = temp;

      setArray([...array]);
      await sleep(sortSpeed);

      array[steps[i].y].color = COLUMNS_COLOR;
    }
    setSteps({ total: steps.length, done: i + 1 });
  }
  setIsRunning(false);
}

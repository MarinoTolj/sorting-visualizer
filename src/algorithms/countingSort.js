import { COLUMNS_COLOR } from "../components/sortingVisualizer";
import { sleep } from "../components/sortingVisualizer";

export default async function CountingSort(
  array,
  setArray,
  sortSpeed,
  setIsRunning,
  setSteps
) {
  let minValue = array[0].value,
    maxValue = array[0].value;

  array.forEach((currentValue) => {
    if (currentValue.value < minValue) {
      minValue = currentValue.value;
    } else if (currentValue.value > maxValue) {
      maxValue = currentValue.value;
    }
  });

  let i = minValue,
    j = 0,
    len = array.length,
    count = [],
    steps = [];

  for (i; i <= maxValue; i++) {
    count[i] = 0;
  }

  for (i = 0; i < len; i++) {
    //creating count array and storing indices of array in x
    steps.push({ x: i, q: -1 });

    count[array[i].value]++;
  }

  for (i = minValue; i <= maxValue; i++) {
    //looking for value which appeard in original array
    steps.push({ x: j, q: -1 });

    while (count[i] > 0) {
      //value is found and we are storing its index to x and value to q
      steps.push({ x: j, q: i });
      j++;
      count[i]--;
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
    //if q is different from -1 it means that we need to update our array
    if (steps[i].q !== -1) {
      array[steps[i].x].value = steps[i].q;
    }

    setArray([...array]);
    await sleep(sortSpeed);

    array[steps[i].x].color = COLUMNS_COLOR;
    setSteps({ total: steps.length, done: i + 1 });
  }

  setIsRunning(false);
}

import { sleep } from "../components/sortingVisualizer";
import { COLUMNS_COLOR } from "../components/sortingVisualizer";

export default function SelectionSort(
  array,
  setArray,
  sortSpeed,
  setIsRunning,
  setSteps
) {
  let temp = 0;
  let min = 0;
  let steps = [];
  let secondaryArray = [...array];

  for (let i = 0; i < secondaryArray.length; i++) {
    min = i;

    for (let j = i + 1; j < secondaryArray.length; j++) {
      //x is current candidate for minimal value, y denotes that were are only looking for min value, q is current index of minimal value
      steps.push({ x: j, y: -1, q: min });
      if (secondaryArray[j].value < secondaryArray[min].value) {
        min = j;
      }
    }

    if (min !== i) {
      temp = secondaryArray[min];
      secondaryArray[min] = secondaryArray[i];
      secondaryArray[i] = temp;
      //x is now minimal value of unsorted section of an array, y is index which we need to put min value, q is still index of min value
      steps.push({ x: min, y: i, q: min });
    }
  }

  Visualize(array, setArray, steps, setSteps, sortSpeed, setIsRunning);
}

async function Visualize(
  array,
  setArray,
  steps,
  setSteps,
  sortSpeed,
  setIsRunning
) {
  let temp = 0;
  setIsRunning(true);

  for (let i = 0; i < steps.length; i++) {
    //we color x to red to denote that x is candidate of min value, and q to green to denote that q is index of current min value
    array[steps[i].x].color = "red";
    array[steps[i].q].color = "green";
    //if y is different from -1 which means we found min value and it needs to be swapped with index stored in y
    if (steps[i].y !== -1) {
      temp = array[steps[i].x].value;
      array[steps[i].x].value = array[steps[i].y].value;
      array[steps[i].y].value = temp;
    }

    setArray([...array]);
    await sleep(sortSpeed);

    array[steps[i].x].color = COLUMNS_COLOR;
    array[steps[i].q].color = COLUMNS_COLOR;

    setSteps({ total: steps.length, done: i + 1 });
  }

  setIsRunning(false);
}

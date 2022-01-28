import { COLUMNS_COLOR } from "../components/sortingVisualizer";
import { sleep } from "../components/sortingVisualizer";

//optimized bubble sort which checks if array is already sorted
export default function BubbleSort(
  array,
  setArray,
  sortSpeed,
  setIsRunning,
  setSteps
) {
  let temp = 0;
  //checks if any 2 elements are swapped, if it is true do while loop continues, otherwise loop stops because array is sorted
  let swapped = false;
  let array2 = [...array];
  let steps = [];

  do {
    swapped = false;
    for (let j = 0; j < array2.length - 1; j++) {
      steps.push({ x: j, y: j + 1, q: -1 });
      if (array2[j].value > array2[j + 1].value) {
        temp = array2[j];
        array2[j] = array2[j + 1];
        array2[j + 1] = temp;
        steps[steps.length - 1] = { x: j, y: j + 1, q: 1 };
        swapped = true;
      }
    }
  } while (swapped);

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
    array[steps[i].x].color = "red";
    array[steps[i].y].color = "red";

    if (steps[i].q !== -1) {
      temp = array[steps[i].x].value;
      array[steps[i].x].value = array[steps[i].y].value;
      array[steps[i].y].value = temp;
    }

    setArray([...array]);
    await sleep(sortSpeed);

    array[steps[i].x].color = COLUMNS_COLOR;
    array[steps[i].y].color = COLUMNS_COLOR;

    setSteps({ total: steps.length, done: i + 1 });
  }

  setIsRunning(false);
}

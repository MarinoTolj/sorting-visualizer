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
      if (array2[j].value > array2[j + 1].value) {
        temp = array2[j];
        array2[j] = array2[j + 1];
        array2[j + 1] = temp;
        steps.push({ x: j, y: j + 1 });
        swapped = true;
      }
    }
  } while (swapped);

  Vizualize(array, setArray, steps, setSteps, sortSpeed, setIsRunning);
}

async function Vizualize(
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

    temp = array[steps[i].x].value;
    array[steps[i].x].value = array[steps[i].y].value;
    array[steps[i].y].value = temp;

    setArray([...array]);
    await sleep(sortSpeed);
    array[steps[i].x].color = COLUMNS_COLOR;
    array[steps[i].y].color = COLUMNS_COLOR;
    setSteps({ total: steps.length, remaining: steps.length - i - 1 });
  }

  setIsRunning(false);
}

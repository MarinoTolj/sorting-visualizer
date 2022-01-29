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
  let secondaryArray = [...array];
  let steps = [];

  do {
    swapped = false;
    for (let j = 0; j < secondaryArray.length - 1; j++) {
      //pushing j and j+1 to x and y, and q to -1, which denotes that those values only need to be colored and not swapped
      steps.push({ x: j, y: j + 1, q: -1 });

      if (secondaryArray[j].value > secondaryArray[j + 1].value) {
        temp = secondaryArray[j];
        secondaryArray[j] = secondaryArray[j + 1];
        secondaryArray[j + 1] = temp;
        //replaces last pushed object with new, but only difference is that q is now 1, which denotes that those values (which are located at j j+1 indices) need to be swapped
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

    //if q is not -1 that means that those values need to be swapped
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

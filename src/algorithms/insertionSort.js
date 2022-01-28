import { sleep } from "../components/sortingVisualizer";
import { COLUMNS_COLOR } from "../components/sortingVisualizer";

export default function InsertionSort(
  array,
  setArray,
  sortSpeed,
  setIsRunning,
  setSteps
) {
  let temp = 0;
  //temporary array used to sort but not to render it on screen. It only helps to determine steps necessary to sort array.
  let secondaryArray = [...array];
  //array of objects which holds the indices of elements to be sorted
  let steps = [];

  for (let i = 1; i < secondaryArray.length; i++) {
    let j = i;

    while (j > 0 && secondaryArray[j - 1].value > secondaryArray[j].value) {
      temp = secondaryArray[j];
      secondaryArray[j] = secondaryArray[j - 1];
      secondaryArray[j - 1] = temp;
      // pushing j j-1 indices to x and y respectivly to remember that values at those indices needs to be swapped.
      steps.push({ x: j, y: j - 1 });

      j--;
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
  //function to disable all other buttons because it leads to problems
  setIsRunning(true);

  for (let i = 0; i < steps.length; i++) {
    array[steps[i].x].color = "red";

    temp = array[steps[i].x];
    array[steps[i].x] = array[steps[i].y];
    array[steps[i].y] = temp;

    setArray([...array]);
    await sleep(sortSpeed);

    array[steps[i].y].color = COLUMNS_COLOR;

    setSteps({ total: steps.length, done: i + 1 });
  }
  //last re-render to update last elements which were swapped
  setArray([...array]);

  setIsRunning(false);
}

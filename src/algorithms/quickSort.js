import { COLUMNS_COLOR } from "../components/sortingVisualizer";
import { sleep } from "../components/sortingVisualizer";

export default function QuickSort(
  array,
  setArray,
  sortSpeed,
  setIsRunning,
  setSteps
) {
  let secondaryArray = [...array];
  let steps = [];

  quickSort(secondaryArray, 0, secondaryArray.length - 1, steps);

  Visualize(array, setArray, steps, sortSpeed, setIsRunning, setSteps);
}

function quickSort(arr, first, last, steps) {
  let i, j, pivot, temp;
  if (first < last) {
    //we are taking pivot as first element of sub-array and not random value
    pivot = first;
    i = first;
    j = last;
    while (i < j) {
      while (arr[i].value <= arr[pivot].value && i < last) {
        //this while loop looks for values less than pivot and we store their indices in x, y: -1 just means we dont need to swap values yet, q is index of pivot
        steps.push({ x: i, y: -1, q: pivot });
        i++;
      }
      while (arr[j].value > arr[pivot].value) {
        //similar like above but we store indices of values greater than pivot in x
        steps.push({ x: j, y: -1, q: pivot });
        j--;
      }
      if (i < j) {
        // we found value (at index i) greater than pivot on left side and smaller (at index j) at on right side, which means we need to swapped them
        steps.push({ x: i, y: j, q: pivot });

        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
    //putting pivot to the right place
    steps.push({ x: pivot, y: j, q: pivot });
    temp = arr[pivot];
    arr[pivot] = arr[j];
    arr[j] = temp;
    quickSort(arr, first, j - 1, steps);
    quickSort(arr, j + 1, last, steps);
  }
}
async function Visualize(
  array,
  setArray,
  steps,
  sortSpeed,
  setIsRunning,
  setSteps
) {
  let temp = 0;
  setIsRunning(true);
  for (let i = 0; i < steps.length; i++) {
    //if y is equal to -1 it means that we are only looking for values and they dont need to be swapped. Coloring pivot to green
    if (steps[i].y === -1) {
      array[steps[i].x].color = "red";
      array[steps[i].q].color = "green";

      setArray([...array]);
      await sleep(sortSpeed);

      array[steps[i].x].color = COLUMNS_COLOR;
      array[steps[i].q].color = COLUMNS_COLOR;
    } else {
      array[steps[i].x].color = "red";
      array[steps[i].y].color = "red";
      array[steps[i].q].color = "green";

      temp = array[steps[i].x].value;
      array[steps[i].x].value = array[steps[i].y].value;
      array[steps[i].y].value = temp;

      setArray([...array]);
      await sleep(sortSpeed);

      array[steps[i].x].color = COLUMNS_COLOR;
      array[steps[i].y].color = COLUMNS_COLOR;
      array[steps[i].q].color = COLUMNS_COLOR;
    }
    setSteps({ total: steps.length, done: i + 1 });
  }
  setArray([...array]);
  setIsRunning(false);
}

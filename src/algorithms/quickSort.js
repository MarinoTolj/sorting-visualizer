import { COLUMNS_COLOR } from "../components/sortingVisualizer";
import { sleep } from "../components/sortingVisualizer";

export default function QuickSort(
  array,
  setArray,
  sortSpeed,
  setIsRunning,
  setSteps
) {
  let array2 = [...array];
  let steps = [];

  quickSort(array2, 0, array2.length - 1, steps);

  Visualize(array, setArray, steps, sortSpeed, setIsRunning, setSteps);
}

function quickSort(arr, first, last, steps) {
  let i, j, pivot, temp;

  if (first < last) {
    pivot = first;

    i = first;
    j = last;

    while (i < j) {
      while (arr[i].value <= arr[pivot].value && i < last) {
        steps.push({ x: i, y: -1, q: pivot });
        i++;
      }
      while (arr[j].value > arr[pivot].value) {
        steps.push({ x: j, y: -1, q: pivot });
        j--;
      }
      if (i < j) {
        steps.push({ x: i, y: j, q: pivot });
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }

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
    if (steps[i].y !== -1) {
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
    } else {
      array[steps[i].x].color = "red";
      array[steps[i].q].color = "green";

      setArray([...array]);
      await sleep(sortSpeed);

      array[steps[i].x].color = COLUMNS_COLOR;
      array[steps[i].q].color = COLUMNS_COLOR;
    }
    setSteps({ total: steps.length, done: i + 1 });
  }

  setArray([...array]);

  setIsRunning(false);
}

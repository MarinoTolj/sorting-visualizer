import { COLUMNS_COLOR } from "../components/sortingVisualizer";
import { sleep } from "../components/sortingVisualizer";

export default function QuickSort(array, setArray, sortSpeed, setIsRunning) {
  let array2 = [...array];
  let steps = [];

  quickSort(array2, 0, array2.length - 1, steps);

  Vizualize(array, setArray, steps, sortSpeed, setIsRunning);
}

function quickSort(arr, first, last, steps) {
  let i, j, pivot, temp;

  if (first < last) {
    pivot = first;

    i = first;
    j = last;

    while (i < j) {
      steps.push({ x: i, y: j, q: -1 });
      while (arr[i].value <= arr[pivot].value && i < last) {
        i++;
      }
      while (arr[j].value > arr[pivot].value) {
        j--;
      }
      if (i < j) {
        steps.push({ x: i, y: j, q: 1 });
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
    steps.push({ x: pivot, y: j, q: 1 });
    temp = arr[pivot];
    arr[pivot] = arr[j];
    arr[j] = temp;
    quickSort(arr, first, j - 1, steps);
    quickSort(arr, j + 1, last, steps);
  }
}

async function Vizualize(array, setArray, steps, sortSpeed, setIsRunning) {
  let temp = 0;
  setIsRunning(true);
  console.log(steps.length);
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
  }

  setArray([...array]);

  setIsRunning(false);
}

import { sleep } from "../components/sortingVisualizer";
import { COLUMNS_COLOR } from "../components/sortingVisualizer";

export default function InsertionSort(
  array,
  setArray,
  sortSpeed,
  setIsRunning
) {
  let temp = 0;

  let array2 = [...array];
  let steps = [];

  for (let i = 1; i < array2.length; i++) {
    let j = i;

    while (j > 0 && array2[j - 1].value > array2[j].value) {
      temp = array2[j];
      array2[j] = array2[j - 1];
      array2[j - 1] = temp;
      steps.push({ x: j, y: j - 1 });
      j--;
    }
  }

  Vizualize(array, setArray, steps, sortSpeed, setIsRunning);
}

async function Vizualize(array, setArray, steps, sortSpeed, setIsRunning) {
  let temp = 0;
  setIsRunning(true);
  for (let i = 0; i < steps.length; i++) {
    array[steps[i].y].color = "red";

    temp = array[steps[i].x].value;
    array[steps[i].x].value = array[steps[i].y].value;
    array[steps[i].y].value = temp;

    setArray([...array]);
    await sleep(sortSpeed);

    array[steps[i].y].color = COLUMNS_COLOR;
  }

  setIsRunning(false);
}

import { sleep } from "../components/sortingVisualizer";
import { COLUMNS_COLOR } from "../components/sortingVisualizer";

export default function SelectionSort(
  array,
  setArray,
  sortSpeed,
  setIsRunning
) {
  let temp = 0;
  let min = 0;
  let steps = [];
  let tempArray = [...array];

  for (let i = 0; i < tempArray.length; i++) {
    min = i;
    for (let j = i + 1; j < tempArray.length; j++) {
      steps.push({ x: j, y: -1 });
      if (tempArray[j].value < tempArray[min].value) {
        min = j;
        /* steps.push({ x: min, y: -1 }); */
      }
    }

    if (min !== i) {
      temp = tempArray[min];
      tempArray[min] = tempArray[i];
      tempArray[i] = temp;
      steps.push({ x: min, y: i });
    }
  }

  console.log(steps.length);
  /* Vizualize(array, setArray, steps, sortSpeed, setIsRunning); */
}

async function Vizualize(array, setArray, steps, sortSpeed, setIsRunning) {
  let temp = 0;
  setIsRunning(true);

  for (let i = 0; i < steps.length; i++) {
    if (steps[i].y === -1) {
      array[steps[i].x].color = "red";

      setArray([...array]);
      await sleep(sortSpeed);

      array[steps[i].x].color = COLUMNS_COLOR;
    } else {
      array[steps[i].x].color = "red";
      array[steps[i].y].color = "red";

      temp = array[steps[i].x].value;
      array[steps[i].x].value = array[steps[i].y].value;
      array[steps[i].y].value = temp;

      setArray([...array]);
      await sleep(sortSpeed);

      array[steps[i].x].color = COLUMNS_COLOR;
      array[steps[i].y].color = COLUMNS_COLOR;
    }
  }

  setIsRunning(false);
}

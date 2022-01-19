import { COLUMNS_COLOR } from "../components/sortingVisualizer";
import { sleep } from "../components/sortingVisualizer";

export default async function CountingSort(
  array,
  setArray,
  sortSpeed,
  setIsRunning
) {
  /* setIsRunning(true); */
  let minValue = array[0].value,
    maxValue = array[0].value;

  array.forEach((currentValue) => {
    if (currentValue.value < minValue) {
      minValue = currentValue.value;
    } else if (currentValue.value > maxValue) {
      maxValue = currentValue.value;
    }
  });

  let i = minValue,
    j = 0,
    len = array.length,
    count = [],
    steps = [];

  for (i; i <= maxValue; i++) {
    count[i] = 0;
  }

  for (i = 0; i < len; i++) {
    steps.push({ x: i, y: -1 });

    count[array[i].value]++;
  }

  for (i = minValue; i <= maxValue; i++) {
    while (count[i] > 0) {
      steps.push({ x: j, y: i });
      j++;
      count[i]--;
    }
  }

  Vizualize(array, setArray, steps, sortSpeed, setIsRunning);
}

async function Vizualize(array, setArray, steps, sortSpeed, setIsRunning) {
  let temp = 0;
  setIsRunning(true);
  console.log(steps);

  for (let i = 0; i < steps.length; i++) {
    array[steps[i].x].color = "red";

    if (steps[i].q !== -1) {
      array[steps[i].x].value = steps[i].y;
    }

    setArray([...array]);
    await sleep(sortSpeed);

    array[steps[i].x].color = COLUMNS_COLOR;
  }

  setIsRunning(false);
}

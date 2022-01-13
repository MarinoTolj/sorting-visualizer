import { COLUMNS_COLOR } from "../components/sortingVisualizer";
import { sleep } from "../components/sortingVisualizer";

export default async function CountingSort(
  array,
  setArray,
  setIsRunning,
  sortSpeed
) {
  setIsRunning(true);
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
    count = [];

  /* for (i; i <= maxValue; i++) {
    count[i].value = 0;
  } */

  for (i; i <= maxValue; i++) {
    /* count[i] = { value: 0, color: COLUMNS_COLOR }; */
    count[i] = 0;
  }

  for (i = 0; i < len; i++) {
    array[i].color = "red";

    /* count[array[i].value].value++; */
    count[array[i].value]++;

    setArray([...array]);
    await sleep(sortSpeed);
    array[i].color = COLUMNS_COLOR;
  }

  for (i = minValue; i <= maxValue; i++) {
    while (count[i] > 0) {
      array[j].value = i;
      array[j].color = "red";
      j++;
      count[i]--;
      setArray([...array]);
      await sleep(sortSpeed);
      array[j - 1].color = COLUMNS_COLOR;
    }
  }

  console.log(array);

  setIsRunning(false);
}

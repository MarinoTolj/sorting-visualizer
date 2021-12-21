import { sleep } from "./bubbleSort";
import { COLOR_ARRAY } from "../components/sortingVisualizer";

export default async function SelectionSort(
  array,
  setArray,
  setIsRunning,
  sortSpeed
) {
  let temp = 0;
  let min = 0;
  setIsRunning(true);
  for (let i = 0; i < array.length; i++) {
    min = i;
    for (let j = i + 1; j < array.length; j++) {
      /* array[j].color = "purple";
      setArray([...array]);
      await sleep(500); */
      if (array[j].value < array[min].value) {
        min = j;
        array[min].color = "red";
        setArray([...array]);
        await sleep(sortSpeed);
        array[min].color = COLOR_ARRAY;
      }
    }

    if (min !== i) {
      temp = array[min].value;
      array[min].value = array[i].value;
      array[i].value = temp;
    }
  }

  setIsRunning(false);
}

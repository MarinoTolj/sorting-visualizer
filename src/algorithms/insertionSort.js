import { sleep } from "./bubbleSort";
import { COLOR_ARRAY } from "../components/sortingVisualizer";

export default async function InsertionSort(
  array,
  setArray,
  setIsRunning,
  sortSpeed
) {
  let temp = 0;
  setIsRunning(true);
  for (let i = 1; i < array.length; i++) {
    let j = i;
    while (j > 0 && array[j - 1].value > array[j].value) {
      array[j - 1].color = "red";

      temp = array[j].value;
      array[j].value = array[j - 1].value;
      array[j - 1].value = temp;

      setArray([...array]);

      await sleep(sortSpeed);

      array[j - 1].color = COLOR_ARRAY;

      j--;
    }
  }
  setIsRunning(false);
}

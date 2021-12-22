import { COLOR_ARRAY } from "../components/sortingVisualizer";
import { sleep } from "../components/sortingVisualizer";

export default async function BubbleSort(
  array,
  setArray,
  setIsRunning,
  sortSpeed
) {
  let temp = 0;
  let swapped = false;
  setIsRunning(true);
  do {
    swapped = false;
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j].value > array[j + 1].value) {
        array[j].color = "red";
        array[j + 1].color = "red";

        temp = array[j].value;
        array[j].value = array[j + 1].value;
        array[j + 1].value = temp;
        swapped = true;
        setArray([...array]);
        await sleep(sortSpeed);

        array[j].color = COLOR_ARRAY;
        array[j + 1].color = COLOR_ARRAY;
      }
    }
  } while (swapped);
  setIsRunning(false);
}

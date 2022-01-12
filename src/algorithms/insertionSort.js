import { sleep } from "../components/sortingVisualizer";
import { COLUMNS_COLOR } from "../components/sortingVisualizer";

export default async function InsertionSort(
  array,
  setArray,
  setIsRunning,
  sortSpeed
) {
  let temp = 0;
  setIsRunning(true);
  console.log("insertion");
  for (let i = 1; i < array.length; i++) {
    let j = i;

    while (j > 0 && array[j - 1].value > array[j].value) {
      array[j - 1].color = "red";

      temp = array[j].value;
      array[j].value = array[j - 1].value;
      array[j - 1].value = temp;

      setArray([...array]);

      await sleep(sortSpeed);

      array[j - 1].color = COLUMNS_COLOR;

      j--;
    }
  }
  setArray([...array]);
  setIsRunning(false);
}

import { COLUMNS_COLOR } from "../components/sortingVisualizer";
import { sleep } from "../components/sortingVisualizer";

//optimized bubble sort which checks if array is already sorted
export default async function BubbleSort(
  array,
  setArray,
  setIsRunning,
  sortSpeed
) {
  let temp = 0;
  //checks if any 2 elements are swapped, if it is true do while loop continues, otherwise loop stops because array is sorted
  let swapped = false;

  setIsRunning(true);
  do {
    swapped = false;
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j].value > array[j + 1].value) {
        //changing color of 2 selected values and swaping them
        array[j].color = "red";
        array[j + 1].color = "red";

        temp = array[j].value;
        array[j].value = array[j + 1].value;
        array[j + 1].value = temp;

        swapped = true;
        //updates the state of array and re-renders it.
        setArray([...array]);
        await sleep(sortSpeed);
        //changes colors back to original
        array[j].color = COLUMNS_COLOR;
        array[j + 1].color = COLUMNS_COLOR;
      }
    }
  } while (swapped);
  setIsRunning(false);
}

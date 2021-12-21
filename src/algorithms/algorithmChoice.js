import BubbleSort from "./bubbleSort";
import InsertionSort from "./insertionSort";
import SelectionSort from "./selectionSort";
import { algorithmsDescription } from "./description";

export default function AlgorithmChoice(
  array,
  setArray,
  setIsRunning,
  setDescription,
  sortSpeed,
  name
) {
  switch (name) {
    case "Bubble sort":
      setDescription(algorithmsDescription[0].BubbleSort);
      BubbleSort(array, setArray, setIsRunning, sortSpeed);
      break;
    case "Insertion sort":
      setDescription(algorithmsDescription[0].InsertionSort);
      InsertionSort(array, setArray, setIsRunning, sortSpeed);
      break;
    case "Selection sort":
      setDescription(algorithmsDescription[0].SelectionSort);
      SelectionSort(array, setArray, setIsRunning, sortSpeed);
      break;
    default:
      break;
  }
}

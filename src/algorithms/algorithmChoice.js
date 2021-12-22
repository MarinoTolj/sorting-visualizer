import BubbleSort from "./bubbleSort";
import InsertionSort from "./insertionSort";
import SelectionSort from "./selectionSort";
import MergeSort from "./mergeSort";
import QuickSort from "./quickSort";
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
    case "Merge sort":
      setDescription(algorithmsDescription[0].MergeSort);
      MergeSort(array, setArray, setIsRunning, sortSpeed);
      break;
    case "Quick sort":
      setDescription(algorithmsDescription[0].QuickSort);
      QuickSort(array, setArray, setIsRunning, sortSpeed);
      break;
    default:
      break;
  }
}

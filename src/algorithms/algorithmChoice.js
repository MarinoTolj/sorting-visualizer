import BubbleSort from "./bubbleSort";
import InsertionSort from "./insertionSort";
import SelectionSort from "./selectionSort";
import MergeSort from "./mergeSort";
import QuickSort from "./quickSort";
import HeapSort from "./heapSort";
import RadixSort from "./radixSort";
import BucketSort from "./bucketSort";
import CountingSort from "./countingSort";
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
      setDescription(algorithmsDescription.BubbleSort);
      BubbleSort(array, setArray, setIsRunning, sortSpeed);
      break;
    case "Insertion sort":
      setDescription(algorithmsDescription.InsertionSort);
      InsertionSort(array, setArray, setIsRunning, sortSpeed);
      break;
    case "Selection sort":
      setDescription(algorithmsDescription.SelectionSort);
      SelectionSort(array, setArray, setIsRunning, sortSpeed);
      break;
    case "Merge sort":
      setDescription(algorithmsDescription.MergeSort);
      MergeSort(array, setArray, setIsRunning, sortSpeed);
      break;
    case "Quick sort":
      setDescription(algorithmsDescription.QuickSort);
      QuickSort(array, setArray, setIsRunning, sortSpeed);
      break;
    case "Heap sort":
      setDescription(algorithmsDescription.HeapSort);
      HeapSort(array, setArray, setIsRunning, sortSpeed);
      break;
    case "Radix sort":
      setDescription(algorithmsDescription.RadixSort);
      RadixSort(array, setArray, setIsRunning, sortSpeed);
      break;
    case "Bucket sort":
      setDescription(algorithmsDescription.BucketSort);
      BucketSort(array, setArray, setIsRunning, sortSpeed);
      break;
    case "Counting sort":
      setDescription(algorithmsDescription.CountingSort);
      CountingSort(array, setArray, setIsRunning, sortSpeed);
      break;
    default:
      break;
  }
}

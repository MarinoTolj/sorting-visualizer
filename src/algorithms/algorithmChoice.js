import BubbleSort from "./bubbleSort";
import InsertionSort from "./insertionSort";
import SelectionSort from "./selectionSort";
import mergeSortNonRecursive from "./mergeSortNonRecursive";
import mergeSortRecursive from "./mergeSortRecursive";
import QuickSort from "./quickSort";
import HeapSortMaxHeap from "./heapSortMaxHeap";
import HeapSortMinHeap from "./heapSortMinHeap";
import RadixSortLSD from "./radixSortLSD";
import RadixSortMSD from "./radixSortMSD";
import BucketSort from "./bucketSort";
import CountingSort from "./countingSort";
import { algorithmsDescription } from "./description";

export default function AlgorithmChoice(
  array,
  setArray,
  sortSpeed,
  setDescription,
  setIsRunning,
  name,
  bucketSize,
  setSteps
) {
  let steps = [];
  switch (name) {
    case "Bubble sort":
      setDescription(algorithmsDescription.BubbleSort);
      BubbleSort(array, setArray, sortSpeed, setIsRunning, setSteps);
      break;
    case "Insertion sort":
      setDescription(algorithmsDescription.InsertionSort);
      InsertionSort(array, setArray, sortSpeed, setIsRunning, setSteps);
      break;
    case "Selection sort":
      setDescription(algorithmsDescription.SelectionSort);
      SelectionSort(array, setArray, sortSpeed, setIsRunning, setSteps);
      break;
    case "Merge sort-recursive":
      setDescription(algorithmsDescription.MergeSort);
      mergeSortRecursive(
        array,
        setArray,
        sortSpeed,
        setIsRunning,

        setSteps
      );
      break;
    case "Merge sort-non-recursive":
      setDescription(algorithmsDescription.MergeSort);
      mergeSortNonRecursive(
        array,
        setArray,
        sortSpeed,
        setIsRunning,

        setSteps
      );
      break;

    case "Quick sort":
      setDescription(algorithmsDescription.QuickSort);
      QuickSort(array, setArray, sortSpeed, setIsRunning, setSteps);
      break;
    case "Heap sort max-heap":
      setDescription(algorithmsDescription.HeapSort);
      HeapSortMaxHeap(
        array,
        setArray,
        sortSpeed,
        setIsRunning,

        setSteps
      );
      break;
    case "Heap sort min-heap":
      setDescription(algorithmsDescription.HeapSort);
      HeapSortMinHeap(
        array,
        setArray,
        sortSpeed,
        setIsRunning,

        setSteps
      );
      break;

    case "Bucket sort":
      setDescription(algorithmsDescription.BucketSort);
      BucketSort(
        array,
        setArray,
        sortSpeed,
        setIsRunning,

        setSteps,
        bucketSize
      );
      break;
    case "Radix sort lsd":
      setDescription(algorithmsDescription.RadixSort);
      RadixSortLSD(array, setArray, sortSpeed, setIsRunning, setSteps);
      break;
    case "Radix sort msd":
      setDescription(algorithmsDescription.RadixSort);
      RadixSortMSD(array, setArray, sortSpeed, setIsRunning, setSteps);
      break;
    case "Counting sort":
      setDescription(algorithmsDescription.CountingSort);
      CountingSort(array, setArray, sortSpeed, setIsRunning, setSteps);
      break;
    default:
      break;
  }
}

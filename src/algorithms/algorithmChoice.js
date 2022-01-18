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
  bucketSize
) {
  switch (name) {
    case "Bubble sort":
      setDescription(algorithmsDescription.BubbleSort);
      BubbleSort(array, setArray, sortSpeed, setIsRunning);
      break;
    case "Insertion sort":
      setDescription(algorithmsDescription.InsertionSort);
      InsertionSort(array, setArray, sortSpeed, setIsRunning);
      break;
    case "Selection sort":
      setDescription(algorithmsDescription.SelectionSort);
      SelectionSort(array, setArray, sortSpeed, setIsRunning);
      break;
    case "Merge sort-recursive":
      setDescription(algorithmsDescription.MergeSort);
      mergeSortRecursive(array, setArray, sortSpeed, setIsRunning);
      break;
    case "Merge sort-non-recursive":
      setDescription(algorithmsDescription.MergeSort);
      mergeSortNonRecursive(array, setArray, sortSpeed, setIsRunning);
      break;

    case "Quick sort":
      setDescription(algorithmsDescription.QuickSort);
      QuickSort(array, setArray, sortSpeed, setIsRunning);
      break;
    case "Heap sort max-heap":
      setDescription(algorithmsDescription.HeapSort);
      HeapSortMaxHeap(array, setArray, sortSpeed, setIsRunning);
      break;
    case "Heap sort min-heap":
      setDescription(algorithmsDescription.HeapSort);
      HeapSortMinHeap(array, setArray, sortSpeed, setIsRunning);
      break;

    case "Bucket sort":
      setDescription(algorithmsDescription.BucketSort);
      BucketSort(array, setArray, sortSpeed, setIsRunning, bucketSize);
      break;
    case "Radix sort lsd":
      setDescription(algorithmsDescription.RadixSort);
      RadixSortLSD(array, setArray, sortSpeed, setIsRunning);
      break;
    case "Radix sort msd":
      setDescription(algorithmsDescription.RadixSort);
      RadixSortMSD(array, setArray, sortSpeed, setIsRunning);
      break;
    case "Counting sort":
      setDescription(algorithmsDescription.CountingSort);
      CountingSort(array, setArray, sortSpeed, setIsRunning);
      break;
    default:
      break;
  }
}

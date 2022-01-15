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
  animations,
  sortSpeed,
  setDescription,
  name
) {
  switch (name) {
    case "Bubble sort":
      setDescription(algorithmsDescription.BubbleSort);
      animations = BubbleSort(array, setArray, animations, sortSpeed);
      break;
    case "Insertion sort":
      setDescription(algorithmsDescription.InsertionSort);
      animations = InsertionSort(array, setArray, animations, sortSpeed);
      break;
    case "Selection sort":
      setDescription(algorithmsDescription.SelectionSort);
      animations = SelectionSort(array);
      break;
    case "Merge sort":
      setDescription(algorithmsDescription.MergeSort);
      animations = MergeSort(array);
      break;
    case "Quick sort":
      setDescription(algorithmsDescription.QuickSort);
      animations = QuickSort(array);
      break;
    case "Heap sort":
      setDescription(algorithmsDescription.HeapSort);
      animations = HeapSort(array);
      break;
    case "Radix sort":
      setDescription(algorithmsDescription.RadixSort);
      animations = RadixSort(array);
      break;
    case "Bucket sort":
      setDescription(algorithmsDescription.BucketSort);
      animations = BucketSort(array);
      break;
    case "Counting sort":
      setDescription(algorithmsDescription.CountingSort);
      animations = CountingSort(array);
      break;
    default:
      break;
  }

  return animations;
}

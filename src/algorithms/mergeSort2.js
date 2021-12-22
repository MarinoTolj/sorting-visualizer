import { COLOR_ARRAY } from "../components/sortingVisualizer";
import { sleep } from "../components/sortingVisualizer";

export default async function MergeSort(
  array,
  setArray,
  setIsRunning,
  sortSpeed
) {
  const sortedArray = SplitMerge(array, setArray, sortSpeed);
  console.log(sortedArray);
}

function SplitMerge(array, setArray, sortSpeed) {
  if (array.length <= 1) return array;
  let middleIndex = parseInt(array.length / 2);
  /* console.log(middleIndex); */
  let leftArray = array.slice(0, middleIndex);
  let rightArray = array.slice(middleIndex, array.length);

  return Merge(
    SplitMerge(leftArray, setArray, sortSpeed),
    SplitMerge(rightArray, setArray, sortSpeed),
    setArray,
    sortSpeed
  );
}

function Merge(leftArray, rightArray, setArray, sortSpeed) {
  const output = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
    const leftElement = leftArray[leftIndex];
    const rightElement = rightArray[rightIndex];

    if (leftElement.value < rightElement.value) {
      output.push(leftElement);
      leftIndex++;
    } else {
      output.push(rightElement);
      rightIndex++;
    }
    console.log(output);
    /* output[leftIndex].color = "red";
    setArray(output);
    await sleep(1000); */
  }
  console.log(leftArray);
  return [
    ...output,
    ...leftArray.slice(leftIndex),
    ...rightArray.slice(rightIndex),
  ];
}

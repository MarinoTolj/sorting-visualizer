import { COLOR_ARRAY } from "../components/sortingVisualizer";
import { sleep } from "../components/sortingVisualizer";

export default async function MergeSort(
  array,
  setArray,
  setIsRunning,
  sortSpeed
) {
  if (array.length <= 1) return array;
  const auxiliaryArray = [...array];
  const mainArray = [...array];
  SplitMerge(
    mainArray,
    0,
    mainArray.length - 1,
    auxiliaryArray,
    setArray,
    sortSpeed
  );
  setArray(mainArray);
  console.log(mainArray);
}

function SplitMerge(
  mainArray,
  startIndex,
  endIndex,
  auxiliaryArray,
  setArray,
  sortSpeed
) {
  if (startIndex === endIndex) return;
  const middleIndex = Math.floor((startIndex + endIndex) / 2);
  SplitMerge(
    auxiliaryArray,
    startIndex,
    middleIndex,
    mainArray,
    setArray,
    sortSpeed
  );
  SplitMerge(
    auxiliaryArray,
    middleIndex + 1,
    endIndex,
    mainArray,
    setArray,
    sortSpeed
  );
  Merge(
    mainArray,
    startIndex,
    middleIndex,
    endIndex,
    auxiliaryArray,
    setArray,
    sortSpeed
  );
}

async function Merge(
  mainArray,
  startIndex,
  middleIndex,
  endIndex,
  auxiliaryArray,
  setArray,
  sortSpeed
) {
  /* let leftIndex = 0;
  let rightIndex = 0;
  let output = []; */

  let k = startIndex;
  let i = startIndex;
  let j = middleIndex + 1;

  /* while (leftIndex <= middleIndex && rightIndex <= endIndex) {
    if (auxiliaryArray[leftIndex].value <= auxiliaryArray[rightIndex].value) {
      output.push(auxiliaryArray[leftIndex]);
    } else {
      output.push(auxiliaryArray[rightIndex]);
    }
  } */

  while (i <= middleIndex && j <= endIndex) {
    /* setArray([...auxiliaryArray]); */

    if (auxiliaryArray[i].value <= auxiliaryArray[j].value) {
      mainArray[k++] = auxiliaryArray[i++];
      /* await sleep(10); */
    } else {
      mainArray[k++] = auxiliaryArray[j++];
    }
  }

  while (i <= middleIndex) {
    mainArray[k++] = auxiliaryArray[i++];
  }

  while (j <= endIndex) {
    mainArray[k++] = auxiliaryArray[j++];
  }
}

import { COLUMNS_COLOR } from "../components/sortingVisualizer";
import { sleep } from "../components/sortingVisualizer";

export default async function HeapSortMaxHeap(
  array,
  setArray,
  sortSpeed,
  setIsRunning
) {
  setIsRunning(true);

  /* buildMaxHeap(array, sortSpeed); */
  let i = Math.floor(array.length / 2 - 1);

  while (i >= 0) {
    /* heapify(array, i, array.length, sortSpeed); */
    let index;
    let leftChild;
    let rightChild;
    let temp;
    let max = array.length;
    let j = i;

    while (j < max) {
      index = j;

      leftChild = 2 * j + 1;
      rightChild = leftChild + 1;

      if (leftChild < max && array[leftChild].value > array[index].value) {
        index = leftChild;
      }

      if (rightChild < max && array[rightChild].value > array[index].value) {
        index = rightChild;
      }

      if (index === j) {
        break;
      }
      array[j].color = "red";
      array[index].color = "red";

      temp = array[j];
      array[j] = array[index];
      array[index] = temp;

      setArray([...array]);
      await sleep(sortSpeed);

      array[j].color = COLUMNS_COLOR;
      array[index].color = COLUMNS_COLOR;

      j = index;
    }

    i--;
  }

  let lastElement = array.length - 1;
  let temporary;
  while (lastElement > 0) {
    array[0].color = "red";
    array[lastElement].color = "red";

    temporary = array[0];
    array[0] = array[lastElement];
    array[lastElement] = temporary;

    setArray([...array]);
    await sleep(sortSpeed);
    array[0].color = COLUMNS_COLOR;
    array[lastElement].color = COLUMNS_COLOR;

    /* heapify(array, 0, lastElement, sortSpeed); */
    let index;
    let leftChild;
    let rightChild;
    let temp;
    let j = 0;

    while (j < lastElement) {
      index = j;

      leftChild = 2 * j + 1;
      rightChild = leftChild + 1;

      if (
        leftChild < lastElement &&
        array[leftChild].value > array[index].value
      ) {
        index = leftChild;
      }

      if (
        rightChild < lastElement &&
        array[rightChild].value > array[index].value
      ) {
        index = rightChild;
      }

      if (index === j) {
        break;
      }
      array[j].color = "red";
      array[index].color = "red";

      temp = array[j];
      array[j] = array[index];
      array[index] = temp;

      setArray([...array]);
      await sleep(sortSpeed);

      array[j].color = COLUMNS_COLOR;
      array[index].color = COLUMNS_COLOR;

      j = index;
    }

    lastElement--;
  }

  setArray([...array]);

  setIsRunning(false);
}

/* const buildMaxHeap = (array, sortSpeed) => {
  let i = Math.floor(array.length / 2 - 1);

  while (i >= 0) {
    heapify(array, i, array.length, sortSpeed);
    i--;
  }
}; */

/* const heapify = async (heap, i, max, sortSpeed) => {
  let index;
  let leftChild;
  let rightChild;
  let temp;

  while (i < max) {
    index = i;

    leftChild = 2 * i + 1;
    rightChild = leftChild + 1;

    if (leftChild < max && heap[leftChild].value > heap[index].value) {
      index = leftChild;
    }

    if (rightChild < max && heap[rightChild].value > heap[index].value) {
      index = rightChild;
    }

    if (index === i) {
      return;
    }
    await sleep(sortSpeed);
    temp = heap[i];
    heap[i] = heap[index];
    heap[index] = temp;

    i = index;
  }
}; */

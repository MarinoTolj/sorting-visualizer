import { COLUMNS_COLOR } from "../components/sortingVisualizer";
import { sleep } from "../components/sortingVisualizer";

export default function HeapSortMaxHeap(
  array,
  setArray,
  sortSpeed,
  setIsRunning,
  setSteps
) {
  let steps = [];
  let secondaryArray = [...array];

  buildMaxHeap(secondaryArray, steps);

  let lastElement = secondaryArray.length - 1;
  let temporary;
  while (lastElement > 0) {
    //index of max value is at 0th index of array and we swapped it with last element
    steps.push({ x: 0, y: lastElement });

    temporary = secondaryArray[0];
    secondaryArray[0] = secondaryArray[lastElement];
    secondaryArray[lastElement] = temporary;

    heapify(secondaryArray, 0, lastElement, steps);

    lastElement--;
  }

  Visualize(array, setArray, steps, sortSpeed, setIsRunning, setSteps);
}

const heapify = async (heap, i, max, steps) => {
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
    //swapping new max value
    steps.push({ x: i, y: index });
    temp = heap[i];
    heap[i] = heap[index];
    heap[index] = temp;

    i = index;
  }
};

async function Visualize(
  array,
  setArray,
  steps,
  sortSpeed,
  setIsRunning,
  setSteps
) {
  let temp = 0;
  setIsRunning(true);
  for (let i = 0; i < steps.length; i++) {
    array[steps[i].x].color = "red";
    array[steps[i].y].color = "red";

    temp = array[steps[i].x].value;
    array[steps[i].x].value = array[steps[i].y].value;
    array[steps[i].y].value = temp;

    setArray([...array]);
    await sleep(sortSpeed);
    array[steps[i].x].color = COLUMNS_COLOR;
    array[steps[i].y].color = COLUMNS_COLOR;
    setSteps({ total: steps.length, done: i + 1 });
  }

  setIsRunning(false);
}

const buildMaxHeap = (array, steps) => {
  let i = Math.floor(array.length / 2 - 1);

  while (i >= 0) {
    heapify(array, i, array.length, steps);
    i--;
  }
};

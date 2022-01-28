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
  let array2 = [...array];

  buildMinHeap(array2, steps);

  let lastElement = array2.length - 1;
  let temporary;

  while (lastElement > 0) {
    steps.push({ x: 0, y: lastElement });

    temporary = array2[0];
    array2[0] = array2[lastElement];
    array2[lastElement] = temporary;

    heapify(array2, 0, lastElement, steps);

    lastElement--;
  }

  Visualize(array, setArray, steps, sortSpeed, setIsRunning, setSteps);
}

const buildMinHeap = (array, steps) => {
  let i = Math.floor(array.length / 2 - 1);

  while (i >= 0) {
    heapify(array, i, array.length, steps);
    i--;
  }
};

const heapify = async (heap, i, max, steps) => {
  let index;
  let leftChild;
  let rightChild;
  let temp;

  while (i < max) {
    index = i;

    leftChild = 2 * i + 1;
    rightChild = leftChild + 1;

    if (leftChild < max && heap[leftChild].value < heap[index].value) {
      index = leftChild;
    }

    if (rightChild < max && heap[rightChild].value < heap[index].value) {
      index = rightChild;
    }

    if (index === i) {
      return;
    }

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

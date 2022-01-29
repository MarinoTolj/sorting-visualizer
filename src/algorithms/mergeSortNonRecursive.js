import { COLUMNS_COLOR } from "../components/sortingVisualizer";
import { sleep } from "../components/sortingVisualizer";

export default async function mergeSortNonRecursive(
  array,
  setArray,
  sortSpeed,
  setIsRunning,
  setSteps
) {
  let secondaryArray = [...array];

  let steps = [];

  bottomUpSort(secondaryArray, secondaryArray.length, steps);

  Visualize(array, setArray, steps, sortSpeed, setIsRunning, setSteps);
}

function bottomUpSort(items, n, steps) {
  var width, i;

  for (width = 1; width <= n + 1; width = width * 2) {
    for (i = 0; i < n; i = i + 2 * width) {
      bottomUpMerge(
        items,
        i,
        Math.min(i + width, n),
        Math.min(i + 2 * width, n),
        steps
      );
    }
  }
}
function bottomUpMerge(items, left, right, end, steps) {
  let n = left,
    m = right,
    currentSort = [],
    j;
  for (j = left; j < end; j++) {
    //we are comparing values at n and m indices and depends which one is smaller we put that value at correct place
    if (n < right && (m >= end || items[n].value < items[m].value)) {
      currentSort.push(items[n]);
      steps.push({ x: n, y: m, q: items[n].value });
      n++;
    } else {
      currentSort.push(items[m]);
      steps.push({ x: m, y: n, q: items[m].value });
      m++;
    }
  }
  currentSort.map(function (item, i) {
    return (items[left + i] = item);
  });
}
async function Visualize(
  array,
  setArray,
  steps,
  sortSpeed,
  setIsRunning,
  setSteps
) {
  setIsRunning(true);

  for (let i = 0; i < steps.length; i++) {
    array[steps[i].x].color = "red";
    //sometimes values of y overshoot the size of array, so we make sure that no undefined errors occur
    if (steps[i].y < array.length) {
      array[steps[i].y].color = "red";
    }

    array[steps[i].x].value = steps[i].q;

    setArray([...array]);
    await sleep(sortSpeed);

    array[steps[i].x].color = COLUMNS_COLOR;
    if (steps[i].y < array.length) {
      array[steps[i].y].color = COLUMNS_COLOR;
    }
    setSteps({ total: steps.length, done: i + 1 });
  }
  setArray([...array]);
  setIsRunning(false);
}

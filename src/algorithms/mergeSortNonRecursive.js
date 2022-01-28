import { COLUMNS_COLOR } from "../components/sortingVisualizer";
import { sleep } from "../components/sortingVisualizer";

export default async function mergeSortNonRecursive(
  array,
  setArray,
  sortSpeed,
  setIsRunning,
  setSteps
) {
  let auxiliaryArray = [...array];

  let steps = [];

  bottomUpSort(auxiliaryArray, auxiliaryArray.length, steps);

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
    if (n < right && (m >= end || items[n].value < items[m].value)) {
      currentSort.push(items[n]);
      steps.push({ x: n, y: m - 1, q: items[n].value });

      n++;
    } else {
      currentSort.push(items[m]);
      steps.push({ x: m, y: m, q: items[m].value });
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

  for (let i = array.length; i < steps.length; i++) {
    array[steps[i].x].color = "red";
    array[steps[i].y].color = "red";

    array[steps[i].x].value = steps[i].q;

    setArray([...array]);
    await sleep(sortSpeed);

    array[steps[i].x].color = COLUMNS_COLOR;
    array[steps[i].y].color = COLUMNS_COLOR;

    setSteps({ total: steps.length, done: i + 1 });
  }

  setArray([...array]);

  setIsRunning(false);
}

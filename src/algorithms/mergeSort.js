import { COLUMNS_COLOR } from "../components/sortingVisualizer";
import { sleep } from "../components/sortingVisualizer";

export default function MergeSort(array, setArray, sortSpeed, setIsRunning) {
  let auxiliaryArray = [...array];
  /*  var width, i; */
  /* const n = auxiliaryArray.length; */
  /* var items = [...auxiliaryArray];

  var currentSort = [],
    j; */
  let steps = [];

  bottomUpSort(auxiliaryArray, auxiliaryArray.length, steps);

  /* for (width = 1; width < n; width = width * 2) {
    for (i = 0; i < n; i = i + 2 * width) {
      bottomUpMerge(
        auxiliaryArray,
        i,
        Math.min(i + width, n),
        Math.min(i + 2 * width, n),
        setArray
      );
      var left = i;
      var right = Math.min(i + width, n);
      var end = Math.min(i + 2 * width, n);
      var k = left;
      var m = right;

      var currentSort = [],
        j;
      for (j = left; j < end; j++) {
        if (k < right && (m >= end || items[k].value < items[m].value)) {
          items[k].color = "red";
          items[m - 1].color = "red";
          currentSort.push(items[k]);

          items[k].color = COLUMNS_COLOR;
          items[m - 1].color = COLUMNS_COLOR;
          k++;
        } else {
          items[k].color = "red";
          items[m].color = "red";
          currentSort.push(items[m]);

          items[m].color = COLUMNS_COLOR;
          items[k].color = COLUMNS_COLOR;
          m++;
        }
      }

      currentSort.map(function (item, i) {
        items[left + i] = item;
      });
    }
  } */
  Vizualize(array, setArray, steps, sortSpeed, setIsRunning);
}

function bottomUpSort(items, n, steps) {
  var width, i;

  for (width = 1; width < n; width = width * 2) {
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
  var n = left,
    m = right,
    currentSort = [],
    j;

  for (j = left; j < end; j++) {
    if (n < right && (m >= end || items[n].value < items[m].value)) {
      currentSort.push(items[n]);
      steps.push({ x: n, y: m - 1 });
      n++;
    } else {
      currentSort.push(items[m]);
      steps.push({ x: n, y: m });
      m++;
    }
  }
  currentSort.map(function (item, i) {
    items[left + i] = item;
  });
}

async function Vizualize(array, setArray, steps, sortSpeed, setIsRunning) {
  let temp = 0;
  console.log(steps);
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
  }

  setIsRunning(false);
}

/*  var items1 = [5,4,3,2,1],
      items2 = [9,4,5,8,2,3,0,1,3,7];
  console.log(items1 + ' -> ' + bottomUpMergeSort(items1));
  console.log(items2 + ' -> ' + bottomUpMergeSort(items2)); */

// Use the Bottom-up Merge Sort Algorithm (http://en.wikipedia.org/wiki/Merge_sort#Bottom-up_implementation) to sort the items in an array by value.

/* function bottomUpMergeSort(items) {
    var array = [];
    
    if ( items ) {
      array = items.map(function(item) { return item; });
    }
    
    bottomUpSort(array, array.length);
    
    return array;
  } */

import { COLUMNS_COLOR } from "../components/sortingVisualizer";
import { sleep } from "../components/sortingVisualizer";

export default async function mergeSortNonRecursive(
  array,
  setArray,
  sortSpeed,
  setIsRunning
) {
  let auxiliaryArray = [...array];
  var width, i;
  const n = auxiliaryArray.length;
  var items = [...auxiliaryArray];

  var currentSort = [],
    j;
  let steps = [];

  bottomUpSort(auxiliaryArray, auxiliaryArray.length, steps);

  Vizualize(array, setArray, steps, sortSpeed, setIsRunning);
  console.log(array);
  /* setArray([...items]); */
  /* setIsRunning(true);
  for (width = 1; width < n; width = width * 2) {
    for (i = 0; i < n; i = i + 2 * width) {
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
          setArray([...items]);
          await sleep(sortSpeed);
          items[k].color = COLUMNS_COLOR;
          items[m - 1].color = COLUMNS_COLOR;
          k++;
        } else {
          items[k].color = "red";
          items[m].color = "red";
          currentSort.push(items[m]);
          setArray([...items]);
          await sleep(sortSpeed);
          items[m].color = COLUMNS_COLOR;
          items[k].color = COLUMNS_COLOR;
          m++;
        }
      }

      currentSort.map(function (item, i) {
        items[left + i] = item;
      });
    }
  }
  setArray(currentSort);
  setIsRunning(false); */
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
    j,
    temp;
  /* console.log(left, right, end); */

  for (j = left; j < end; j++) {
    /* steps.push({ x: n, y: m - 1, q: -1 }); */
    if (n < right && (m >= end || items[n].value < items[m].value)) {
      currentSort.push(items[n]);
      steps.push({ x: n, y: m - 1, q: items[n].value });
      /* steps.push({ x: n, y: items[m - 1], q: 1 }); */
      n++;
    } else {
      currentSort.push(items[m]);
      steps.push({ x: m, y: m, q: items[m].value });
      /* steps.push({ x: m, y: items[n], q: 1 }); */
      m++;
    }
  }

  currentSort.map(function (item, i) {
    items[left + i] = item;
  });

  /* console.log("current", items); */

  /* while (n < right && m < end) {
    if (items[n].value <= items[m].value) {
      currentSort.push(items[n]);
      n++;
    } else {
      currentSort.push(items[m]);
      m++;
    }
  }

  while (n < right) {
    currentSort.push(items[n]);
    n++;
  }

  while (m < end) {
    currentSort.push(items[m]);
    m++;
  } */
}

async function Vizualize(array, setArray, steps, sortSpeed, setIsRunning) {
  let temp = 0;
  let x1 = -1,
    y1 = -1;
  let currentSort = [...array];
  console.log(steps);
  setIsRunning(true);
  /* for (let i = 0; i < 63; i++) {
    console.log(x1, y1, steps[i].x, steps[i].y);

    if (x1 !== steps[i].x && y1 !== steps[i].y) {
      console.log("true");
      currentSort[steps[i].x].color = "red";
      currentSort[steps[i].y].color = "red";

      temp = currentSort[steps[i].x];
      currentSort[steps[i].x] = currentSort[steps[i].y];
      currentSort[steps[i].y] = temp;
      if (i < 31) {
        setArray([...currentSort]);
        await sleep(sortSpeed);
      }

      currentSort[steps[i].x].color = COLUMNS_COLOR;
      currentSort[steps[i].y].color = COLUMNS_COLOR;
    } else {
      console.log("false");
    }

    x1 = steps[i].x;
  y1 = steps[i].y;

    
  } */

  /* for (let i = 0; i < 63; i++) {
    array[steps[i].x].color = "red";
    array[steps[i].z].color = "red";

    array[steps[i].x].value = steps[i].y;
    array[steps[i].z].value = steps[i].q;

    if (i < 30) {
      setArray([...array]);
      await sleep(sortSpeed);
    }

    array[steps[i].x].color = COLUMNS_COLOR;
    array[steps[i].z].color = COLUMNS_COLOR;
  } */

  /* for (let i = 0; i < steps.length; i++) {
    if (steps[i].q === -1) {
      array[steps[i].x].color = "red";
      array[steps[i].y].color = "red";

      setArray([...array]);
      await sleep(sortSpeed);

      array[steps[i].x].color = COLUMNS_COLOR;
      array[steps[i].y].color = COLUMNS_COLOR;
    } else {
      array[steps[i].x].value = steps[i].y;
    }
  }
 */
  for (let i = array.length; i < steps.length; i++) {
    array[steps[i].x].color = "red";
    array[steps[i].y].color = "red";

    array[steps[i].x].value = steps[i].q;

    setArray([...array]);
    await sleep(sortSpeed);

    array[steps[i].x].color = COLUMNS_COLOR;
    array[steps[i].y].color = COLUMNS_COLOR;
  }

  /* for (let i = 32; i < 63; i++) {
    console.log("true");
    currentSort[steps[i].x].color = "red";
    currentSort[steps[i].y].color = "red";

    temp = currentSort[steps[i].x];
    currentSort[steps[i].x] = currentSort[steps[i].y];
    currentSort[steps[i].y] = temp;

    setArray([...currentSort]);
    await sleep(sortSpeed);

    currentSort[steps[i].x].color = COLUMNS_COLOR;
    currentSort[steps[i].y].color = COLUMNS_COLOR;
  } */
  setArray([...array]);

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

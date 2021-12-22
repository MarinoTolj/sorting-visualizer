import { COLOR_ARRAY } from "../components/sortingVisualizer";
import { sleep } from "../components/sortingVisualizer";

export default async function MergeSort(
  array,
  setArray,
  setIsRunning,
  sortSpeed
) {
  let auxiliaryArray = [...array];
  bottomUpSort(auxiliaryArray, auxiliaryArray.length, setArray);
  setArray(auxiliaryArray);
}

async function bottomUpSort(items, n, setArray) {
  var width, i;

  for (width = 1; width < n; width = width * 2) {
    for (i = 0; i < n; i = i + 2 * width) {
      bottomUpMerge(
        items,
        i,
        Math.min(i + width, n),
        Math.min(i + 2 * width, n),
        setArray
      );
    }
  }
}

async function bottomUpMerge(items, left, right, end, setArray) {
  var n = left,
    m = right,
    currentSort = [],
    j;

  for (j = left; j < end; j++) {
    if (n < right && (m >= end || items[n].value < items[m].value)) {
      items[n].color = "red";
      currentSort.push(items[n]);
      /* setArray([...items]); */
      await sleep(20);
      items[n].color = "blue";
      n++;
    } else {
      items[m].color = "red";
      currentSort.push(items[m]);
      /* setArray([...items]); */
      /* await sleep(20); */
      items[m].color = "blue";
      m++;
    }
  }
  /* setArray(currentSort); */
  currentSort.map(function (item, i) {
    items[left + i] = item;
  });
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

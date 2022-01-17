export default async function HeapSortMaxHeap(
  array,
  setArray,
  sortSpeed,
  setIsRunning
) {
  console.log("hello");
}

function heapify(arr, n, i) {
  var smallest = i; // Initialize smalles as root
  var l = 2 * i + 1; // left = 2*i + 1
  var r = 2 * i + 2; // right = 2*i + 2

  // If left child is smaller than root
  if (l < n && arr[l].value < arr[smallest].value) smallest = l;

  // If right child is smaller than smallest so far
  if (r < n && arr[r].value < arr[smallest].value) smallest = r;

  // If smallest is not root
  if (smallest != i) {
    [arr[i], arr[smallest]] = [arr[smallest], arr[i]];

    // Recursively heapify the affected sub-tree
    heapify(arr, n, smallest);
  }
}

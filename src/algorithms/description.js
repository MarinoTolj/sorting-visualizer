import React from "react";

export const algorithmsDescription = [
  {
    BubbleSort: (
      <p>
        Bubble sort, sometimes referred to as sinking sort, is a simple sorting
        algorithm that repeatedly steps through the list, compares adjacent
        elements and swaps them if they are in the wrong order. The pass through
        the list is repeated until the list is sorted. The algorithm, which is a
        comparison sort, is named for the way smaller or larger elements
        "bubble" to the top of the list.
        <br /> Worst-case time performance O(n<sup>2</sup>)
        <br /> Best-case time performance Ω(n)
        <br /> Average-case time performance Θ(n<sup>2</sup>)
        <br /> Worst-case space complexity O(n)
        <br />
        <a href="https://en.wikipedia.org/wiki/Bubble_sort">
          https://en.wikipedia.org/wiki/Bubble_sort
        </a>
      </p>
    ),
    InsertionSort: (
      <p>
        Insertion sort is a simple sorting algorithm that builds the final
        sorted array (or list) one item at a time. It is much less efficient on
        large lists than more advanced algorithms such as quicksort, heapsort,
        or merge sort.
        <br /> Worst-case time performance O(n<sup>2</sup>)
        <br /> Best-case time performance Ω(n)
        <br /> Average-case time performance Θ(n<sup>2</sup>)
        <br /> Worst-case space complexity O(n)
        <br />
        <a href="https://en.wikipedia.org/wiki/Insertion_sort">
          https://en.wikipedia.org/wiki/Insertion_sort
        </a>
      </p>
    ),

    SelectionSort: (
      <p>
        In computer science, selection sort is an in-place comparison sorting
        algorithm.The algorithm divides the input list into two parts: a sorted
        sublist of items which is built up from left to right at the front
        (left) of the list and a sublist of the remaining unsorted items that
        occupy the rest of the list. The algorithm proceeds by finding the
        smallest (or largest, depending on sorting order) element in the
        unsorted sublist, exchanging (swapping) it with the leftmost unsorted
        element (putting it in sorted order), and moving the sublist boundaries
        one element to the right.
        <br /> Worst-case time performance O(n<sup>2</sup>)
        <br /> Best-case time performance Ω(n<sup>2</sup>)
        <br /> Average-case time performance Θ(n<sup>2</sup>)
        <br /> Worst-case space complexity O(n)
        <br />
        <a href="https://en.wikipedia.org/wiki/Selection_sort">
          https://en.wikipedia.org/wiki/Selection_sort
        </a>
      </p>
    ),
  },
];

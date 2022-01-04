import React from "react";

export const algorithmsDescription = {
  BubbleSort: (
    <p>
      Bubble sort, sometimes referred to as sinking sort, is a simple sorting
      algorithm that repeatedly steps through the list, compares adjacent
      elements and swaps them if they are in the wrong order. The pass through
      the list is repeated until the list is sorted. The algorithm, which is a
      comparison sort, is named for the way smaller or larger elements "bubble"
      to the top of the list.
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
      Insertion sort is a simple sorting algorithm that builds the final sorted
      array (or list) one item at a time. It is much less efficient on large
      lists than more advanced algorithms such as quicksort, heapsort, or merge
      sort.
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
      sublist of items which is built up from left to right at the front (left)
      of the list and a sublist of the remaining unsorted items that occupy the
      rest of the list. The algorithm proceeds by finding the smallest (or
      largest, depending on sorting order) element in the unsorted sublist,
      exchanging (swapping) it with the leftmost unsorted element (putting it in
      sorted order), and moving the sublist boundaries one element to the right.
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

  MergeSort: (
    <p>
      In computer science, merge sort (also commonly spelled as mergesort) is an
      efficient, general-purpose, and comparison-based sorting algorithm. Most
      implementations produce a stable sort, which means that the order of equal
      elements is the same in the input and output. Merge sort is a divide and
      conquer algorithm that was invented by John von Neumann in 1945. A
      detailed description and analysis of bottom-up merge sort appeared in a
      report by Goldstine and von Neumann as early as 1948.
      <br /> Worst-case time performance O(nlogn)
      <br /> Best-case time performance Ω(nlogn)
      <br /> Average-case time performance Θ(nlogn)
      <br /> Worst-case space complexity O(n)
      <br />
      <a href="https://en.wikipedia.org/wiki/Merge_sort">
        https://en.wikipedia.org/wiki/Merge_sort
      </a>
    </p>
  ),

  QuickSort: (
    <p>
      Quicksort is an in-place sorting algorithm. Developed by British computer
      scientist Tony Hoare in 1959 and published in 1961, it is still a commonly
      used algorithm for sorting. When implemented well, it can be somewhat
      faster than merge sort and about two or three times faster than heapsort.
      Quicksort is a divide-and-conquer algorithm. It works by selecting a
      'pivot' element from the array and partitioning the other elements into
      two sub-arrays, according to whether they are less than or greater than
      the pivot. For this reason, it is sometimes called partition-exchange
      sort. The sub-arrays are then sorted recursively. This can be done
      in-place, requiring small additional amounts of memory to perform the
      sorting.
      <br /> Worst-case time performance O(n<sup>2</sup>)
      <br /> Best-case time performance Ω(nlogn)
      <br /> Average-case time performance Θ(nlogn)
      <br /> Worst-case space complexity O(n)
      <br />
      <a href="https://en.wikipedia.org/wiki/Quicksort#Worst-case_analysis">
        https://en.wikipedia.org/wiki/Quicksort#Worst-case_analysis
      </a>
    </p>
  ),
  HeapSort: (
    <p>
      In computer science, heapsort is a comparison-based sorting algorithm.
      Heapsort can be thought of as an improved selection sort: like selection
      sort, heapsort divides its input into a sorted and an unsorted region, and
      it iteratively shrinks the unsorted region by extracting the largest
      element from it and inserting it into the sorted region. Unlike selection
      sort, heapsort does not waste time with a linear-time scan of the unsorted
      region; rather, heap sort maintains the unsorted region in a heap data
      structure to more quickly find the largest element in each step.
      <br /> Worst-case time performance O(nlogn)
      <br /> Best-case time performance Ω(nlogn)
      <br /> Average-case time performance Θ(nlogn)
      <br /> Worst-case space complexity O(n)
      <br />
      <a href="https://en.wikipedia.org/wiki/Heapsort">
        https://en.wikipedia.org/wiki/Heapsort
      </a>
    </p>
  ),
  BucketSort: (
    <p>
      Bucket sort, or bin sort, is a sorting algorithm that works by
      distributing the elements of an array into a number of buckets. Each
      bucket is then sorted individually, either using a different sorting
      algorithm, or by recursively applying the bucket sorting algorithm. It is
      a distribution sort, a generalization of pigeonhole sort, and is a cousin
      of radix sort in the most-to-least significant digit flavor. Bucket sort
      can be implemented with comparisons and therefore can also be considered a
      comparison sort algorithm. The computational complexity depends on the
      algorithm used to sort each bucket, the number of buckets to use, and
      whether the input is uniformly distributed.
      <br /> Worst-case time performance O(n*logn),
      <br /> Worst-case space complexity O(n+n<sup>2</sup>/k+k),
      <br /> where k is the number of buckets
      <br /> Worst-case space complexity O(n+k)
      <br />
      <a href="https://en.wikipedia.org/wiki/Bucket_sort">
        https://en.wikipedia.org/wiki/Bucket_sort
      </a>
    </p>
  ),
  RadixSort: (
    <p>
      In computer science, radix sort is a non-comparative sorting algorithm. It
      avoids comparison by creating and distributing elements into buckets
      according to their radix. For elements with more than one significant
      digit, this bucketing process is repeated for each digit, while preserving
      the ordering of the prior step, until all digits have been considered. For
      this reason, radix sort has also been called bucket sort and digital sort.
      Radix sort can be applied to data that can be sorted lexicographically, be
      they integers, words, punch cards, playing cards, or the mail.
      <br /> Worst-case time performance O(w*n),
      <br /> Worst-case space complexity O(w+n)
      <br />
      where n is the number of keys, and w is key length
      <br />
      <a href="https://en.wikipedia.org/wiki/Radix_sort">
        https://en.wikipedia.org/wiki/Radix_sort
      </a>
    </p>
  ),

  CountingSort: (
    <p>
      In computer science, counting sort is an algorithm for sorting a
      collection of objects according to keys that are small positive integers;
      that is, it is an integer sorting algorithm. It operates by counting the
      number of objects that possess distinct key values, and applying prefix
      sum on those counts to determine the positions of each key value in the
      output sequence. Its running time is linear in the number of items and the
      difference between the maximum key value and the minimum key value, so it
      is only suitable for direct use in situations where the variation in keys
      is not significantly greater than the number of items. It is often used as
      a subroutine in radix sort, another sorting algorithm, which can handle
      larger keys more efficiently.
      <br /> Worst-case time performance O(n+k),
      <br /> where k is the range of the non-negative key values.
      <br /> Worst-case space complexity O(n+k)
      <br />
      <a href="https://en.wikipedia.org/wiki/Counting_sort">
        https://en.wikipedia.org/wiki/Counting_sort
      </a>
    </p>
  ),
};

import { swap } from "../utils/util";

// Heapsort:
// 1. Arrange the array into a max heap. (Heapify)
// 2. Peel off the max value, put it in last place
// 3. Heapify the remaining array.
// 4. Repeat.
//

/**
 * Turn an almost-max heap `array` into a max heap by bubbling down the element
 * at `index`.
 *
 * @param {number[]} array - The array to heapify.
 * @param {number} index - The position of the out-of-place element to bubble
 * down
 *
 * @return {array[]} - The heapified array.
 **/
function bubbleDown(array: number[], index: number): number[] {
  const lChildIndex = index * 2;
  const rChildIndex = index * 2 + 1;

  // If there are no children, do nothing.
  if (lChildIndex >= array.length) return array;

  const largestChildIndex =
    array[lChildIndex] > array[rChildIndex] ? lChildIndex : rChildIndex;

  // Recursively bubble down
  return bubbleDown(swap(array, index, largestChildIndex), largestChildIndex);
}

/**
 * Rearrange array to max heap form. In a max heap, every node (at index i)
 * is larger than its child nodes (at index 2*i and 2*i + 1).
 *
 * @param {number[]} array - The array to turn into a heap.
 * @return {number[]} - The heapified array.
 **/
function heapify(array: number[]): number[] {
  // Starting from the bottom, bubble down every node.
  for (let i = array.length - 1; i >= 0; i--) {
    array = bubbleDown(array, i);
  }

  return array;
}

export { heapify, bubbleDown };

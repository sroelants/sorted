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
 * Note: If the input array is not an "almost-heap", ie, up to a displaced
 * root node, the result will probably not be an actual max-heap. bubbleDown
 * simply restores the heap property of a modified heap.
 *
 * @param {number[]} array - The array to heapify.
 * @param {number} index - The position of the out-of-place element to bubble
 * down
 *
 * @return {array[]} - The heapified array.
 **/
function bubbleDown(
  array: number[],
  index: number,
  max: number = array.length
): number[] {
  const lChildIndex = index * 2 + 1;
  const rChildIndex = index * 2 + 2;

  // If there are no children, do nothing.
  if (lChildIndex >= max) return array;

  const largestChildIndex =
    rChildIndex >= max
      ? lChildIndex //If no right child, left is largest by default, else:
      : array[lChildIndex] > array[rChildIndex]
      ? lChildIndex
      : rChildIndex;

  // If element at index is larger than both children, we are done bubbling.
  if (array[index] >= array[largestChildIndex]) return array;

  // Swap elements and recursively bubble down
  return bubbleDown(
    swap(array, index, largestChildIndex),
    largestChildIndex,
    max
  );
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

/**
 * Sort an array using heap sort.
 *
 * @param {number[]} array - The array that needs to be sorted.
 * @return {number[]} - The sorted array.
 **/
function heapsort(array: number[]): number[] {
  array = heapify(array);
  for (let i = array.length - 1; i > 0; i--) {
    array = swap(array, 0, i);
    array = bubbleDown(array, 0, i);
  }
  return array;
}

///////////////////////////////////////////////////////////////////////////////
// Heap sort generator
///////////////////////////////////////////////////////////////////////////////

/**
 * Generator that yields individual heap sort steps.
 *
 * @param {number[]} array - The array that needs to be sorted.
 * @return {Generator<number[]>} - The sorted array.
 **/
function* heapSortGenerator(array: number[]) {
  // Create max heap
  for (let i = array.length - 1; i >= 0; i--) {
    array = (yield* bubbleDownGenerator(array, i)).array;
    yield { array: array };
    // array = bubbleDown(array, i);
  }

  for (let i = array.length - 1; i > 0; i--) {
    // Place root node in sorted position
    array = swap(array, 0, i);
    yield { array: array };
    // Bubble down the new root
    array = (yield* bubbleDownGenerator(array, 0, i)).array;
  }
  return { array: array };
}

function* bubbleDownGenerator(
  array: number[],
  index: number,
  max: number = array.length
): any {
  while (index < max) {
    const lChildIndex = index * 2 + 1;
    const rChildIndex = index * 2 + 2;

    // If there are no children, do nothing.
    if (lChildIndex >= max) {
      return { array: array };
    }

    const largestChildIndex =
      rChildIndex >= max
        ? lChildIndex //If no right child, left is largest by default, else:
        : array[lChildIndex] > array[rChildIndex]
        ? lChildIndex
        : rChildIndex;

    if (array[index] >= array[largestChildIndex]) {
      return { array: array };
    }
    array = swap(array, index, largestChildIndex);
    yield { array: array };
    index = largestChildIndex;
  }
}

export { heapify, bubbleDown, heapsort, heapSortGenerator };

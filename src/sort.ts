// NEW IDEA: Maybe I should try and create *generators* that yield the new
// heights array, perhaps along with an active/testing/pivot position. How
// complicated would this be to do in a recursive definition? Maybe it could be
// okay? We simply build up a massive stack, with yields somewhere in there. Do
// generators preserve the stack frame? Maybe try this in a separate branch by
// implementing bubbleSort.

// Sorting algorithms

// Bubblesort /////////////////////////////////////////////////////////////////
function* bubbleSortGenerator(array: number[]) {
  while (!isSorted(array)) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        array = swap(array, i, i + 1);
      }
      yield array;
    }
  }
  return array;
}

function bubbleSort(array: number[]): number[] {
  while (!isSorted(array)) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] < array[i + 1]) {
        array = swap(array, i, i + 1);
      }
    }
  }
  return array;
}

function isSorted(array: number[]): boolean {
  let sorted = true;
  for (let i = 1; i < array.length; i++) {
    if (array[i - 1] > array[i]) return false;
  }
  return sorted;
}

function swap<T>(array: Array<T>, i: number, j: number): Array<T> {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
  return array;
}

export { isSorted, swap, bubbleSortGenerator, bubbleSort };

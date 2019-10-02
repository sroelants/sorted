import { isSorted, swap } from "../utils/util";

function* bubbleSortGenerator(array: number[]): Generator {
  for (let j = array.length; j > 0; j--) {
    for (let i = 0; i < j - 1; i++) {
      yield { array: array, active: [i, i + 1] };
      if (array[i] > array[i + 1]) {
        array = swap(array, i, i + 1);
        yield { array: array, active: [i, i + 1] };
      }
    }
  }
  return { array: array, active: [] };
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

export { bubbleSort, bubbleSortGenerator };

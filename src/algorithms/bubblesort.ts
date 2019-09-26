import { isSorted, swap } from "./util";

function* bubbleSortGenerator(array: number[]): Generator {
  while (!isSorted(array)) {
    for (let i = 0; i < array.length; i++) {
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

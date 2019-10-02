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

function range(start: number, end: number) {
  return Array.from({ length: end - start }, (v, k) => k + start);
}

function randArray(length: number, min: number = 0, max: number = 100) {
  return Array(length)
    .fill(0)
    .map(x => min + Math.floor((max - min) * Math.random()));
}

function isMaxHeap(array: number[]): boolean {
  let isHeap = true;
  for (let i = 0; i < array.length; i++) {
    if (2 * i + 1 < array.length)
      isHeap = isHeap && array[i] >= array[2 * i + 1];
    if (2 * i + 2 < array.length)
      isHeap = isHeap && array[i] >= array[2 * i + 2];
  }
  return isHeap;
}

function partition(array: number[], value: number): [number[], number[]] {
  let less = [];
  let greater = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < value) less.push(array[i]);
    else greater.push(array[i]);
  }
  return [less, greater];
}

export { isSorted, swap, range, randArray, isMaxHeap, partition };

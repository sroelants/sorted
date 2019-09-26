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

export { isSorted, swap, range, randArray };

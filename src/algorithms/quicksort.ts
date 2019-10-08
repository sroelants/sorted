// Quicksort
//
// Algorithm:
// 1. Pick a pivot
// 2. Do a pass over the array, all elements less than pivot to the left, others
//    to the right.
// 3. Repeat with both sublists.

const range = (start: number, end: number) =>
  Array.from({ length: end - start }, (v, k) => k + start);

function* quickSortGenerator(
  array: number[],
  min: number = 0,
  max: number = array.length
): any {
  if (max - min <= 1) return { array: array, active: [min] };
  // Partition array¬
  let pivot = array[min];
  let less: number[] = [];
  let greater: number[] = [];

  for (let i = min + 1; i < max; i++) {
    if (array[i] < pivot) less.push(array[i]);
    else greater.push(array[i]);
    array.splice(min, i - min + 1, ...less.concat(pivot, greater));
    yield {
      array: array,
      active: [min + less.length],
      testing: range(min, max)
    };
  }

  yield* quickSortGenerator(array, min, min + less.length);
  yield* quickSortGenerator(array, min + less.length + 1, max);
  return { array: array };
}
export { quickSortGenerator };

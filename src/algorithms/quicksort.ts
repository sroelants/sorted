// Quicksort
//
// Algorithm:
// 1. Pick a pivot
// 2. Do a pass over the array, all elements less than pivot to the left, others
//    to the right.
// 3. Repeat with both sublists.

function* quickSortGenerator(
  array: number[],
  min: number = 0,
  max: number = array.length
): any {
  console.log("---STARTING QUICKSORT.---");
  console.log("Minimal index: ", min);
  console.log("Maximal index: ", max - 1);

  if (max - min <= 1) return { array: array, active: [] };
  // Partition array¬
  let pivot = array[min];
  let less: number[] = [];
  let greater: number[] = [];

  for (let i = min + 1; i < max; i++) {
    console.log("Pivot is ", pivot);
    console.log("Array element is ", array[i]);
    if (array[i] < pivot) less.push(array[i]);
    else greater.push(array[i]);
    console.log("Less is now: ", less);
    console.log("Greater is now: ", greater);
    console.log("Splicing into array: ", less.concat([pivot]).concat(greater));
    console.log("Splicing at position: ", min);
    console.log("Replacing ", i - min + 1, " elements.");
    array.splice(min, i - min + 1, ...less.concat([pivot]).concat(greater));
    console.log("Yielding array: ", array);
    yield { array: array, active: [] };
  }

  console.log("Recursively quicksorting left: ", less);
  yield* quickSortGenerator(array, min, min + less.length);
  console.log("Recursively quicksorting right: ", greater);
  yield* quickSortGenerator(array, min + less.length + 1, max);
}
export { quickSortGenerator };

// Sorting algorithms

// Bubble sort ////////////////////////////////////////////////////////////////
function* bubbleSortGenerator(array: number[]) {
  while (!isSorted(array)) {
    for (let i = 0; i < array.length; i++) {
      yield { array: array, active: i, testing: i + 1 };
      if (array[i] > array[i + 1]) {
        array = swap(array, i, i + 1);
        yield { array: array, active: i + 1, testing: i };
      }
    }
  }
  return { array: array, active: -1, testing: -1 };
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

// Merge sort /////////////////////////////////////////////////////////////////
// In order to easily implement the sort as an algorithm, we implement a bottom-
// up merge sort (non-recursive):
// First merge elements pairwise, then merge the paired lists pairwise, then
// the 4-element lists pairwise, etc...

function* mergeSortGenerator(array: number[]): any {
  let N = array.length;
  if (isSorted(array)) return array;

  // When sweeping the array, aim for 2*N elements, so we're sure to include any
  // remaining elements.
  for (let n = 2; n < 2 * N; n *= 2) {
    // n = merge window size (fits two subarrays we're going to merge)
    for (let i = 0; i * n < N; i++) {
      // For every window's width in array, ie for every two subarrays
      let arr1 = array.slice(i * n, i * n + n / 2); // length n/2
      let arr2 = array.slice(i * n + n / 2, (i + 1) * n);

      // Merge the two subarrays
      let merged: any = [];
      while (arr1.length && arr2.length) {
        // While both non-empty
        if (arr1[0] < arr2[0]) {
          merged.push(arr1.shift());
        } else {
          merged.push(arr2.shift());
        }
        // Splice in the intermediate result for visualisation.
        let semiMerged = merged.concat(arr1).concat(arr2);
        array.splice(i * n, semiMerged.length, ...semiMerged);
        yield { array: array };
      }
      // Add remaining elements.
      if (arr1.length) merged = merged.concat(arr1);
      else merged = merged.concat(arr2);

      array.splice(i * n, merged.length, ...merged); // insert at position i*n, replace n elements
      yield { array: array };
    }
  }
}

function mergeSort(array: number[]): number[] {
  let N = array.length;
  if (N <= 1) return array; // Base case

  let arr1 = array.slice(0, Math.floor(N / 2));
  let arr2 = array.slice(Math.floor(N / 2), N);

  return merge(mergeSort(arr1), mergeSort(arr2));

  function merge(arr1: number[], arr2: number[]): number[] {
    // Merge two sorted arrays.

    // If one of both arrays is empty, simply return the remaining array.
    if (arr1.length === 0) return arr2;
    if (arr2.length === 0) return arr1;

    let [head1, ...tails1] = arr1;
    let [head2, ...tails2] = arr2;
    if (head1 < head2) return [head1].concat(merge(tails1, arr2));
    else return [head2].concat(merge(arr1, tails2));
  }
}

// Helper functions ///////////////////////////////////////////////////////////

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

export {
  isSorted,
  swap,
  bubbleSortGenerator,
  bubbleSort,
  mergeSort,
  mergeSortGenerator
};

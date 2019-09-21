export type Active = {action: "active", position: number};
export type Testing = {action: "testing", position: number};
export type Swap = {action: "swap", swap: [ number, number ]};

export type Action = Active | Testing | Swap;


// NEW IDEA: Maybe I should try and create *generators* that yield the new
// heights array, perhaps along with an active/testing/pivot position. How
// complicated would this be to do in a recursive definition? Maybe it could be
// okay? We simply build up a massive stack, with yields somewhere in there. Do
// generators preserve the stack frame? Maybe try this in a separate branch by
// implementing bubbleSort.


// Sorting algorithms

function bubbleSort(arr: number[]): Action[] {
  // Takes an array and returns the steps needed to sort it according to 
  // bubblesort.
  let N = arr.length;
  let actions: Action[] = [];
  
  while (!isSorted(arr)){
    for(let i = 0; i < N-1; i++){
      actions.push({action: "active", position: i});
      actions.push({action: "testing", position: i+1});

      if (arr[i] > arr[i+1]){
        actions.push({action: "swap", swap: [i, i+1]})
        arr = swap(arr, i, i+1);
      }
    }
  }
  return actions;
}

function mergesort(arr: number[]): Action[] {
  // Merge sort consists of two parts: Divide up the list recursively into
  // smaller lists (until the list contains one element, in which case it is 
  // sorted. It then needs a method to merge two sorted lists on the way back 
  // up.)
  // Potentially zip the array with its indices, so I can keep track of the 
  // active/testing positions during the sort. (Since there are no for-loops
  // involved.
  let N = arr.length;
  let actions: Action[] = [];
  let indexed_arr: [number, number][] = arr.map((el, i) => [el, i]);

  function merge(arr1: [number, number][], 
                 arr2: [number, number][]): [number, number][] {
    // Recursively merge two sorted lists in the form of element-index tuples:
    // If one array is empty, simply return all the elements in the other list.
    // If both lists are non-empty: take the heads of both lists, compare them,
    // and take the smallest element concatenated with the merge of the
    // remaining lists.
    if (arr1.length === 0) {
      return arr2;
    }
    if (arr2.length === 0) {
      return arr1;
    }
    let [head1, ...rest1] = arr1;
    let [head2, ...rest2] = arr2;

    if (head1[0] <= head2[0]) {
      return [head1].concat(merge(rest1, arr2));
    }
    return [head2].concat(merge(arr1, rest2));
  }

  function sortArray(arr: [number, number][]): [number, number][] {
    if (arr.length === 1) {
      return arr;
    }

    let middle = Math.floor(arr.length / 2);
    return merge(arr.slice(0, middle), arr.slice(middle, arr.length));
  }
  return actions;
}

// Helper functions

function isSorted(arr: number[]): boolean {
  let sorted = true;
  for(let i = 0; i < arr.length - 1; i++){
    sorted = sorted && arr[i] <= arr[i+1];
  }
  return sorted;
}

function swap<T>(arr: Array<T>, i: number, j: number): Array<T> {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  return arr;
}

export { isSorted, bubbleSort, swap};

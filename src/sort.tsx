export type Active = {action: "active", position: number};
export type Testing = {action: "testing", position: number};
export type Swap = {action: "swap", swap: [ number, number ]};

export type Action = Active | Testing | Swap;


// Sorting algorithms

function bubbleSort(arr: number[]): Action[] {
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

// Helper functions

function isSorted(arr: number[]): boolean {
  let sorted = true;
  for(let i = 0; i < arr.length - 1; i++){
    sorted = sorted && arr[i] <= arr[i+1];
  }
  return sorted;
}

function swap(arr: number[], i: number, j: number): number[] {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  return arr;
}

export { isSorted, bubbleSort, swap};

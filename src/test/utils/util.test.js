import { swap, isSorted, isMaxHeap, partition } from "../../utils/util";

// isSorted tests

test("[1,2,3] is sorted", () => {
  expect(isSorted([1, 2, 3])).toEqual(true);
});

test("[1,3,2] is not sorted", () => {
  expect(isSorted([1, 3, 2])).toEqual(false);
});

test("[] is sorted", () => {
  expect(isSorted([])).toEqual(true);
});

test("[1,1,1] is sorted", () => {
  expect(isSorted([1, 1, 1])).toEqual(true);
});

test("[3,2,1] is not sorted", () => {
  expect(isSorted([3, 2, 1])).toEqual(false);
});

// swap tests

test("swap([1,2,3], 0, 1) returns [2,1,3]", () => {
  expect(swap([1, 2, 3], 0, 1)).toEqual([2, 1, 3]);
});

// isMaxHeap tests

test("isMaxHeap([]) returns true", () => {
  expect(isMaxHeap([])).toEqual(true);
});

test("isMaxHeap([1,2]) returns false", () => {
  expect(isMaxHeap([1,2])).toEqual(false);
});

test("isMaxHeap([6,4,5,2,1,3]) returns true", () => {
  expect(isMaxHeap([6,4,5,2,1,3])).toEqual(true);
});

// partition tests

test("partition([],0) returns [[],[]].", 
  () => {
  expect(partition([], 0)).toEqual([[],[]]);
});

test("partition([1,1,1], 0) returns [[],[1,1,1]]", () => {
  expect(partition([1,1,1], 0)).toEqual([[],[1,1,1]]);
});

test("partition([1,2,3,4,5], 3) returns [[1,2],[3,4,5]]", () => {
  expect(partition([1,2,3,4,5], 3)).toEqual([[1,2],[3,4,5]]);
});

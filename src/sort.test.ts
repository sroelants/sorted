import { swap, isSorted, bubbleSortGenerator, bubbleSort } from "./sort";

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

// bubbleSort tests
test("bubbleSortGenerator([]).next() returns [] and 'done: true'", () => {
  expect(bubbleSortGenerator([]).next()).toEqual({ value: [], done: true });
});

test("bubbleSortGenerator([1]).next() returns [1] and 'done: true'", () => {
  expect(bubbleSortGenerator([1]).next()).toEqual({ value: [1], done: true });
});

test("bubbleSortGenerator([1,2]).next() returns [1,2] and 'done: true'", () => {
  expect(bubbleSortGenerator([1, 2]).next()).toEqual({
    value: [1, 2],
    done: true
  });
});

test("bubbleSort([3,2,1] returns [1,2,3])", () => {
  expect(bubbleSort([1, 2, 3])).toEqual([1, 2, 3]);
});

test("bubbleSortGenerator([2,1]).next() returns [1,2] and 'done: false'", () => {
  expect(bubbleSortGenerator([2, 1]).next()).toEqual({
    value: [1, 2],
    done: false
  });
});

test("bubbleSortGenerator([2,1]).next() run twice returns [1,2] and 'done: true'", () => {
  let bsg = bubbleSortGenerator([2, 1]);
  bsg.next();
  expect(bsg.next()).toEqual({
    value: [1, 2],
    done: false
  });
});

// test("bubbleSortGenerator([3,2,1]).next() returns [2,3,1] and 'done: false'", () => {
//   expect(bubbleSortGenerator([]).next()).toEqual({ value: [], done: true });
// });

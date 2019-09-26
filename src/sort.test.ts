import {
  swap,
  isSorted,
  bubbleSortGenerator,
  bubbleSort,
  mergeSort,
  mergeSortGenerator
} from "./sort";

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
  let bsg = bubbleSortGenerator([]);
  let response = bsg.next();
  expect(response.value.array).toEqual([]);
  expect(response.done).toEqual(true);
});

test("bubbleSortGenerator([1]).next() returns [1] and 'done: true'", () => {
  let bsg = bubbleSortGenerator([1]);
  let response = bsg.next();
  expect(response.value.array).toEqual([1]);
  expect(response.done).toEqual(true);
});

test("bubbleSortGenerator([1,2]).next() returns [1,2] and 'done: true'", () => {
  let bsg = bubbleSortGenerator([1, 2]);
  let response = bsg.next();
  expect(response.value.array).toEqual([1, 2]);
  expect(response.done).toEqual(true);
});

test("bubbleSort([3,2,1] returns [1,2,3])", () => {
  expect(bubbleSort([1, 2, 3])).toEqual([1, 2, 3]);
});

test("bubbleSortGenerator([2,1]).next() run twice returns [1,2] and 'done: false'", () => {
  let bsg = bubbleSortGenerator([2, 1]);
  let response = bsg.next();
  bsg.next();
  expect(response.value.array).toEqual([1, 2]);
  expect(response.done).toEqual(false);
});

test("bubbleSortGenerator([2,1]).next() run 4 times returns [1,2] and 'done: true'", () => {
  let bsg = bubbleSortGenerator([2, 1]);
  bsg.next();
  bsg.next();
  bsg.next();
  let response = bsg.next();
  expect(response.value.array).toEqual([1, 2]);
  expect(response.done).toEqual(true);
});

//mergeSort tests
test("mergeSort([] returns [])", () => {
  expect(mergeSort([])).toEqual([]);
});

test("mergeSort([1] returns [1])", () => {
  expect(mergeSort([1])).toEqual([1]);
});

test("mergeSort([1,2,3] returns [1,2,3])", () => {
  expect(mergeSort([1, 2, 3])).toEqual([1, 2, 3]);
});

test("mergeSort([3,2,1] returns [1,2,3])", () => {
  expect(mergeSort([3, 2, 1])).toEqual([1, 2, 3]);
});

// mergeSortGenerator tests
test("mergeSortGenerator([]).next() returns [] and 'done: true'", () => {
  let msg = mergeSortGenerator([]);
  let response = msg.next();
  expect(response.value.array).toEqual([]);
  expect(response.done).toEqual(true);
});

test("mergeSortGenerator([1]).next() returns [] and 'done: true'", () => {
  let msg = mergeSortGenerator([1]);
  let response = msg.next();
  expect(response.value.array).toEqual([1]);
  expect(response.done).toEqual(true);
});
test("mergeSortGenerator([1,2]).next() returns [] and 'done: true'", () => {
  let msg = mergeSortGenerator([1, 2]);
  let response = msg.next();
  expect(response.value.array).toEqual([1, 2]);
  expect(response.done).toEqual(true);
});

test("mergeSortGenerator([1,2,3]).next() returns [] and 'done: true'", () => {
  let msg = mergeSortGenerator([1, 2, 3]);
  let response = msg.next();
  expect(response.value.array).toEqual([1, 2, 3]);
  expect(response.done).toEqual(true);
});

import {
  bubbleSortGenerator,
  bubbleSort
} from "../../algorithms/bubblesort";

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

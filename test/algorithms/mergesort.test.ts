import { mergeSort, mergeSortGenerator } from "../../src/algorithms/mergesort";

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

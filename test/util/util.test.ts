import { swap, isSorted } from "../../src/utils/util";

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

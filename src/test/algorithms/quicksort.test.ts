import { quickSortGenerator } from "../../algorithms/quicksort";

// bubbleDown tests
//
test("quickSortGenerator([]).next() returns [] and done: true", () => {
  let qsg = quickSortGenerator([]);
  let retval = qsg.next();
  expect(retval.value.array).toEqual([]);
  expect(retval.done).toEqual(true);
});

test("quickSortGenerator([1]).next() returns [1] and done: true", () => {
  let qsg = quickSortGenerator([1]);
  let retval = qsg.next();
  expect(retval.value.array).toEqual([1]);
  expect(retval.done).toEqual(true);
});

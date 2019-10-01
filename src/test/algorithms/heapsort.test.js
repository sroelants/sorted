import {heapify, bubbleDown, heapsort, heapSortGenerator} from "../../algorithms/heapsort"
import {isMaxHeap, isSorted} from "../../utils/util"

// bubbleDown tests
//
test("bubbleDown([], _, 0) returns []", () => {
  expect(bubbleDown([], 0)).toEqual([]);
});

test("bubbleDown([1], 0) returns [1]", () => {
  expect(bubbleDown([1], 0)).toEqual([1]);
});

test("bubbleDown([1,2], 0) returns [2,1]", () => {
  expect(bubbleDown([1, 2], 0)).toEqual([2,1]);
});

test("bubbleDown([1,2], 1) returns [1,2]", () => {
  expect(bubbleDown([1, 2], 1)).toEqual([1,2]);
});

test("bubbleDown([1,2,3], 0) returns [3,2, 1]", () => {
  expect(bubbleDown([1, 2, 3], 0)).toEqual([3,2,1]);
});

test("bubbleDown([1,2,3], 0) returns [3,2, 1]", () => {
  expect(bubbleDown([1, 2, 3], 0)).toEqual([3,2,1]);
});

test("bubbleDown([1,4,5,2,6,3], 0) returns [5, 4, 3, 2, 6, 1]", () => {
  expect(bubbleDown([1, 4, 5, 2, 6, 3], 0)).toEqual([5, 4, 3, 2, 6, 1]);
});

test("bubbleDown([6, 1, 4, 3, 5, 2], 1) returns [6, 5, 4, 3, 1, 2]", () => {
  expect(bubbleDown([6, 1, 4, 3, 5, 2], 1)).toEqual([6, 5, 4, 3, 1, 2]);
});

// heapify tests

test("heapify([]) returns []", () => {
  expect(heapify([])).toEqual([]);
});

test("heapify([42]) returns [42]", () => {
  expect(heapify([42])).toEqual([42]);
});

test("heapify([1,2]) returns [2,1]", () => {
  expect(heapify([1,2])).toEqual([2,1]);
});

test("heapify([1,2,3]) is a max heap", () => {
  expect(isMaxHeap(heapify([1,2,3]))).toEqual(true);
});

test("heapify([3,2,1]) is a max heap", () => {
  expect(isMaxHeap(heapify([3,2,1]))).toEqual(true);
});

test("heapify([1,2,3,4,5,6]) is a max heap", () => {
  expect(isMaxHeap(heapify([1,2,3,4,5,6]))).toEqual(true)
});

// heapsort tests

test("heapsort([]) returns []", () => {
  expect(heapsort([])).toEqual([]);
});

test("heapsort([1,2,3]) returns [1,2,3]", () => {
  expect(heapsort([1,2,3])).toEqual([1,2,3]);
});

test("heapsort([3,2,1]) returns [1,2,3]", () => {
  expect(heapsort([3,2,1])).toEqual([1,2,3]);
});

test("heapsort([7,-1,3,3,5,2,1,1000]) returns [-1,1,2,3,3,5,7,1000]", 
  () => {
    expect(heapsort([7, -1, 3, 3, 5, 2, 1, 1000]))
      .toEqual([-1, 1, 2, 3, 3, 5, 7, 1000]);
});

// heapSortGenerator tests

test("heapSortGenerator([]).next() returns done:true", () => {
  let hsg = heapSortGenerator([]);
  expect(hsg.next().done).toEqual(true);
});

test("heapSortGenerator([1]).next() returns value.array = [1] and done:false", 
  () => {
  let hsg = heapSortGenerator([1]);
  let retval = hsg.next()
  expect(retval.value.array).toEqual([1]);
  expect(retval.done).toEqual(false);
});

test("heapSortGenerator([1, 2]).next() returns value.array = [1, 2] and done:false", 
  () => {
  let hsg = heapSortGenerator([1,2]);
  let retval = hsg.next()
  expect(retval.value.array).toEqual([1, 2]);
  expect(retval.done).toEqual(false);
});

test("heapSortGenerator([3, 1, 2]).next() returns value.array = [1, 2, 3] and done:false", 
  () => {
  let hsg = heapSortGenerator([3,1,2]);
  let retval = hsg.next();
    while (!retval.done) {
      retval = hsg.next();
    }

  expect(isSorted(retval.value.array)).toEqual(true);
  expect(retval.done).toEqual(true);
});

test("heapSortGenerator([7,-1,3,3,5,2,1,1000]).next() returns sorted array and done:true", 
  () => {
  let hsg = heapSortGenerator([7,-1,3,3,5,2,1,1000]);
  let retval = hsg.next();
    while (!retval.done) {
      retval = hsg.next();
    }

  expect(isSorted(retval.value.array)).toEqual(true);
  expect(retval.done).toEqual(true);
});


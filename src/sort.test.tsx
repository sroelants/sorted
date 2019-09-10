import {swap, isSorted, bubbleSort} from './sort'

// isSorted tests

test('[1,2,3] is sorted', () => {
  expect(isSorted([1, 2, 3])).toEqual(true);
})

test('[1,3,2] is not sorted', () => {
  expect(isSorted([1, 3, 2])).toEqual(false);
})

test('[] is sorted', () => {
  expect(isSorted([])).toEqual(true);
})

test('[1,1,1] is sorted', () => {
  expect(isSorted([1, 1, 1])).toEqual(true);
})

test('[3,2,1] is not sorted', () => {
  expect(isSorted([3, 2, 1])).toEqual(false);
})

// swap tests

test('swap([1,2,3], 0, 1) returns [2,1,3]', () => {
  expect(swap([1,2,3],0,1)).toEqual([2,1,3]);
})

// bubbleSort tests

test('bubbleSort([]) returns []', () => {
  expect(bubbleSort([])).toEqual([]);
})

test('bubbleSort([2,1]) returns one active, testing and swap.', () => {
  expect(bubbleSort([2,1])).toEqual([
    {action: "active", position: 0},
    {action: "testing", position: 1},
    {action: "swap", swap: [0, 1]}
  ]);
})

test('bubbleSort([3,1,2]) returns the right actions', () => {
  expect(bubbleSort([3, 1, 2])).toEqual([
    {action: "active", position: 0},
    {action: "testing", position: 1},
    {action: "swap", swap: [0, 1]},
    {action: "active", position: 1},
    {action: "testing", position: 2},
    {action: "swap", swap: [1, 2]}
  ]);
})

test('bubbleSort([3,2,1]) returns the right actions', () => {
  expect(bubbleSort([3, 2, 1])).toEqual([
    {action: "active", position: 0},
    {action: "testing", position: 1},
    {action: "swap", swap: [0, 1]},
    {action: "active", position: 1},
    {action: "testing", position: 2},
    {action: "swap", swap: [1, 2]},
    {action: "active", position: 0},
    {action: "testing", position: 1},
    {action: "swap", swap: [0, 1]},
    {action: "active", position: 1},
    {action: "testing", position: 2},
  ]);
})

"use strict";
// Sorting algorithms
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
// Bubble sort ////////////////////////////////////////////////////////////////
function bubbleSortGenerator(array) {
    var i;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!!isSorted(array)) return [3 /*break*/, 6];
                i = 0;
                _a.label = 1;
            case 1:
                if (!(i < array.length)) return [3 /*break*/, 5];
                return [4 /*yield*/, { array: array, active: i, testing: i + 1 }];
            case 2:
                _a.sent();
                if (!(array[i] > array[i + 1])) return [3 /*break*/, 4];
                array = swap(array, i, i + 1);
                return [4 /*yield*/, { array: array, active: i + 1, testing: i }];
            case 3:
                _a.sent();
                _a.label = 4;
            case 4:
                i++;
                return [3 /*break*/, 1];
            case 5: return [3 /*break*/, 0];
            case 6: return [2 /*return*/, { array: array, active: -1, testing: -1 }];
        }
    });
}
exports.bubbleSortGenerator = bubbleSortGenerator;
function bubbleSort(array) {
    while (!isSorted(array)) {
        for (var i = 0; i < array.length; i++) {
            if (array[i] < array[i + 1]) {
                array = swap(array, i, i + 1);
            }
        }
    }
    return array;
}
exports.bubbleSort = bubbleSort;
// Merge sort /////////////////////////////////////////////////////////////////
// In order to easily implement the sort as an algorithm, we implement a bottom-
// up merge sort (non-recursive):
// First merge elements pairwise, then merge the paired lists pairwise, then
// the 4-element lists pairwise, etc...
function mergeSortGenerator(array) {
    var N, n, i, arr1, arr2, merged, semiMerged;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                N = array.length;
                if (isSorted(array))
                    return [2 /*return*/, array];
                n = 2;
                _a.label = 1;
            case 1:
                if (!(n < 2 * N)) return [3 /*break*/, 9];
                i = 0;
                _a.label = 2;
            case 2:
                if (!(i * n < N)) return [3 /*break*/, 8];
                arr1 = array.slice(i * n, i * n + n / 2);
                arr2 = array.slice(i * n + n / 2, (i + 1) * n);
                merged = [];
                _a.label = 3;
            case 3:
                if (!(arr1.length && arr2.length)) return [3 /*break*/, 5];
                // While both non-empty
                if (arr1[0] < arr2[0]) {
                    merged.push(arr1.shift());
                }
                else {
                    merged.push(arr2.shift());
                }
                semiMerged = merged.concat(arr1).concat(arr2);
                array.splice.apply(array, __spreadArrays([i * n, semiMerged.length], semiMerged));
                return [4 /*yield*/, { array: array }];
            case 4:
                _a.sent();
                return [3 /*break*/, 3];
            case 5:
                // Add remaining elements.
                if (arr1.length)
                    merged = merged.concat(arr1);
                else
                    merged = merged.concat(arr2);
                array.splice.apply(array, __spreadArrays([i * n, merged.length], merged)); // insert at position i*n, replace n elements
                return [4 /*yield*/, { array: array }];
            case 6:
                _a.sent();
                _a.label = 7;
            case 7:
                i++;
                return [3 /*break*/, 2];
            case 8:
                n *= 2;
                return [3 /*break*/, 1];
            case 9: return [2 /*return*/];
        }
    });
}
exports.mergeSortGenerator = mergeSortGenerator;
function mergeSort(array) {
    var N = array.length;
    if (N <= 1)
        return array; // Base case
    var arr1 = array.slice(0, Math.floor(N / 2));
    var arr2 = array.slice(Math.floor(N / 2), N);
    return merge(mergeSort(arr1), mergeSort(arr2));
    function merge(arr1, arr2) {
        // Merge two sorted arrays.
        // If one of both arrays is empty, simply return the remaining array.
        if (arr1.length === 0)
            return arr2;
        if (arr2.length === 0)
            return arr1;
        var head1 = arr1[0], tails1 = arr1.slice(1);
        var head2 = arr2[0], tails2 = arr2.slice(1);
        if (head1 < head2)
            return [head1].concat(merge(tails1, arr2));
        else
            return [head2].concat(merge(arr1, tails2));
    }
}
exports.mergeSort = mergeSort;
// Helper functions ///////////////////////////////////////////////////////////
function isSorted(array) {
    var sorted = true;
    for (var i = 1; i < array.length; i++) {
        if (array[i - 1] > array[i])
            return false;
    }
    return sorted;
}
exports.isSorted = isSorted;
function swap(array, i, j) {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
    return array;
}
exports.swap = swap;

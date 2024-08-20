/**
 * Sorts an array of numbers using the Bubble Sort algorithm.
 * @param {number[]} arr - The array of numbers to be sorted.
 * @returns {number[]} The sorted array.
 */
export function bubbleSort(arr: number[]): number[] {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

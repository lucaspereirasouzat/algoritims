/**
 * Sorts an array of numbers using the Insertion Sort algorithm.
 * @param {number[]} arr - The array of numbers to be sorted.
 * @returns {number[]} The sorted array.
 */
export function insertionSort(arr: number[]): number[] {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    return arr;
}

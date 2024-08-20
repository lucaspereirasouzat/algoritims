/**
 * Sorts an array of numbers using the Quick Sort algorithm.
 * @param {number[]} arr - The array of numbers to be sorted.
 * @returns {number[]} The sorted array.
 */
export function quickSort(arr: number[]): number[] {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[arr.length - 1];
    const left = arr.filter((el, i) => el <= pivot && i != arr.length - 1);
    const right = arr.filter(el => el > pivot);

    return [...quickSort(left), pivot, ...quickSort(right)];
}

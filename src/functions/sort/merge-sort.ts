/**
 * Sorts an array of numbers using the Merge Sort algorithm.
 * @param {number[]} arr - The array of numbers to be sorted.
 * @returns {number[]} The sorted array.
 */
export function mergeSort(arr: number[]): number[] {
    if (arr.length <= 1) {
        return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

/**
 * Merges two sorted arrays into a single sorted array.
 * @param {number[]} left - The left sorted array.
 * @param {number[]} right - The right sorted array.
 * @returns {number[]} The merged and sorted array.
 */
function merge(left: number[], right: number[]): number[] {
    let result: number[] = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    return result.concat(left.slice(i)).concat(right.slice(j));
}

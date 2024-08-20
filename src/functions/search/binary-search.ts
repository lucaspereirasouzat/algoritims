/**
 * Performs a binary search on a sorted array for a specific target value.
 * @param {number[]} arr - The sorted array of numbers to search.
 * @param {number} target - The target value to search for.
 * @returns {number} The index of the target value if found, or -1 if not found.
 */
export function binarySearch(arr: number[], target: number): number {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;  // Returns -1 if the element is not found
}

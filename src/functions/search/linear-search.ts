/**
 * Performs a linear search on an array for a specific target value.
 * @param {number[]} arr - The array of numbers to search.
 * @param {number} target - The target value to search for.
 * @returns {number} The index of the target value if found, or -1 if not found.
 */
export function linearSearch(arr: number[], target: number): number {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;  // Returns -1 if the element is not found
}

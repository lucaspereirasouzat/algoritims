/**
 * Computes the nth Fibonacci number using dynamic programming to avoid redundant calculations.
 * @param {number} n - The position of the Fibonacci sequence to compute.
 * @param {number[]} [memo=[]] - An array used to store previously computed Fibonacci numbers.
 * @returns {number} The nth Fibonacci number.
 */
export function fibonacci(n: number, memo: number[] = []): number {
    if (n <= 1) return n;
    if (memo[n] !== undefined) return memo[n];

    memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
    return memo[n];
}

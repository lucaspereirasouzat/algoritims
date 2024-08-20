/**
 * Solves the 0/1 Knapsack problem using dynamic programming.
 * @param {number[]} weights - The weights of the items.
 * @param {number[]} values - The values of the items.
 * @param {number} capacity - The maximum capacity of the knapsack.
 * @returns {number} The maximum value that can be obtained within the given capacity.
 */
export function knapsack(weights: number[], values: number[], capacity: number): number {
    const n = weights.length;
    const dp = Array.from({ length: n + 1 }, () => Array(capacity + 1).fill(0));

    for (let i = 1; i <= n; i++) {
        for (let w = 0; w <= capacity; w++) {
            if (weights[i - 1] <= w) {
                dp[i][w] = Math.max(dp[i - 1][w], values[i - 1] + dp[i - 1][w - weights[i - 1]]);
            } else {
                dp[i][w] = dp[i - 1][w];
            }
        }
    }

    return dp[n][capacity];
}

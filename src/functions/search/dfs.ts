/**
 * Performs a depth-first search (DFS) on a graph starting from a given node.
 * @param {number[][]} graph - The graph represented as an adjacency list.
 * @param {number} start - The starting node index.
 * @param {boolean[]} visited - An array indicating which nodes have been visited.
 * @returns {number[]} The order of nodes visited in the DFS traversal.
 */
export function dfs(graph: number[][], start: number, visited: boolean[] = []): number[] {
    visited[start] = true;
    const result = [start];

    for (const neighbor of graph[start]) {
        if (!visited[neighbor]) {
            result.push(...dfs(graph, neighbor, visited));
        }
    }

    return result;
}

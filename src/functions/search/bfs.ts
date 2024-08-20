/**
 * Performs a breadth-first search (BFS) on a graph starting from a given node.
 * @param {number[][]} graph - The graph represented as an adjacency list.
 * @param {number} start - The starting node index.
 * @returns {number[]} The order of nodes visited in the BFS traversal.
 */
export function bfs(graph: number[][], start: number): number[] {
    const visited = Array(graph.length).fill(false);
    const queue: number[] = [];
    const result: number[] = [];

    queue.push(start);
    visited[start] = true;

    while (queue.length > 0) {
        const node = queue.shift()!;
        result.push(node);

        for (const neighbor of graph[node]) {
            if (!visited[neighbor]) {
                queue.push(neighbor);
                visited[neighbor] = true;
            }
        }
    }

    return result;
}

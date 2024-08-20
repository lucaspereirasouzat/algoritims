/**
 * Implements Dijkstra's algorithm to find the shortest path from a start node to all other nodes in a weighted graph.
 * @param {Record<string,any>[][]} graph - The graph represented as an adjacency list where each node has a list of edges.
 * @param {number} start - The starting node index.
 * @returns {number[]} The array of shortest distances from the start node to each other node.
 */
export function dijkstra(graph: Record<string,any>[][], start: number): number[] {
    const distances = Array(graph.length).fill(Infinity);
    const visited = Array(graph.length).fill(false);
    distances[start] = 0;

    for (let i = 0; i < graph.length; i++) {
        const u = minDistance(distances, visited);
        visited[u] = true;

        for (const neighbor of graph[u]) {
            const { node, weight } = neighbor;
            if (!visited[node] && distances[u] + weight < distances[node]) {
                distances[node] = distances[u] + weight;
            }
        }
    }

    return distances;
}

/**
 * Finds the node with the minimum distance value from the set of nodes that have not been visited yet.
 * @param {number[]} distances - The array of distances from the start node.
 * @param {boolean[]} visited - The array indicating whether a node has been visited.
 * @returns {number} The index of the node with the minimum distance.
 */
function minDistance(distances: number[], visited: boolean[]): number {
    let min = Infinity;
    let minIndex = -1;

    for (let i = 0; i < distances.length; i++) {
        if (!visited[i] && distances[i] < min) {
            min = distances[i];
            minIndex = i;
        }
    }

    return minIndex;
}


type Edge = Record<string, number>;
/**
 * Implements Kruskal's algorithm to find the Minimum Spanning Tree (MST) of a graph.
 * @param {number} n - The number of vertices in the graph.
 * @param {Edge[]} edges - The edges of the graph represented by an array of { src, dest, weight }.
 * @returns {number} The total weight of the MST.
 */
export function kruskal(n: number, edges: Edge[]): number {
    edges.sort((a, b) => a.weight - b.weight);

    const parent: number[] = [];
    const rank: number[] = [];

    for (let i = 0; i < n; i++) {
        parent[i] = i;
        rank[i] = 0;
    }

    let mstWeight = 0;

    for (const { src, dest, weight } of edges) {
        const rootSrc = find(parent, src);
        const rootDest = find(parent, dest);

        if (rootSrc !== rootDest) {
            mstWeight += weight;
            union(parent, rank, rootSrc, rootDest);
        }
    }

    return mstWeight;
}

/**
 * Finds the root of the set that a given element belongs to, using path compression.
 * @param {number[]} parent - The array representing the parent of each element.
 * @param {number} i - The element whose root is to be found.
 * @returns {number} The root of the set containing the element.
 */
function find(parent: number[], i: number): number {
    if (parent[i] === i) return i;
    return find(parent, parent[i]);
}

/**
 * Unites two sets by rank, attaching the root of one set to the root of the other.
 * @param {number[]} parent - The array representing the parent of each element.
 * @param {number[]} rank - The rank array used to keep the tree flat.
 * @param {number} x - The first set to be united.
 * @param {number} y - The second set to be united.
 */
function union(parent: number[], rank: number[], x: number, y: number): void {
    const rootX = find(parent, x);
    const rootY = find(parent, y);

    if (rank[rootX] < rank[rootY]) {
        parent[rootX] = rootY;
    } else if (rank[rootX] > rank[rootY]) {
        parent[rootY] = rootX;
    } else {
        parent[rootY] = rootX;
        rank[rootX]++;
    }
}

import Graph from "./Graph.js";

export default function createChessBoardMatrix() {
  const chessBoardGraph = new Graph(64);

  // Add the edges
  for (let i = 0; i < chessBoardGraph.matrix.length; i += 1) {
    if (i === 0 || i === 7 || i === 56 || i === 63) {
      if (i === 0) {
        chessBoardGraph.addEdge(i, i + 1);
        chessBoardGraph.addEdge(i, i + 8);
        chessBoardGraph.updateVertices(i, i + 1);
        chessBoardGraph.updateVertices(i, i + 8);
      }
      if (i === 7) {
        chessBoardGraph.addEdge(i, i - 1);
        chessBoardGraph.addEdge(i, i + 8);
        chessBoardGraph.updateVertices(i, i - 1);
        chessBoardGraph.updateVertices(i, i + 8);
      }
      if (i === 56) {
        chessBoardGraph.addEdge(i, i - 8);
        chessBoardGraph.addEdge(i, i + 1);
        chessBoardGraph.updateVertices(i, i - 8);
        chessBoardGraph.updateVertices(i, i + 1);
      }
      if (i === 63) {
        chessBoardGraph.addEdge(i, i - 1);
        chessBoardGraph.addEdge(i, i - 8);
        chessBoardGraph.updateVertices(i, i - 1);
        chessBoardGraph.updateVertices(i, i - 8);
      }
    } else if (i % 8 === 0) {
      chessBoardGraph.addEdge(i, i - 8);
      chessBoardGraph.addEdge(i, i + 8);
      chessBoardGraph.addEdge(i, i + 1);
      chessBoardGraph.updateVertices(i, i - 8);
      chessBoardGraph.updateVertices(i, i + 8);
      chessBoardGraph.updateVertices(i, i + 1);
    } else if ((i + 1) % 8 === 0) {
      chessBoardGraph.addEdge(i, i - 1);
      chessBoardGraph.addEdge(i, i - 8);
      chessBoardGraph.addEdge(i, i + 8);
      chessBoardGraph.updateVertices(i, i - 1);
      chessBoardGraph.updateVertices(i, i - 8);
      chessBoardGraph.updateVertices(i, i + 8);
    } else if (i > 0 && i < 7) {
      chessBoardGraph.addEdge(i, i - 1);
      chessBoardGraph.addEdge(i, i + 1);
      chessBoardGraph.addEdge(i, i + 8);
      chessBoardGraph.updateVertices(i, i - 1);
      chessBoardGraph.updateVertices(i, i + 1);
      chessBoardGraph.updateVertices(i, i + 8);
    } else if (i > 56 && i < 63) {
      chessBoardGraph.addEdge(i, i - 1);
      chessBoardGraph.addEdge(i, i + 1);
      chessBoardGraph.addEdge(i, i - 8);
      chessBoardGraph.updateVertices(i, i - 1);
      chessBoardGraph.updateVertices(i, i + 1);
      chessBoardGraph.updateVertices(i, i - 8);
    } else {
      chessBoardGraph.addEdge(i, i - 8);
      chessBoardGraph.addEdge(i, i + 8);
      chessBoardGraph.addEdge(i, i - 1);
      chessBoardGraph.addEdge(i, i + 1);
      chessBoardGraph.updateVertices(i, i - 8);
      chessBoardGraph.updateVertices(i, i + 8);
      chessBoardGraph.updateVertices(i, i - 1);
      chessBoardGraph.updateVertices(i, i + 1);
    }
  }

  return chessBoardGraph;
}

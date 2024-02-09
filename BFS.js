function convertXYToNum(xy) {
  const num = (xy[1] * 8) + xy[0];

  return num;
}

function convertNumToXY(num) {
  const x = num % 8;
  const y = (num - x) / 8;

  return [x, y];
}

function printPath(predecessorArray, dest) {
  const path = [];
  let i = dest;

  path.push(i);

  while (predecessorArray[i] !== undefined) {
    path.push(predecessorArray[i]);
    i = predecessorArray[i];
  }

  for (let n = 0; n < path.length; n += 1) {
    path[n] = convertNumToXY(path[n]);
  }

  return path;
}

function BFS(graph, src, dest) {
  const queue = [];
  const visited = new Array(graph.numOfVertices).fill(0);
  const predecessor = new Array(graph.numOfVertices);
  const { adjList } = graph;

  visited[src] = 1;
  queue.push(src);

  while (queue.length !== 0) {
    const v = queue.shift();

    for (let i = 0; i < adjList[v].length; i += 1) {
      if (visited[adjList[v][i]] !== 1) {
        predecessor[adjList[v][i]] = v;
        visited[adjList[v][i]] = 1;
        queue.push(adjList[v][i]);

        if (adjList[v][i] === dest) {
          return predecessor;
        }
      }
    }
  }

  return null;
}

export default function findShortestPath(graph, source, destination) {
  const srcVertex = convertXYToNum(source);
  const destVertex = convertXYToNum(destination);

  const result = BFS(graph, srcVertex, destVertex);

  if (result === null) {
    return null;
  }

  const path = printPath(result, destVertex);

  return path;
}

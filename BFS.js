function convertXYToNum(xy) {
  const num = (xy[1] * 8) + xy[0];

  return num;
}

function convertNumToXY(num) {
  const x = num % 8;
  const y = (num - x) / 8;

  return [x, y];
}

function possibleMoves(vertex) {
  const moves = [];

  // 2 North, 1 West; 1 West, 2 North
  if (vertex > 16 && vertex % 8 !== 0) {
    moves.push(vertex - 17);
  }

  // 2 North, 1 East; 1 East, 2 North
  if ((vertex > 15 && vertex % 8 !== 7)) {
    moves.push(vertex - 15);
  }

  // 1 North, 2 West; 2 West, 1 North
  if (vertex > 9 && vertex % 8 > 1) {
    moves.push(vertex - 10);
  }

  // 1 North, 2 East; 2 East, 1 North
  if (vertex > 7 && vertex % 8 < 6) {
    moves.push(vertex - 6);
  }

  // 2 South, 1 West; 1 West, 2 South
  if (vertex < 48 && vertex % 8 !== 0) {
    moves.push(vertex + 15);
  }

  // 2 South, 1 East; 1 East, 2 South
  if (vertex < 47 && vertex % 8 !== 7) {
    moves.push(vertex + 17);
  }

  // 1 South, 2 West; 2 West, 1 South
  if (vertex < 56 && vertex % 8 > 1) {
    moves.push(vertex + 6);
  }

  // 1 South, 2 East; 2 East, 1 South
  if (vertex < 54 && vertex % 8 < 6) {
    moves.push(vertex + 10);
  }

  return moves;
}

function printPath(predecessorArray, dest) {
  const tmpPath = [];
  const finalPath = [];
  let i = dest;

  tmpPath.push(i);

  while (predecessorArray[i] !== undefined) {
    tmpPath.push(predecessorArray[i]);
    i = predecessorArray[i];
  }

  for (let n = 0; n < tmpPath.length; n += 1) {
    tmpPath[n] = convertNumToXY(tmpPath[n]);
  }

  for (let n = tmpPath.length - 1; n >= 0; n -= 1) {
    finalPath.push(tmpPath[n]);
  }

  return finalPath;
}

function BFS(graph, src, dest) {
  const queue = [];
  const visited = new Array(graph.numOfVertices).fill(0);
  const predecessor = new Array(graph.numOfVertices);

  visited[src] = 1;
  queue.push(src);

  while (queue.length !== 0) {
    const v = queue.shift();

    const moves = possibleMoves(v);

    for (let i = 0; i < moves.length; i += 1) {
      const m = moves[i];

      if (visited[m] !== 1) {
        predecessor[m] = v;
        visited[m] = 1;
        queue.push(m);

        if (m === dest) {
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

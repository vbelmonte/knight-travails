import findShortestPath from "./BFS.js";

export default function knightMoves(source, destination) {
  // eg. source = [0,0], destination = [5,8]
  const path = findShortestPath(source, destination);
  return path;
}

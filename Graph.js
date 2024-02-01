class Graph {
  matrix = null;

  constructor(numberOfNodes) {
    for (let i = 0; i < numberOfNodes; i += 1) {
      this.matrix.push(new Array(numberOfNodes).fill(0));
    }
  }

  addEdge(source, destination) {
    this.matrix[source][destination] = 1;
    this.matrix[destination][source] = 1;
  }

  removeEdge(source, destination) {
    this.matrix[source][destination] = 0;
    this.matrix[destination][source] = 0;
  }

  isEdge(source, destination) {
    if (this.matrix[source][destination] === 1) {
      return true;
    }
    return false;
  }
}

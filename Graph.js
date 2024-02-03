import Node from "./Node.js";

export default class Graph {
  matrix = [];

  vertices = [];

  constructor(numberOfNodes) {
    for (let i = 0; i < numberOfNodes; i += 1) {
      this.matrix.push(new Array(numberOfNodes).fill(0));
    }

    for (let i = 0; i < numberOfNodes; i += 1) {
      const node = new Node(i);
      this.vertices.push(node);
    }
  }

  get matrix() {
    return this._matrix;
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

  printGraph() {
    for (let i = 0; i < this.matrix.length; i += 1) {
      console.log(this.matrix[i]);
    }
  }

  updateVertices(source, destination) {
    if ((destination - source) === 1) {
      this.vertices[source].rightNode = this.vertices[destination];
      this.vertices[destination].leftNode = this.vertices[source];
    } else if (Math.abs(destination - source) === 1) {
      this.vertices[source].leftNode = this.vertices[destination];
      this.vertices[destination].rightNode = this.vertices[source];
    } else if ((destination - source) === 8) {
      this.vertices[source].bottomNode = this.vertices[destination];
      this.vertices[destination].topNode = this.vertices[source];
    } else if (Math.abs(destination - source) === 8) {
      this.vertices[source].topNode = this.vertices[destination];
      this.vertices[destination].bottomNode = this.vertices[source];
    }
  }

  getVertex(vertex) {
    return this.vertices[vertex];
  }
}

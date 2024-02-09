export default class Graph {
  adjList = null;

  numOfVertices = null;

  constructor(numberOfVertices) {
    this.adjList = new Array(numberOfVertices).fill([]);
    this.numOfVertices = numberOfVertices;

    for (let i = 0; i < numberOfVertices; i += 1) {
      this.adjList[i] = [];
    }
  }

  get adjList() {
    return this._adjList;
  }

  get numOfVertices() {
    return this._numOfVertices;
  }

  addEdge(source, destination) {
    this.adjList[source].push(destination);
    /* this.adjList[destination].push(source); */
  }

  printGraph() {
    for (let i = 0; i < this.adjList.length; i += 1) {
      console.log(this.adjList[i]);
    }
  }
}

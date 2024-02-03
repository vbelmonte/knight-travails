export default class Node {
  data = null;

  topNode = null;

  bottomNode = null;

  leftNode = null;

  rightNode = null;

  constructor(data, topNode, bottomNode, leftNode, rightNode) {
    this.data = data;
    if (topNode !== undefined) {
      this.topNode = topNode;
    }
    if (bottomNode !== undefined) {
      this.bottomNode = bottomNode;
    }
    if (leftNode !== undefined) {
      this.leftNode = leftNode;
    }
    if (rightNode !== undefined) {
      this.rightNode = rightNode;
    }
  }

  set data(value) {
    this._data = value;
  }

  get data() {
    return this._data;
  }

  set topNode(value) {
    this._topNode = value;
  }

  get topNode() {
    return this._topNode;
  }

  set bottomNode(value) {
    this._bottomNode = value;
  }

  get bottomNode() {
    return this._bottomNode;
  }

  set leftNode(value) {
    this._leftNode = value;
  }

  get leftNode() {
    return this._leftNode;
  }

  set rightNode(value) {
    this._rightNode = value;
  }

  get rightNode() {
    return this._rightNode;
  }
}

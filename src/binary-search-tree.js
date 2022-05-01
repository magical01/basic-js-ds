const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree{
  constructor() {
    this.rootElem = null;
  }
  root() {
    return this.rootElem;
  }

  add(data) {
    let node = new Node(data);
    if (!this.rootElem) {
      this.rootElem = node;
      return;
    }

    let currentNode = this.rootElem

    while (currentNode) {
      if (node.data < currentNode.data) {
        if (!currentNode.left) {
          currentNode.left = node;
          return;
        }
        currentNode = currentNode.left;
      } else {
        if (!currentNode.rigth) {
          currentNode.rigth = node;
          return;
        }
        currentNode = currentNode.rigth;
      }
    }
  }

  has(data) {
    return this.find(data) != null;
  }

  find(data) {
    let currentNode = this.rootElem;

    while (currentNode) {
      if (data < currentNode.data) {
        currentNode = currentNode.left;
      } else if (data > currentNode.data) {
        currentNode = currentNode.right;
      } else {
        return currentNode;
      }
    }
    return null;
  }

  remove(data) {
    
    function removeNodeData(node, data) {
      if(!node) {
        return null;
      } else if (data === node.data) {
        if (!node.right && !node.left ) { 
          return null;
        } 
        if (!node.right){
          return node.left;
        };
        if (!node.left) {
          return node.right;
        };
        

        let cur = node.right;

        while(cur.left){
          cur = cur.left;
        }
        node.data = cur.data;
        node.right = removeNodeData(node.right, cur.data);
        return node;
      } else if (data > node.data) {
        node.right = removeNodeData(node.right, data);
        return node;
      } else {
        node.left = removeNodeData(node.left, data);
        return node;
      }
    }

    removeNodeData(this.rootElem, data);
  }

  min() {
    if (!this.rootElem) {
      return null;
    }

    let min = this.rootElem;

    while (min.left) {
      min = min.left;
    }
    return min.data;
  }

  max() {
    if (!this.rootElem) {
      return null;
    }

    let max = this.rootElem;

    while (max.right) {
      max = max.right;
    }
    return max.data;
  }
}

module.exports = {
  BinarySearchTree
};
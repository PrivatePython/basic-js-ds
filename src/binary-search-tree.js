const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');
const {removeKFromList} = require("./remove-from-list");

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootElement = null;
  }

  root() {
    return this.rootElement
  }

  add(data) {
    let newNode = new Node(data);
    if (!this.rootElement) {
      this.rootElement = newNode;
    } else {
      const addNode = function (node, newNodeElement) {
        if (newNodeElement.data > node.data) {
          if (node.right === null) {
            node.right = newNodeElement;
          } else {
            addNode(node.right, newNodeElement);
          }
        } else {
          if (node.left === null) {
            node.left = newNodeElement;
          } else {
            addNode(node.left, newNodeElement);
          }
        }
      }
      addNode(this.rootElement, newNode);
    }
  }

  has(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  find(data) {

    const searchNode = function (node, value) {
      if (!node || !value) return null;

      if (value < node.data) {
        return searchNode(node.left, value);
      }else if (value > node.data) {
        return searchNode(node.right, value);
      }

      return node;
    };
    return searchNode(this.rootElement, data)
  }

  remove(data) {
    const removeNode = function (node, value) {
      if (!node) return null;
      if (value < node.data) {
        node.left = removeNode(node.left, value);
      } else if (value > node.data) {
        node.right = removeNode(node.right, value);
      }else {
        if (!node.left && !node.right) {
          node = null;
        }
        if (!node.left) {
          node = node.right;
        }else if (!node.right) {
          node = node.left;
        }
      }
    }
    this.rootElement = removeNode(this.rootElement, data);
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};
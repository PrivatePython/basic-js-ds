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
        if (newNodeElement.data < node.data) {
          if (node.left === null) {
            node.left = newNodeElement;
          } else {
            addNode(node.left, newNodeElement);
          }
        } else {
          if (node.right === null) {
            node.right = newNodeElement;
          } else {
            addNode(node.right, newNodeElement);
          }
        }
      }

      addNode(this.rootElement, newNode);
    }
  }

  has(data) {
    return Boolean(this.find(data))
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
    const removeNode = (node, value) => {
      if (!node) return null;
      if (value < node.data) {
        node.left = removeNode(node.left, value);
      } else if (value > node.data) {
        node.right = removeNode(node.right, value);
      } else {
        if (!node.left && !node.right) {
          node = null;
        }
        else if (!node.left) {
          node = node.right;
        } else if (!node.right) {
          node = node.left;
        }
        else {
          function getSmallest(current) {
            while(current.left !== null) {
              current = current.left;
            }
            return current;
          }

          let tmpNode = getSmallest(node.right);
          node.data = tmpNode.data;

          node.right = removeNode(node.right, tmpNode.data)
        }
      }
      return node;
    }
    this.rootElement = removeNode(this.rootElement, data);
  }

  min() {
    const findMin = function (node) {
      if(!node) return null;
      if (!node.left) {
        return node;
      } else {
        return findMin(node.left);
      }
    }
    return findMin(this.rootElement).data
  }

  max() {
    const findMax = function (node) {
      if(!node) return null;
      if (!node.right) {
        return node;
      } else {
        return findMax(node.right);
      }
    }
    return findMax(this.rootElement).data
  }
}

module.exports = {
  BinarySearchTree
};
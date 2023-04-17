const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */

class BinarySearchTree {
  constructor() {
    this.rootMap = null;
  }
  root() {
    return this.rootMap;
  }

  add(data) {
    const addNode = (node, data) => {
      if (!node) return new Node(data);
      else if (node.data === data) return node;
      else if (data < node.data) node.left = addNode(node.left, data);
      else node.right = addNode(node.right, data);

      return node;
    };
    this.rootMap = addNode(this.rootMap, data);
  }

  has(data) {
    const hasNode = (node, data) => {
      if (!node) return false;
      else if (data == node.data) return true;
      else if (data < node.data) return hasNode(node.left, data);
      else return hasNode(node.right, data);
      // else if (data > node.data) return hasNode(node.right, data);
    };
    return hasNode(this.rootMap, data);
  }

  find(data) {
    const findNode = (node, data) => {
      if (!node) return null;
      else if (node.data == data) return node;

      if (node.data > data) return findNode(node.left, data);
      else return findNode(node.right, data);
    };
    return findNode(this.rootMap, data);
  }

  remove(data) {
    const removeNode = (node, data) => {
      if (!node) return null;
      else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) return null;
        else if (!node.left) {
          node = node.right;
          return node;
        } else if (!node.right) {
          node = node.left;
          return node;
        } else {
          let less = node.right;
          while (less.left) {
            less = less.left;
          }
          node.data = less.data;
          node.right = removeNode(node.right, less.data);
          return node;
        }
      }
    };
    this.rootMap = removeNode(this.rootMap, data);
  }

  min() {
    if (!this.rootMap) return null;
    else {
      let node = this.rootMap;
      while (node.left) {
        node = node.left;
      }
      return node.data;
    }
  }

  max() {
    if (!this.rootMap) return null;
    else {
      let node = this.rootMap;
      while (node.right) {
        node = node.right;
      }
      return node.data;
    }
  }
}

module.exports = {
  BinarySearchTree,
};

class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (value < currentNode.value) {
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }

  lookup(value) {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    while (currentNode) {
      if (currentNode.value > value) {
        currentNode = currentNode.left;
      } else if (currentNode.right > value) {
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        return currentNode;
      }
    }
    return false;
  }

  remove(value) {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    let tmp_parent = null;
    while (currentNode) {
      if (value < currentNode.left) {
        tmp_parent = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.right) {
        tmp_parent = currentNode;
        currentNode = currentNode.right;
      } else if (value === currentNode.value) {
        // 3 Condition
        if (currentNode.right === null) {
          if (tmp_parent === null) {
            this.root = currentNode.left;
          } else {
            if (currentNode.value < tmp_parent.value) {
              tmp_parent.left = currentNode.left;
            } else if (currentNode.value > tmp_parent.value) {
              tmp_parent.right = currentNode.left;
            }
          }
        } else if (currentNode.left === null) {
          if (tmp_parent === null) {
            this.root = currentNode.left;
          } else {
            currentNode.right.left = currentNode.left;
            if (currentNode.value < tmp_parent.value) {
              tmp_parent.left = currentNode.right;
            } else if (currentNode.value > tmp_parent.value) {
              tmp_parent.right = currentNode.right;
            }
          }
        } else {
          let leftmost = currentNode.right.left;
          let leftmostParent = currentNode.right;
          while (leftmost.left !== null) {
            leftmostParent = leftmost;
            leftmost = leftmost.left;
          }
          leftmostParent.left = leftmost.right;
          leftmost.left = currentNode.left;
          leftmost.right = currentNode.right;

          if (tmp_parent === null) {
            this.root = leftmost;
          } else {
            if (currentNode.value < tmp_parent.value) {
              tmp_parent.left = leftmost;
            } else if (currentNode.value > tmp_parent.value) {
              tmp_parent.right = leftmost;
            }
          }
        }
        return true;
      }
    }
  }
}
const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(10);
tree.insert(4);
tree.insert(12);
tree.insert(13);
tree.insert(20);
console.log(tree.lookup(4));

JSON.stringify(traverse(tree.root));

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}

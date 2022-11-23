/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    if (!this.root) return 0;
    let sum = 0;
    const toAdd = [this.root];
    while (toAdd.length > 0) {
      let nodeToAdd = toAdd.pop();
      sum += nodeToAdd.val;
      for (let child of nodeToAdd.children) {
        toAdd.push(child);
      }
    }

    return sum;

  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if (!this.root) return 0;
    let count = 0;
    let toCheck = [this.root];
    while (toCheck.length > 0) {
      let nodeToCheck = toCheck.pop();
      if (nodeToCheck.val % 2 === 0) count++;
      for (let child of nodeToCheck.children) {
        toCheck.push(child);
      }
    }

    return count;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if (!this.root) return 0;
    let count = 0;
    let toCheck = [this.root];
    while (toCheck.length > 0) {
      let nodeToCheck = toCheck.pop();
      if (nodeToCheck.val > lowerBound) count++;
      for (let child of nodeToCheck.children) {
        toCheck.push(child);
      }
    }

    return count;
  }
}

module.exports = { Tree, TreeNode };

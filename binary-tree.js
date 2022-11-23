/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {

    const checkArr = [];
    if (this.root) {
      checkArr.push({
        node: this.root,
        depth: 1
      });
    } else return 0;

    while (checkArr.length > 0) {

      let nodeToCheck = checkArr.pop();
      if (nodeToCheck.node.left === null && nodeToCheck.node.right === null) {
        return nodeToCheck.depth;
      } else {
        for (let nextNode of [nodeToCheck.node.left, nodeToCheck.node.right]) {
          if (nextNode) {
            checkArr.unshift({
              node: nextNode,
              depth: nodeToCheck.depth+1
            })
          }
        }
      }
    }
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    const checkArr = [];
    let depth = 0;
    if (this.root) {
      checkArr.push({
        node: this.root,
        depth: 1
      });
    } else return 0;

    while (checkArr.length > 0) {

      let nodeToCheck = checkArr.pop();
      if (nodeToCheck.node.left === null && nodeToCheck.node.right === null) {
        depth = Math.max(depth, nodeToCheck.depth);
      } else {
        for (let nextNode of [nodeToCheck.node.left, nodeToCheck.node.right]) {
          if (nextNode) {
            checkArr.unshift({
              node: nextNode,
              depth: nodeToCheck.depth+1
            })
          }
        }
      }
    }
    return depth;
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {

    function choice(node) {
      if (!node) return 0;
      return Math.max(node.val, node.val + choice(node.left), node.val + choice(node.right))
    }

    function joint(node) {
      if (!node) return 0;
      return Math.max(node.val + choice(node.left) + choice(node.right), joint(node.left), joint(node.right));
    }

    return joint(this.root);

  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    const vals = [];

    function populateVals(node) {
      if (!node) return;
      vals.push(node.val);
      if (node.left) populateVals(node.left);
      if (node.right) populateVals(node.right);
    }

    populateVals(this.root);

    return vals.filter(v => v > lowerBound).sort((a,b) => a-b)[0] || null;
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

    
  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {
    
  }
}

module.exports = { BinaryTree, BinaryTreeNode };

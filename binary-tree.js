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
    if (!this.root) return 0

    function helper(node) {
      if(!node) return Infinity;
      if (!node.left && !node.right) return 1; 

      return Math.min(helper(node.left), helper(node.right)) + 1;
    }

    return helper(this.root); 
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    if (!this.root) return 0

    function helper(node) {
      if(!node) return 0;
      return Math.max(helper(node.left), helper(node.right)) + 1;
    }

    return helper(this.root); 
  }
  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    let result = 0; 

    function helper(node) {
      if (!node) return 0; 

      let leftSum = Math.max(0, helper(node.left)); 
      let rightSum = Math.max(0, helper(node.right));
      result = Math.max(result, node.val + leftSum + rightSum); 

      return node.val + Math.max(leftSum, rightSum);

    }
    helper(this.root);
    return result; 
  };

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    if(!this.root) return null;

    let nextLargerVal = null; 
    let stack = [this.root];

    while (stack.length) {
      let current = stack.pop();

      if (current.val > lowerBound && (nextLargerVal === null || current.val < nextLargerVal)) {
        nextLargerVal = current.val;
      }

      if (current.left) stack.push(current.left); 
      if (current.right) stack.push(current.right);
    }
    return nextLargerVal;

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

/**
 * Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.

A leaf is a node with no children.

Input: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
Output: true
Explanation: The root-to-leaf path with the target sum is shown.

Input: root = [], targetSum = 0
Output: false
Explanation: Since the tree is empty, there are no root-to-leaf paths.

 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 *
 We can use a simple recursive approach and leverage DFS to traverse a binary tree.

This algorithm is quite efficient because it doesn't need to enumerate all possible paths but instead calculates the path sum during traversal. Once it finds a path that matches the target sum, it can return immediately.
 */


/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    if (root === null) return false;

    //minue value of curr node
    targetSum -= root.val;

    //check if youre at a leaf node
    if (root.left === null && root.right === null) return targetSum === 0;

    return hasPathSum(root.left, targetSum) || hasPathSum(root.right, targetSum);
};

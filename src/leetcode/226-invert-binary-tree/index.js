/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
  // 递归终止条件
  if (root == null) {
    return null;
  }

  let left = root.left;
  let right = root.right;
  invertTree(left);
  invertTree(right);
  root.left = right;
  root.right = left;
  return root;
};

export default invertTree;

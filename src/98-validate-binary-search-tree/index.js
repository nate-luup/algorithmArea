import { inorderTraversal } from "../data-structure";

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
 * @return {boolean}
 */
var isValidBST = function (root) {
  let arr = inorderTraversal(root);
  let pre = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= pre) {
      return false;
    }
    pre = arr[i];
  }
  return true;
};
export default isValidBST;

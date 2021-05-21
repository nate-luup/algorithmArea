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
 * @return {number[]}
 */
var inorderTraversal1 = function (root, arr = []) {
  if (root) {
    // 中序遍历： 左子树 -> 根节点 -> 右子树
    inorderTraversal(root.left, arr);
    arr.push(root.val);
    inorderTraversal(root.right, arr);
  }
  return arr;
};

var inorderTraversal = function (root) {
  let result = [];
  let stack = [];
  let cur = root;

  while (cur || stack.length > 0) {
    while (cur) {
      stack.push(cur);
      cur = cur.left;
    }
    cur = stack.pop();
    result.push(cur.val);
    cur = cur.right;
  }
  return result;
};

export default inorderTraversal;

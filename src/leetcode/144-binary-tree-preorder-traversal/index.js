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
// 递归
var preorderTraversal1 = function (root, arr = []) {
  if (root) {
    // 前序遍历： 根节点 -> 左子树 -> 右子树
    arr.push(root.val);
    preorderTraversal(root.left, arr);
    preorderTraversal(root.right, arr);
  }
  return arr;
};

// 迭代
var preorderTraversal = function (root) {
  // 有一个stack存储
  //  1. 开始遍历，根节点入栈
  // left 入栈，直到left为空，节点出栈
  // right 为目标

  let result = [];
  let stack = [];
  let cur = root;
  while (cur || stack.length > 0) {
    while (cur) {
      result.push(cur.val);
      stack.push(cur);
      cur = cur.left;
    }
    cur = stack.pop();
    cur = cur.right;
  }
  return result;
};

export default preorderTraversal;

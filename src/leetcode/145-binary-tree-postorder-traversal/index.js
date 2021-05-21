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
var postorderTraversal1 = function (root, arr = []) {
  if (root) {
    // 后序遍历: 左子树 -> 右子树 -> 根节点
    postorderTraversal(root.left, arr);
    postorderTraversal(root.right, arr);

    arr.push(root.val);
  }
  return arr;
};

var postorderTraversal = function (root) {
  let result = [];
  let stack = [];
  let cur = root;
  let last = null; // 标记上一个访问的节点

  while (cur || stack.length > 0) {
    while (cur) {
      stack.push(cur);
      cur = cur.left;
    }
    cur = stack[stack.length - 1];
    // console.log(cur);
    if (!cur.right || cur.right == last) {
      cur = stack.pop();
      result.push(cur.val);
      last = cur;
      cur = null; // 继续弹栈
    } else {
      cur = cur.right;
    }
  }
  return result;
};

export default postorderTraversal;

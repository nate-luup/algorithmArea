function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

function preorderTraversal(root, arr = []) {
  if (root) {
    // 前序遍历： 根节点 -> 左子树 -> 右子树
    arr.push(root.val);
    preorderTraversal(root.left, arr);
    preorderTraversal(root.right, arr);
  }
  return arr;
}
var inorderTraversal = function (root, arr = []) {
  if (root) {
    // 中序遍历： 左子树 -> 根节点 -> 右子树
    inorderTraversal(root.left, arr);
    arr.push(root.val);
    inorderTraversal(root.right, arr);
  }
  return arr;
};
var postorderTraversal = function (root, arr = []) {
  if (root) {
    // 后序遍历: 左子树 -> 右子树 -> 根节点
    postorderTraversal(root.left, arr);
    postorderTraversal(root.right, arr);

    arr.push(root.val);
  }
  return arr;
};
function tree2Str(root) {
  let ret = preorderTraversal(root);
  return ret.join("=>");
}

export {
  TreeNode,
  tree2Str,
  preorderTraversal,
  inorderTraversal,
  postorderTraversal,
};

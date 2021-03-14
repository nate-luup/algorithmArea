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

function tree2Str(root) {
  let ret = preorderTraversal(root);
  return ret.join("=>");
}

export { TreeNode, tree2Str };

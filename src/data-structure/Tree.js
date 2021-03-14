function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
function tree2Str(root) {
  if (root == null) {
    return "";
  }

  let { left, right, val } = root;

  return val + tree2Str(left) + "" + tree2Str(right);
}
export { TreeNode, tree2Str };

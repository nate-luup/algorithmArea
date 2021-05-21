/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  // 如果左子树没有找到p或q，则去右边找
  // 如果右子树没有找到p或q，则去左边找
  // 如果两边都找到了，返回root

  // find p or q
  if (root == null || root == p || root == q) {
    return root;
  }

  let left = lowestCommonAncestor(root.left, p, q);
  let right = lowestCommonAncestor(root.right, p, q);

  if (left == null) {
    return right;
  }
  if (right == null) {
    return left;
  }
  // 左右都找到了
  return root;
};

export default lowestCommonAncestor;

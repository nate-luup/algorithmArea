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
var lowestCommonAncestor1 = function (root, p, q) {
  // 二叉搜索树的特点是节点左侧的值都小于节点值，右侧都大于节点值
  // 如果树节点值位于p和q两节点值中间或与某个节点相等
  // 否则如果树节点值大于两节点值，则两节点位于树节点的右侧
  // 同理如果树节点值小于两节点值，则两节点都位于树节点的左侧
  if (p.val > root.val && q.val > root.val) {
    lowestCommonAncestor(root.right, p, q);
  } else if (p.val < root.val && q.val < root.val) {
    lowestCommonAncestor(root.left, p, q);
  } else {
    // 一个比root大，一个比root小
    return root;
  }
};

var lowestCommonAncestor = function (root, p, q) {
  // 二叉搜索树可以通过大小来判定
  // 如果树节点值位于p和q两节点值中间或与某个节点相等
  // 否则如果树节点值大于两节点值，则两节点位于树节点的右侧
  // 同理如果树节点值小于两节点值，则两节点都位于树节点的左侧
  while (root) {
    // console.log(p.val, root.val, q.val);
    if (p.val > root.val && q.val > root.val) {
      root = root.right;
    } else if (p.val < root.val && q.val < root.val) {
      root = root.left;
    } else {
      return root;
    }
  }
};

export default lowestCommonAncestor;

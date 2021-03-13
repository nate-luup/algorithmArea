/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let cur = head;
  let pre = null;
  while (cur) {
    // 缓存下一个节点
    let next = cur.next;
    // 修改当前节点的下一个节点指向
    cur.next = pre;
    // 移动前一个节点，到当前节点
    pre = cur;
    // 移动当前节点，到下一个节点
    cur = next;
  }
  return pre;
};

export default reverseList;

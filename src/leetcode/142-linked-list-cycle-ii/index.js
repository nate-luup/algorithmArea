/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle1 = function (head) {
  let cache = new Set();
  while (head) {
    if (cache.has(head)) {
      return head;
    } else {
      cache.add(head);
      head = head.next;
    }
  }
  return null;
};

var detectCycle = function (head) {
  // 操场跑圈，只要是个圈，跑的快的一定会再次遇到跑的慢的
  let slow = head;
  let fast = head;
  let start = head;

  // fast.next 为空说明没有环
  while (fast && fast.next) {
    fast = fast.next.next; // 每次跑两步
    slow = slow.next; // 每次跑一步
    // 追上了说明有环
    if (fast == slow) {
      // 寻找入口
      while (true) {
        if (slow === start) {
          return slow;
        }
        slow = slow.next;
        start = start.next;
      }
    }
  }
  return null;
};

export default detectCycle;

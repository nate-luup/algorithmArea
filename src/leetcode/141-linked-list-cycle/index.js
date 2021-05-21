/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

var hasCycle1 = function (head) {
  let cache = new Set();
  while (head) {
    if (cache.has(head)) {
      return true;
    } else {
      cache.add(head);
      head = head.next;
    }
  }
  return false;
};

var hasCycle2 = function (head) {
  if (!head) {
    return false;
  }
  let slow = head.next ? head.next : null;
  let fast = head.next ? head.next.next : null;
  let exitCycle = false;
  while (fast && slow) {
    if (fast == slow) {
      exitCycle = true;
      break;
    }
    slow = slow.next;
    fast = fast.next ? fast.next.next : null;
  }
  return exitCycle;
};

var hasCycle = function (head) {
  // 操场跑圈，只要是个圈，跑的快的一定会再次遇到跑的慢的
  let slow = head;
  let fast = head;

  // fast.next 为空说明没有环
  while (fast && fast.next) {
    fast = fast.next.next; // 每次跑两步
    slow = slow.next; // 每次跑一步
    if (fast == slow) {
      // 追上了说明有环
      return true;
    }
  }
  return false;
};

export default hasCycle;

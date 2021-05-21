/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */

var removeElements1 = function (head, val) {
  let cur = head;
  let h = null;
  let pre = null;
  let next;
  if (cur == null) {
    return null;
  }
  while (cur) {
    next = cur.next;
    if (cur.val == val) {
      if (pre) {
        pre.next = next;
      }
      cur.next = null;
    } else {
      pre = cur;
      if (!h) {
        h = cur;
      }
    }
    cur = next;
  }
  return h;
};

var removeElements2 = function (head, val) {
  let fakeNode = {
    next: head,
  };
  let cur = fakeNode;
  let pre;
  while (cur) {
    let next = cur.next;
    if (cur.val == val) {
      pre.next = next;
    } else {
      pre = cur;
      cur = next;
    }
  }
  return fakeNode.next;
};

var removeElements = function (head, val) {
  // 是不是队首
  // 引入哨兵元素
  let fakeNode = {
    next: head,
  };
  let cur = fakeNode;
  while (cur.next) {
    if (cur.next.val == val) {
      cur.next = cur.next.next;
    } else {
      cur = cur.next;
    }
  }
  return fakeNode.next;
};

export default removeElements;

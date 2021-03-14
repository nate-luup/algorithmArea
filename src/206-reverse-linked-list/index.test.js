import { ListNode, print } from "../data-structure";

import reverseList from "./index";

test("reverseList", () => {
  let node1 = new ListNode(1);
  let node2 = new ListNode(2);
  let node3 = new ListNode(3);
  let node4 = new ListNode(4);
  let node5 = new ListNode(5);

  node1.next = node2;
  node2.next = node3;
  node3.next = node4;
  node4.next = node5;

  let ret = reverseList(node1);
  print(ret);
});

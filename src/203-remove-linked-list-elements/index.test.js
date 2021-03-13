import { ListNode, print } from "../linked-list-mock";
import removeElements from "./index";

test("removeElements 6", () => {
  let node1 = new ListNode(1);
  let node2 = new ListNode(2);
  let node3 = new ListNode(3);
  let node4 = new ListNode(4);
  let node5 = new ListNode(5);
  let node6 = new ListNode(6);
  node1.next = node2;
  node2.next = node3;
  node3.next = node4;
  node4.next = node5;
  node5.next = node6;

  let ret = removeElements(node1, 6);
  print(ret);
});

test("removeElements 6", () => {
  let node1 = new ListNode(1);
  let node2 = new ListNode(2);
  let node3 = new ListNode(3);
  let node4 = new ListNode(4);
  let node5 = new ListNode(5);
  let node6 = new ListNode(6);
  node1.next = node6;
  node6.next = node2;
  node2.next = node3;
  node3.next = node4;
  node4.next = node5;

  let ret = removeElements(node1, 6);
  print(ret);
});

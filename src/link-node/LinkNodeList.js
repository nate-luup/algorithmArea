import Node from "./Node";
class LinkNodeList {
  constructor() {
    this.length = 0;
    // 链表第一个元素
    this.head = null;
  }
  // 增删改查
  append(element) {
    let node = new Node(element);
    let cur;
    //追加有两种情况:
    // 一、链表是空的
    if (this.head == null) {
      this.head = node;
    } else {
      // 二、遍历链表，将元素追加到最后
      cur = this.head;
      while (cur.next) {
        cur = cur.next;
      }
      cur.next = node;
      this.length++;
    }
  }
  removeAt(index) {
    let cur = this.head;
    // 将上一个节点，指向下一个节点
    let pre;
    let i = 0;
    if ((index == 0)) {
      this.head = cur.next;
    } else {
      while (i < index) {
        pre = cur;
        cur = cur.next;
        i++;
      }
      pre.next = cur.next;
      cur.next = null;
      this.length--;
    }
    return cur.element;
  }
  print() {
    let cur = this.head;
    let arr = [];
    while (cur) {
      arr.push(cur.element);
      cur = cur.next;
    }
    console.log(arr.join("=>"));

    return arr.join("=>");
  }
}

export default LinkNodeList;

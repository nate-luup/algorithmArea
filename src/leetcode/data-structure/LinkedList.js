function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
function print(linkedList) {
  let cur = linkedList;
  let arr = [];
  while (cur) {
    arr.push(cur.val);
    cur = cur.next;
  }
  console.log(arr.join("=>"));
}
function list2Str(linkedList) {
  let cur = linkedList;
  let arr = [];
  while (cur) {
    arr.push(cur.val);
    cur = cur.next;
  }
  return arr.join("=>");
}
export { ListNode, print, list2Str };

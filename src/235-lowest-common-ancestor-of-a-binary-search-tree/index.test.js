import lowestCommonAncestor from "./index";
import { TreeNode } from "../data-structure";

test("lowestCommonAncestor", () => {
  let t0 = new TreeNode(0);
  let t2 = new TreeNode(2);
  let t3 = new TreeNode(3);
  let t4 = new TreeNode(4);
  let t5 = new TreeNode(5);
  let t6 = new TreeNode(6);
  let t7 = new TreeNode(7);
  let t8 = new TreeNode(8);
  let t9 = new TreeNode(9);

  t6.left = t2;
  t2.left = t0;
  t2.right = t4;

  t4.left = t3;
  t4.right = t5;

  t6.right = t8;
  t8.left = t7;
  t8.right = t9;

  let p = t2;
  let q = t8;

  let ret = lowestCommonAncestor(t6, p, q);
  expect(ret.val).toBe(6);

  q = t4;
  ret = lowestCommonAncestor(t6, p, q);
  expect(ret.val).toBe(2);
});

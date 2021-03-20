import lowestCommonAncestor from "./index";
import { TreeNode } from "../data-structure";

test("lowestCommonAncestor", () => {
  let t0 = new TreeNode(0);
  let t1 = new TreeNode(1);

  let t2 = new TreeNode(2);
  let t3 = new TreeNode(3);
  let t4 = new TreeNode(4);
  let t5 = new TreeNode(5);
  let t6 = new TreeNode(6);
  let t7 = new TreeNode(7);
  let t8 = new TreeNode(8);
  let t9 = new TreeNode(9);

  t3.left = t5;
  t3.right = t1;

  t5.left = t6;
  t5.right = t2;

  t2.left = t7;
  t2.right = t4;

  t1.right = t0;
  t1.right = t8;

  let p = t5;
  let q = t1;

  let ret = lowestCommonAncestor(t3, p, q);
  expect(ret.val).toBe(3);
});

import { TreeNode } from "../data-structure";
import maxDepth from "./index";

test("maximum-depth-of-binary-tree", () => {
  let t1 = new TreeNode(1);
  let t2 = new TreeNode(2);
  let t3 = new TreeNode(3);
  let t4 = new TreeNode(4);
  let t5 = new TreeNode(5);
  let t6 = new TreeNode(6);
  let t7 = new TreeNode(7);
  let t8 = new TreeNode(8);

  t1.left = t2;
  t1.right = t3;

  t2.left = t4;
  t2.right = t5;

  t3.left = t6;
  t3.right = t7;

  t6.left = t8;

  let ret = maxDepth(t1);

  expect(ret).toBe(4);
});

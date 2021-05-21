import { TreeNode } from "../data-structure";
import isValidBST from "./index";

test("inorderTraversal", () => {
  let t1 = new TreeNode(1);
  let t2 = new TreeNode(2);
  let t3 = new TreeNode(3);
  let t4 = new TreeNode(4);
  let t5 = new TreeNode(5);
  let t6 = new TreeNode(6);
  let t7 = new TreeNode(7);
  let t8 = new TreeNode(8);

  t5.left = t1;
  t5.right = t7;

  t7.left = t6;
  t7.right = t8;

  let ret = isValidBST(t5);
  expect(ret).toBe(true);
});

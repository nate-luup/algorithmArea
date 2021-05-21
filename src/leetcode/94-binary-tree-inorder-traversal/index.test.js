import { TreeNode, tree2Str } from "../data-structure";
import inorderTraversal from "./index";

test("inorderTraversal", () => {
  let t1 = new TreeNode(1);
  let t2 = new TreeNode(2);
  let t3 = new TreeNode(3);
  let t4 = new TreeNode(4);
  let t5 = new TreeNode(5);
  let t6 = new TreeNode(6);
  let t7 = new TreeNode(7);

  t1.left = t2;
  t1.right = t3;
  t2.left = t4;
  t2.right = t5;

  t3.left = t6;
  t3.right = t7;

  let ret = inorderTraversal(t1);
  console.log(ret);
  expect(ret).toEqual([4, 2, 5, 1, 6, 3, 7]);
});

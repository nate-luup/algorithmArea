import { TreeNode, tree2Str } from "../data-structure";
import invertTree from "./index";

test("invertTree", () => {
  let t1 = new TreeNode(1);
  let t2 = new TreeNode(2);
  let t3 = new TreeNode(3);
  let t4 = new TreeNode(4);
  let t6 = new TreeNode(6);
  let t7 = new TreeNode(7);
  let t9 = new TreeNode(9);

  t4.left = t2;
  t4.right = t7;
  t2.left = t1;
  t2.right = t3;
  t7.left = t6;
  t7.right = t9;
  //   console.log(tree2Str(t4));
  invertTree(t4);
  //   console.log(tree2Str(t4));
  expect(tree2Str(t4)).toBe("4=>7=>9=>6=>2=>3=>1");
});

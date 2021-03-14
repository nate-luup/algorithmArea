import { TreeNode } from "../data-structure";
import isSameTree from "./index";

test("isSameTree", () => {
  var left = new TreeNode(2);
  var right = new TreeNode(3);
  let root1 = new TreeNode(1, left, right);
  let root2 = new TreeNode(1, left, right);

  let ret = isSameTree(root1, root2);
  expect(ret).toBe(true);
});

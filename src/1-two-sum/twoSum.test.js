import { twoSum } from "./twoSum";

test("twoSum sort", () => {
  let nums = [2, 7, 11, 15];
  let target = 9;
  let ret = twoSum(nums, target);
  expect(ret).toEqual([0, 1]);
});

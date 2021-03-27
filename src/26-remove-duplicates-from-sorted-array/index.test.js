import removeDuplicates from "./index";

test("removeDuplicates", () => {
  let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
  let ret = removeDuplicates(nums);
  expect(ret).toBe(5);
});

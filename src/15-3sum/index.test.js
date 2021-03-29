import threeSum from "./index";

test("threeSum", () => {
  let nums = [-1, 0, 1, 2, -1, -4];
  let ret = threeSum(nums);
//   console.log(ret);
  expect(ret).toEqual([
    [-1, -1, 2],
    [-1, 0, 1],
  ]);
});

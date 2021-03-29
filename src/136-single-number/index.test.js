import singleNumber from "./index";

test("singleNumber", () => {
  let arr = [2, 2, 1];
  let ret = singleNumber(arr);
  expect(ret).toBe(1);
});

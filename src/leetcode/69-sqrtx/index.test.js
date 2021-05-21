import mySqrt from "./index";

test("mySqrt", () => {
  let n = 8;
  let ret = mySqrt(n);
  expect(ret).toBe(2);
});

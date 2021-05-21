import myPow from "./index";

test("my pow", () => {
  let x = 2;
  let n = 10;
  let ret = myPow(x, n);
  expect(ret).toBe(1024);
});

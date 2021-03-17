import leftpad from "./index";

test("leftpad", () => {
  let ret = leftpad("hello", 10, 0);
  expect(ret).toBe("00000hello");
});

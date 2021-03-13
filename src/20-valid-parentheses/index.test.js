import isValid from "./index";

test("isValid", () => {
  let s = "()";
  let ret = isValid(s);
  expect(ret).toBe(true);
});

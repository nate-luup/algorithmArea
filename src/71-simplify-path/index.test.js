import simplifyPath from "./index";

test("simplifyPath", () => {
  let path = "/a/./b/../../c/";
  let ret = simplifyPath(path);
  expect(ret).toBe("/c");
});

import maxArea from "./index";

test("maxArea", () => {
  let input = [1, 8, 6, 2, 5, 4, 8, 3, 7];
  let ret = maxArea(input);
  expect(ret).toBe(49);
});

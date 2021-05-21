import permute from "./index";

test("permute", () => {
  let input = [1, 2, 3];
  let ret = permute(input);
  expect(ret).toEqual([
    [1, 2, 3],
    [1, 3, 2],
    [2, 1, 3],
    [2, 3, 1],
    [3, 1, 2],
    [3, 2, 1],
  ]);
  //   console.log(ret);
});

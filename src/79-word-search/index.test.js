import exist from "./index";

test("exist", () => {
  let board = [
    ["A", "B", "C", "E"],
    ["S", "F", "C", "S"],
    ["A", "D", "E", "E"],
  ];
  let word = "ABCCED";
  let ret = exist(board, word);
  expect(ret).toBe(true);
});

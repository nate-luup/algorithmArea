import { qs, printData } from "./quickSort";

test("quick sort", () => {
  let a = [4, 8, 6, 5, 2, 1, 3, 9, 7];
  printData(a);
  qs(a, 0, 8);
  expect(a).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
});

test("quick sort", () => {
  let a = [8, 4, 6, 5, 2, 1, 3, 7, 9];
  printData(a);
  qs(a, 0, 8);
  expect(a).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
});

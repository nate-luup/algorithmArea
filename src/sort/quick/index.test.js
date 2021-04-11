import quickSort from "./index";

test("quick sort", () => {
  let a = [4, 8, 6, 5, 2, 1, 3, 9, 7];
  quickSort(a);
  expect(a).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
});

test.only("quick sort: 测试数组中全部是重复元素", () => {
  let a = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  quickSort(a);
  expect(a).toEqual([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
});

test("quick sort: 测试数组中含有重复元素", () => {
  let a = [8, 4, 6, 5, 2, 1, 1, 2, 3, 7, 9];
  quickSort(a);
  expect(a).toEqual([1, 1, 2, 2, 3, 4, 5, 6, 7, 8, 9]);
});

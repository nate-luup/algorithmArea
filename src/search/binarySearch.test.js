import { bs } from "./binarySearch";

test.only("bs", () => {
  let a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let ret = bs(a, 1);
  expect(ret).toBe(1);
});

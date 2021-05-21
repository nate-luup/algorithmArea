import fib from "./index";

test("fib 0", () => {
  let ret = fib(0);
  expect(ret).toBe(0);
});

test("fib 1", () => {
  let ret = fib(1);
  expect(ret).toBe(1);
});
test("fib 2", () => {
  let ret = fib(2);
  expect(ret).toBe(1);
});
test("fib 3", () => {
  let ret = fib(3);
  expect(ret).toBe(2);
});
test("fib 4", () => {
  let ret = fib(4);
  expect(ret).toBe(3);
});
test("fib 5", () => {
  let ret = fib(5);
  expect(ret).toBe(5);
});

test("fib 6", () => {
  let ret = fib(6);
  expect(ret).toBe(8);
});

test("fib 7", () => {
  let ret = fib(7);
  expect(ret).toBe(13);
});

test("fib 8", () => {
  let ret = fib(8);
  expect(ret).toBe(21);
});
test("fib 9", () => {
  let ret = fib(9);
  expect(ret).toBe(34);
});

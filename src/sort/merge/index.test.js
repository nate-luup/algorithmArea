import merge from "./index";

test("merge", () => {
  let a = "mergesortexample".split("");

  merge(a);
  console.log(a);
});

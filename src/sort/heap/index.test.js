import sort from "./index";

test("heap sort", () => {
  let a = "sortexample".split("");
  sort(a);
  console.log(a);
});

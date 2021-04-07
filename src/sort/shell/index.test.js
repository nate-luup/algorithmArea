import shell from "./index";

test("shell", () => {
  let a = "shellsortexample".split("");

  shell(a);
  console.log(a);
});

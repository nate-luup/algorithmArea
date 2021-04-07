import timeRandomInput from "./SortCompare";

test("SortCompare", () => {
  let len = 1000;
  let repeat = 100;
  let alg1 = "Selection";
  let alg2 = "Insertion";

  let t1 = timeRandomInput("Selection", len, repeat);
  let t2 = timeRandomInput("Insertion", len, repeat);

  console.log(
    `For ${len} random numbers \n ${alg1} is ${
      t2 / t1
    } times faster than ${alg2}`
  );
});

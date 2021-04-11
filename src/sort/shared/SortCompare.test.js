import timeRandomInput, { ALG_MAP } from "./SortCompare";

test("SortCompare", () => {
  let len = 10000;
  let repeat = 100;
  let alg1 = ALG_MAP.Selection;
  let alg2 = ALG_MAP.Insertion;
  let alg3 = ALG_MAP.Shell;
  let alg4 = ALG_MAP.Merge;
  let alg5 = ALG_MAP.Quick;

  let t1 = timeRandomInput(alg1, len, repeat);
  let t2 = timeRandomInput(alg2, len, repeat);
  let t3 = timeRandomInput(alg3, len, repeat);
  let t4 = timeRandomInput(alg4, len, repeat);
  let t5 = timeRandomInput(alg5, len, repeat);

  console.log(`${alg1} elapsed Time: ${t1}`);
  console.log(`${alg2} elapsed Time: ${t2}`);
  console.log(`${alg3} elapsed Time: ${t3}`);
  console.log(`${alg4} elapsed Time: ${t4}`);
  console.log(`${alg5} elapsed Time: ${t5}`);
});

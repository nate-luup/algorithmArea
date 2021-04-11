import StdRandom from "./StdRandom";
import Stopwatch from "./Stopwatch";
import Insertion from "../insertion";
import Selection from "../selection";
import Shell from "../shell";
import Merge from "../merge";
import Quick from "../quick";
const ALG_MAP = {
  Selection: "Selection",
  Insertion: "Insertion",
  Shell: "Shell",
  Merge: "Merge",
  Quick: "Quick",
};
const time = (alg, a) => {
  let timer = new Stopwatch();
  if (alg === ALG_MAP.Selection) {
    Selection(a);
  }
  if (alg === ALG_MAP.Insertion) {
    Insertion(a);
  }
  if (alg === ALG_MAP.Shell) {
    Shell(a);
  }
  if (alg === ALG_MAP.Merge) {
    Merge(a);
  }
  if ((alg = ALG_MAP.Quick)) {
    Quick(a);
  }
  let elapsedTime = timer.elapsedTime();
  return elapsedTime;
};
const timeRandomInput = (alg, len, repeat) => {
  // 使用算法alg将t个长度为len的数组排序
  let total = 0;
  let a = [];
  for (let i = 0; i < repeat; i++) {
    // 进行一次测试（生成一个数组并排序）
    for (let j = 0; j < len; j++) {
      a[j] = StdRandom.uniform(100000);
    }
    // console.log(a);
    total += time(alg, a);
  }
  return total;
};

export default timeRandomInput;
export { ALG_MAP };

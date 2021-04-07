import StdRandom from "./StdRandom";
import Stopwatch from "./Stopwatch";
import Insertion from "../insertion";
import Selection from "../selection";
const time = (alg, a) => {
  let timer = new Stopwatch();
  if (alg === "Selection") {
    Selection(a);
  }
  if ((alg = "Insertion")) {
    Insertion(a);
  }
  return timer.elapsedTime();
};
const timeRandomInput = (alg, len, repeat) => {
  // 使用算法alg将t个长度为len的数组排序
  let total = 0;
  let a = [];
  for (let i = 0; i < repeat; i++) {
    // 进行一次测试（生成一个数组并排序）
    for (let j = 0; j < len; j++) {
      a[i] = StdRandom.uniform(1000);
    }
    total += time(alg, a);
  }
  return total;
};

export default timeRandomInput;

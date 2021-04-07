import StdRandom from "./StdRandom";
import Stopwatch from "./Stopwatch";
import Insertion from "../insertion";
import Selection from "../selection";
import Shell from "../shell";

const time = (alg, a) => {
  let timer = new Stopwatch();
  if (alg === "Selection") {
    Selection(a);
  }
  if (alg === "Insertion") {
    Insertion(a);
  }
  if (alg === "Shell") {
    Shell(a);
  }
  let elapsedTime = timer.elapsedTime();
  console.log(elapsedTime)
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
    console.log(a);
    // console.log(total);
    total += time(alg, a);
  }
  console.log(total);
  return total;
};

function test() {
  let len = 10000;
  let repeat = 100;
  let alg1 = "Selection";
  let alg2 = "Insertion";
  let alg3 = "Shell";

  let t1 = timeRandomInput(alg1, len, repeat);
    let t2 = timeRandomInput(alg2, len, repeat);
    let t3 = timeRandomInput(alg3, len, repeat);

  console.log(`${alg1} elapsed Time: ${t1}`);
    console.log(`${alg2} elapsed Time: ${t2}`);
    console.log(`${alg3} elapsed Time: ${t3}`);
}

test()
// export default timeRandomInput;

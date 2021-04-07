import { exch, less } from "../shared";

const insertion = (a) => {
  let len = a.length;
  for (let i = 1; i < len; i++) {
    // 将a[i]插入到a[i-1]、a[i-2]、a[i-3]...之中
    for (let j = i; j > 0; j--) {
      console.log(a[j], a[j - 1]);
      if (less(a[j], a[j - 1])) {
        exch(a, j, j - 1);
      }
    }
  }
};

export default insertion;

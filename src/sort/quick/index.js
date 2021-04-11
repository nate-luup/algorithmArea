import { less, exch } from "../shared";

// 切分
const partition = (a, lo, hi) => {
  // 将数组切分为 a[lo .. i-1], a[i], a[i+1 .. hi]
  let i = lo; // 左扫描指针
  let j = hi + 1; // 右扫描指针

  let v = a[lo]; // 切分元素

  while (true) {
    // 扫描左右，检查扫描是否结束并交换元素
    while (less(a[++i], v)) if (i == hi) break;
    while (less(v, a[--j])) if (j == lo) break;
    if (i >= j) break;
    // console.log(`交换元素i=${i}, a[i]=${a[i]}; j=${j}, a[j]=${a[j]}`);
    exch(a, i, j);
  }
  exch(a, lo, j); // 将v = a[j] 放入正确位置
  return j; // a[lo .. j-1] <= a[j] <= a[j+1 .. hi] 达成
};
const sort = (a, lo, hi) => {
  if (hi <= lo) return;
  let j = partition(a, lo, hi);
  sort(a, lo, j - 1); //将左半部分 a[lo .. j-1] 排序
  sort(a, j + 1, hi); // 将右半部分 a[j+1 .. hi] 排序
};

const quick = (a) => {
  sort(a, 0, a.length - 1);
};

export default quick;

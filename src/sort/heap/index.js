// 将exch 和 less 的实现中的索引减一即可得到和其他排序算法一致的实现(a[0] - a[N-1] 排序)
const exch = (a, i, j) => {
  let _i = i - 1;
  let _j = j - 1;
  let t = a[_i];
  a[_i] = a[_j];
  a[_j] = t;
};

const less = (a, b) => {
  return a < b;
};

const sink = (a, k, N) => {
  while (2 * k <= N) {
    let j = 2 * k;
    if (j < N && less(a[j - 1], a[j])) j++;
    if (!less(a[k - 1], a[j - 1])) break;

    exch(a, k, j);
    k = j;
  }
};

const sort = (a) => {
  let N = a.length;
  let k = Math.floor(N / 2);
  for (k; k >= 1; k--) {
    sink(a, k, N);
  }
  while (N > 1) {
    exch(a, 1, N--);
    sink(a, 1, N);
  }
};

export default sort;

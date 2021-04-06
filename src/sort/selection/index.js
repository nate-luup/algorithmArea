const exch = (a, i, j) => {
  let t = a[i];
  a[i] = a[j];
  a[j] = t;
};

const less = (a, b) => {
  return a < b;
};

/**
 * 将a[]按照升序排列
 * @param {*} a
 */
const selection = (a) => {
  let len = a.length;
  for (let i = 0; i < len; i++) {
    //将a[i]和a[i+1..N]中的最小元素交换
    let min = i; // 最小元素的索引
    for (let j = i + 1; j < len; j++) {
      if (less(a[j], a[min])) {
        min = j;
      }
    }
    exch(a, i, min);
  }
};

export default selection;

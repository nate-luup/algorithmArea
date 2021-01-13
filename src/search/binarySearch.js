/*
 * 二分检索是在有序数列中查找数据的程序算法，该方法不适用于数列中有多个重复数据的情况。
 * 二分检索，是将有序数列的数据从中间分成前后两个子表，通过不断缩小目标值的检索范围进行检索的方法.
 */

const bs = (a, x) => {
  let n = a.length;
  let lo, hi, m;
  lo = 0;
  hi = n - 1;
  m = Math.floor((lo + hi) / 2);

  while (lo <= hi) {
    if (a[m] == x) {
      break;
    }
    if (a[m] > x) {
      hi = m - 1;
    } else {
      lo = m + 1;
    }
    m = Math.floor((lo + hi) / 2);
  }
  if (a[m] == x) {
    return m;
  } else {
    console.log(`没有找到:${x}`);
    return undefined;
  }
};
export { bs };

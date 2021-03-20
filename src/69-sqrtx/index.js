/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let lo = 0;
  let hi = x;
  let m;
  let ret;
  while (lo <= hi) {
    m = Math.floor((lo + hi) / 2);
    let square = m * m;
    if (square <= x) {
      ret = m;
      lo = m + 1;
    }
    if (square > x) {
      hi = m - 1;
    }
  }
  return ret;
};

export default mySqrt;

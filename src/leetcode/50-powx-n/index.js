/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
// https://leetcode-cn.com/problems/powx-n/solution/js-xie-leetcode-by-zhl1232-24/
var myPow = function (x, n) {
  if (n === 0) {
    return 1;
  }
  if (n === 1) {
    return x;
  }
  if (n < 0) {
    return myPow(1 / x, -n);
  }
  let half = ~~(n / 2);
  let temp = myPow(x, half);
  if (n % 2 === 0) {
    return temp * temp;
  } else {
    return temp * temp * x;
  }
};
export default myPow;

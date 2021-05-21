/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */
let pick = Math.floor(Math.random() * 1000);
var guess = function (num) {
  console.log(num, pick);
  if (pick == num) {
    return 0;
  }
  if (pick < num) {
    return -1;
  }
  if (pick > num) {
    return 1;
  }
};

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
  let lo, hi, m;
  lo = 0;
  hi = n;
  m = Math.floor((lo + hi) / 2);
  let guessRes;
  while (lo <= hi) {
    guessRes = guess(m);
    if (guessRes == 0) {
      return m;
    }
    if (guessRes == -1) {
      hi = m - 1;
    }
    if (guessRes == 1) {
      lo = m + 1;
    }
    m = Math.floor((lo + hi) / 2);
  }
  return undefined;
};
export default guessNumber;

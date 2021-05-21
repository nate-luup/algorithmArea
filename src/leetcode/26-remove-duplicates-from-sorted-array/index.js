/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  if (nums.length === 0) {
    return 0;
  }
  let pre = nums[0];
  let count = 0;
  for (let i = 1; i < nums.length; i++) {
    if (pre !== nums[i]) {
      count++;
      nums[count] = nums[i];
    }
    pre = nums[i];
  }
  return count + 1;
};

export default removeDuplicates;

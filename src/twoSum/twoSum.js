/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    let current = nums[i];
    let rest = target - current;
    let restInMap = map[rest];
    // 注意这里的判断条件
    if (restInMap !== undefined) {
      return [restInMap, i];
    } else {
      map[current] = i;
    }
  }
};
export { twoSum };

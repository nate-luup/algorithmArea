/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  if (!height || height.length === 0) {
    return 0;
  }
  let left = 0;
  let right = height.length - 1;
  let maxArea = 0;
  while (left < right) {
    let area = Math.abs(left - right) * Math.min(height[left], height[right]);
    if (area > maxArea) {
      maxArea = area;
    }
    if (height[left] > height[right]) {
      right--;
    } else {
      left++;
    }
  }
  return maxArea;
};

export default maxArea;

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let mapping = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    let current = s[i];
    if (current in mapping) {
      stack.push(current);
    } else {
      // 右括号出现
      // 出栈一个元素，映射后进行比较
      if (current !== mapping[stack.pop()]) {
        return false;
      }
    }
  }
  return stack.length === 0;
};

export default isValid;

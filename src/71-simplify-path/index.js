/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  let stack = [];
  let pathArray = path.split("/");

  for (let i = 0; i < pathArray.length; i++) {
    let current = pathArray[i];
    // .. 返回上一级
    if (current == "..") {
      stack.pop();
    } else if (current != "" && current != ".") {
      // 不是空字符串并且不是'.' 推入栈中
      stack.push(current);
    }
  }
  return "/" + stack.join("/");
};

export default simplifyPath;

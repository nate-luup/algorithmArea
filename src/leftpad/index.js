// 当需要补齐的数据比较大的时候会有性能问题
// 算法复杂度o(N)
function leftpad1(str, len, ch) {
  if (!ch && ch !== 0) {
    ch = " ";
  }
  let length = len - str.length + 1;
  return Array(length).join(ch) + str;
}
// 算法复杂度olog(N)
function leftpad2(str, len, ch) {
  if (!ch && ch !== 0) {
    ch = " ";
  }
  ch = ch + "";
  let length = len - str.length;
  // 二分法
  let total = "";
  while (length) {
    if (length % 2 == 1) {
      total += ch;
    }

    if (length == 1) {
      return total + str;
    }
    ch += ch; // 0 00 0000

    length = parseInt(length / 2);
  }
}
// 按位操作
function leftpad(str, len, ch) {
  if (!ch && ch !== 0) {
    ch = " ";
  }
  ch = ch + "";
  let length = len - str.length;
  // 二分法
  let total = "";
  while (length) {
    if (length & 1) {
      total += ch;
    }

    if (length == 1) {
      return total + str;
    }
    ch += ch; // 0 00 0000

    length = length >> 1;
  }
}

export default leftpad;

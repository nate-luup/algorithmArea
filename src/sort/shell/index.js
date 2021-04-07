import { exch, less } from "../shared";

const shell = (a) => {
  let len = a.length;
  let h = 1;
  while (h < len / 3) {
    h = 3 * h + 1; // 1, 4, 13, 40, 121, 364, 1093...
  }

  while (h >= 1) {
    // 将数组变为h有序
    for (let i = h; i < len; i++) {
      // 将a[i]插入到a[i-h], a[i-2*h], a[i-3*h]...之中
      for (let j = i; j >= h; j -= h) {
        if (less(a[j], a[j - h])) {
          exch(a, j, j - h);
        }
      }
    }
    h = Math.floor(h / 3);
  }
};

export default shell;

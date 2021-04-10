import { less } from "../shared";

const _merge = (a, lo, mid, hi) => {
  //   console.log(lo, mid, hi);
  // 将a[lo..mid] 和 a[mid+1..hi]归并
  let i = lo;
  let j = mid + 1;
  // 该方法将所有元素复制到aux[] 中，然后在归并回a[]中
  for (let k = lo; k <= hi; k++) {
    // 将a[lo..hi] 复制到 aux[lo..hi]
    aux[k] = a[k];
  }

  for (let k = lo; k <= hi; k++) {
    // 归并回到a[lo..hi]
    if (i > mid) {
      // 左半边用尽（取右半边元素）
      a[k] = aux[j++];
    } else if (j > hi) {
      // 右半边用尽（取左半边的元素）
      a[k] = aux[i++];
    } else if (less(aux[j], aux[i])) {
      // 右半边的当前元素小于左半边的当前元素（取右半边的元素）
      a[k] = aux[j++];
    } else {
      // 右半边的当前元素大于等于左半边的当前元素（取左半边的元素）
      a[k] = aux[i++];
    }
  }
};

const sort = (a, lo, hi) => {
  // 将数组a[lo..hi]排序
  if (hi <= lo) return;

  let mid = Math.floor(lo + (hi - lo) / 2);
  sort(a, lo, mid); // 将左半边排序
  sort(a, mid + 1, hi); // 将右半边排序
  _merge(a, lo, mid, hi); // 归并结果
};

let aux = []; // 归并所需的辅助数组
const mergeSort = (a) => {
  sort(a, 0, a.length - 1);
};

export default mergeSort;

const printData = (a) => {
  console.log(JSON.stringify(a));
};
const qs = (a, first, last) => {
  console.log(`first: ${first}, last: ${last}`);
  let i, j, x;
  i = first;
  j = last;
  x = Math.floor((a[i] + a[j]) / 2); // x为中间值

  while (true) {
    // 从左向右找大于中间值的元素
    while (a[i] < x) {
      i++;
    }
    // 从右向左找小于中间值的元素
    while (a[j] > x) {
      j--;
    }
    // 左右指针相遇时候跳出循环
    if (i >= j) {
      // 此时所有大于中间元素的元素全部调换到右侧，所有小于中间元素的元素全部调换到左侧
      break;
    }
    // 交换找到的，左侧大于中间值的元素和右侧小于中间值的元素
    let tmp;
    tmp = a[i];
    a[i] = a[j];
    a[j] = tmp;

    console.log(
      `范围：${first} - ${last}，基准值: ${x}，交换元素：【${i}】与【${j}】`
    );
    printData(a);
    // 左指针向右移动
    i++;
    // 右指针向左移动
    j--;
  }
  // 对中间元素左侧的分组进行递归
  if (first < i - 1) {
    console.log(`----<----【执行左侧递归】i: ${i}, j: ${j}----<----`);
    qs(a, first, i - 1);
  }
  // 对中间元素右侧的分组进行递归
  if (j + 1 < last) {
    console.log(`---->----【执行右侧递归】i: ${i}, j: ${j}---->----`);
    qs(a, j + 1, last);
  }
};

export { qs, printData };

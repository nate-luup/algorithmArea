# 选择排序

1. 首先找到数组中最小的那个元素
2. 其次，将它和数组的第一个元素交换位置
3. 再次，在剩下的元素中找到最小的元素，将它与数组的第二个元素交换位置。
4. 如此往复，知道将整个数组排序

这种方法叫做选择排序，因为它不断地选择剩余元素之中的最小者。

## 对于长度为 N 的数组，选择排序需要大约 `N²/2` 次比较和 N 次交换

## 特点

- 运行时间和输入无关： 一个已经有序的数组和一个无序的数组所用的排序时间一样长
- 数据移动是最少的： 选择排序用了 N 次交换 - 交换次数和数组的大小是线性关系
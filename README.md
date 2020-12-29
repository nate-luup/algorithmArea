# 算法

## 时间复杂度

### 什么是时间复杂度？

算法的执行效率
算法的执行时间与算法的输入值之间的关系

```js
function test(num) {
  let total = 0; // 执行时间是 a
  for (let i = 0; i < num; num++) {
    total += i; // 执行时间是 b
  }
  return total; // 执行时间是 c
}
```

如果`num=10`，总执行时间是 `a + 10b + c`。对执行时间影响最大的是`10b`，用大 O 表示法就是 `O(N)`

### 常见时间复杂度案例分析

- O(1)： 表示算法执行时间和 num 是没有关系的 (没有`for`或`while`循环)

```js
function O1(num) {
  var i = num; // 执行时间是 a
  var j = num * 2; // 执行时间是 b
  return i + j; // 总的执行时间是 a + b 是常数
}
```

- O(log(n))：循环执行了 `log(n)` 次

```js
function OlogN(num) {
  let i = 1;
  while (i < num) {
    // 循环执行了log(n) 次
    i = i * 2;
  }
  return i;
}
```

- O(n)：循环执行了 `n` 次

```js
function ON(num) {
  let total = 0;
  for (let i = 0; i < num; num++) {
    // 循环执行了 n 次
    total += i;
  }
  return total;
}
```

- O(M+N)：两个循环，关系是并列的

```js
function OMN(num1, num2) {
  let total = 0;
  for (let i = 0; i < num1; i++) {
    total += i;
  }
  for (let j = 0; j < num2; j++) {
    total += j;
  }
  return total;
}
```

- O(nlog(n))： 循环执行了 `n * log(n)` 次

```js
function NLogN(num1, num2) {
  let total = 0;
  let j = 0;
  for (let i = 0; i < num1; i++) {
    while (j < num2) {
      total += i + j;
      j = j * 2;
    }
    j = 0;
  }
  return total;
}
```

- O(n²)： 循环执行了 `n²` 次

```js
function ON2(num) {
  let total = 0;
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      total += i + j;
    }
  }
  return total;
}
```

### 常见的时间复杂度对比

![Big-O Complexity Chat](./doc/images/complexity-chart.jpeg)

- O(log(n)) 二分查找
- O(nlog(n)) 排序

## 空间复杂度

### 什么是空间复杂度

算法的存储空间与输入值之间的关系

```js
// 空间复杂度 O(1)
function test(num) {
  let total = 0; // 变量占用空间
  for (let i = 0; i < num; i++) {
    total += i;
  }
  return total;
}
```

```js
// 空间复杂度 O(N)
function test(num) {
  let array = [];
  for (let i = 0; i < num; i++) {
    array.push(i);
  }
  return array;
}
```
### 常用空间复杂度案例分析
- 常量：`O(1)`
- 集合：`O(N)`  Array，List，LinkList，Map， Queue， Stack
- 递归：`O(N)` 递归栈

## 总结
时间和空间只能二选一：时间换空间，或者空间换时间
# 数据结构

- [数据结构](https://www.bilibili.com/video/BV1sy4y1q79M)

## 数组（Array）
在连续的内存空间中，存储一组相同类型的元素

var a = [1, 2, 3]

索引，内存空间中相对的位置

数组的访问Access，通过索引去取得某一个元素的值 `a[1] = 2`
数组的搜索Search，在数组中寻找某一个元素

### 时间复杂度
- 访问 Access `O(1)`
    - 自带内存地址，通过索引和每个元素占用的字节数可以计算出当前索引的内存地址。不需要遍历，直接可以计算得出
- 搜索 Search `O(N)`
    - 从头到尾遍历数组
- 插入 Insert `O(N)`
    - 插入新元素，移动其他元素
- 删除 Delete `O(N)`
    - 删除元素，移动其他元素
### 特点
- 适合读
- 不适合写

应用场景： 读多写少

### 常用操作
- 创建数组
- 添加元素
- 访问元素
- 修改元素
- 删除元素
- 遍历数组
- 查找元素
- 数组的长度
- 数组的排序
### 练习题
- 485 最大连续1的个数
- 283 移动零
- 27 移除元素

## 链表（LinkList）
- 单端链表
    - 当前元素
    - next指针
- 双端列表
    - 当前元素
    - pre指针
    - next指针
### 时间复杂度
- 访问 Access `O(N)`
    - 从头到尾遍历 next -> next
- 搜索 Search `O(N)`
- 插入 Insert `O(1)`
    - 修改指针
- 删除 Delete `O(1)`

### 特点
- 写很快
- 读很慢

应用场景： 读少写多

### 常用操作
- 创建链表
- 添加元素
- 访问元素
- 查找元素
- 删除元素
- 链表的长度
### 练习题
- 203 移除链表元素
- 206 反转链表

## 队列（Queue）
排队买早饭

- 单端队列： 只有一个口可以进，一个口可以出
- 双端队列： 两个口都可以进，两个口都可以出

底层是linklist实现的
### 时间复杂度
- 访问 Access `O(N)`
    - 队列是有顺序的，访问需要从头到尾一个一个访问
- 搜索 Search `O(N)`
- 插入 Insert `O(1)`
    - 只能在末尾插入
- 删除 Delete `O(1)`
    - 只能删除第一个

### 特点
先入先出
应用场景：

### 常用操作
- 创建队列
- 添加元素
- 获取即将出队的元素
- 删除即将出队的元素
- 判断队列是否为空
- 队列长度
- 遍历队列（边删除，边遍历队列操作）
### 练习题
- 933： 最近的请求次数
## 栈（Stack）
先进后出
### 时间复杂度
- 访问 Access `O(1)`
    - 访问栈顶元素
- 搜索 Search `O(N)`
- 插入 Insert `O(1)`
- 删除 Delete `O(1)`
    - 删除栈顶元素

### 特点
先进后出
应用场景：浏览器后退功能

### 常用操作
- 创建栈
- 添加元素
- 查找栈顶元素 - 即将出栈的元素
- 删除栈顶元素 - 即将出栈的元素
- 栈的长度
- 栈是否为空
- 遍历栈（边删除栈顶元素，边遍历）
### 练习题
- 20 有效括号
- 496 下一个更大的元素
## 哈希表（HashTable）
### 时间复杂度
- 访问 Access `O(N)`
- 搜索 Search `O(N)`
- 插入 Insert `O(1)`
- 删除 Delete `O(1)`

### 特点

应用场景：

### 常用操作
### 练习题
## 集合（Set）
### 时间复杂度
- 访问 Access `O(N)`
- 搜索 Search `O(N)`
- 插入 Insert `O(1)`
- 删除 Delete `O(1)`

### 特点

应用场景：

### 常用操作
### 练习题
## 树（Tree）
### 时间复杂度
- 访问 Access `O(N)`
- 搜索 Search `O(N)`
- 插入 Insert `O(1)`
- 删除 Delete `O(1)`

### 特点

应用场景：

### 常用操作
### 练习题
## 堆（Heap）
### 时间复杂度
- 访问 Access `O(N)`
- 搜索 Search `O(N)`
- 插入 Insert `O(1)`
- 删除 Delete `O(1)`

### 特点

应用场景：

### 常用操作
### 练习题
## 图（Graph）
### 时间复杂度
- 访问 Access `O(N)`
- 搜索 Search `O(N)`
- 插入 Insert `O(1)`
- 删除 Delete `O(1)`

### 特点

应用场景：

### 常用操作
### 练习题
# 算法题讲解

- [Leetcode 力扣 1-300 题视频讲解合集](https://www.bilibili.com/video/BV1xa411A76q)
- [Leetcode 力扣 301+题视频讲解合集](https://www.bilibili.com/video/BV1eK4y1j7fT)

# 刷题（按照标签来刷）

- [leetcode](https://leetcode-cn.com/)

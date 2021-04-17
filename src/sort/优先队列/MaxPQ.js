class MaxPQ {
  pq = []; // 基于堆的完全二叉树
  N = 0; // 存储于 pq[1 .. N]中，pq[0]没有使用

  /**
   * 插入元素：我们将新元素加到数组末尾，增加堆的大小并让这个新的元素上浮到合适的位置
   * @param {*} v
   */
  insert(v) {
    pq[++N] = v;
    this.swim(N);
  }
  /**
   * 删除最大元素：我们从数组的顶端删去最大的元素，
   * 并将数组的最后一个元素放到顶端，
   * 减小堆的大小，
   * 并让这个元素下沉到合适的位置
   * @returns
   */
  delMax() {
    let max = pq[1]; // 从根节点得到最大元素
    this.exch(1, N--); // 将其和最后一个节点交换
    pq[N + 1] = null; // 防止对象游离
    this.sink(1); //恢复堆的有序性
    return max;
  }
  isEmpty() {
    return N === 0;
  }
  size() {
    return N;
  }
  less(i, j) {
    return pq[i] < pq[j];
  }
  exch(i, j) {
    let temp = pq[i];
    pq[i] = pq[j];
    pq[j] = temp;
  }
  swim(k) {
    while (k > 1 && this.less(k / 2, k)) {
      this.exch(k / 2, k);
      k = k / 2;
    }
  }
  sink(k) {
    let N = pq.length - 1;
    while (2 * k <= N) {
      let j = 2 * k;
      if (j < N && this.less(j, j + 1)) j++;
      if (!this.less(k, j)) break;
      this.exch(k, j);
      k = j;
    }
  }
}

const exch = (a, i, j) => {
  let t = a[i];
  a[i] = a[j];
  a[j] = t;
};

const less = (a, b) => {
  return a < b;
};

export { exch, less };

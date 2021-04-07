class StdRandom {
  /**
   * Returns a random number uniformly in [0, n).
   *
   * @return a random long integer uniformly between 0 (inclusive) and {@code n} (exclusive)
   * @throws Error if {@code n <= 0}
   */
  static uniform(max) {
    if (max <= 0) throw new Error("argument must be positive: " + n);

    return Math.floor(Math.random() * max);
  }
}

export default StdRandom

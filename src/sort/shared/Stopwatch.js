/**
 *  The {@code Stopwatch} data type is for measuring
 *  the time that elapses between the start and end of a
 *  programming task (wall-clock time).
 */
class Stopwatch {
  /**
   * Initializes a new stopwatch.
   */
  constructor() {
    this.start = new Date().getTime();
  }
  /**
   * Returns the elapsed CPU time (in seconds) since the stopwatch was created.
   *
   * @return elapsed CPU time (in seconds) since the stopwatch was created
   */
  elapsedTime() {
    let now = new Date().getTime();

    return (now - this.start) / 1000;
  }
}
export default Stopwatch;

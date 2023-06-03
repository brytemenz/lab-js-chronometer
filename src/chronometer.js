class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (typeof printTimeCallback === "function") {
        printTimeCallback();
      }
    }, 1000);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    const minutes = Math.floor(this.currentTime / 60);
    const seconds = this.currentTime - minutes * 60;
    return seconds;
  }

  computeTwoDigitNumber(value) {
    if (value < 10) {
      return "0" + value;
    } else {
      return value.toString();
    }
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    const minutes = this.getMinutes();
    const seconds = this.getSeconds();
    const centiseconds = this.getCentiseconds();
    return `${this.computeTwoDigitNumber(minutes)}:${this.computeTwoDigitNumber(
      seconds
    )}.${this.computeTwoDigitNumber(centiseconds)}`;
  }
}

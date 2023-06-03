class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      if (typeof printTimeCallback === "function") {
        printTimeCallback();
      }
    }, 10);
  }

  getMinutes() {
    if (this.currentTime === 0) {
      return 0;
    } else {
      return Math.floor(this.currentTime / 6000);
    }
  }

  getSeconds() {
    // if (this.currentTime === 0) {
    //   return 0;
    // } else {

    const minutes = Math.floor(this.currentTime / 60);
    const seconds = this.currentTime - minutes * 60;
    return seconds;
  }

  getCentiseconds() {
    if (this.currentTime === 0) {
      return 0;
    } else {
      const centiseconds = this.currentTime % 100;
      return centiseconds;
    }
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

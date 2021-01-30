// Create a clock that is independent of date
//
// Add/subtract minutes
// Two clock objects that have the same time should be equal to each other.

class Clock {
  constructor(hour = 0, minute = 0) {
    this.hour = hour;
    this.minute = minute;
    this.totalMinutes = (hour * Clock.BASE_MINUTES) + minute;
  }

  static BASE_MINUTES = 60;
  static MAX_MINUTES = 1440;

  static at(hour, minute) {
    return new Clock(hour, minute);
  }

  subtract(mins) {
    mins -= (mins * 2);

    do {
      mins += Clock.MAX_MINUTES; // normalize
    } while (Clock.MAX_MINUTES < Math.abs(mins))

    return this.add(mins);
  }

  add(minToAdd) {
    let newMinutes = (this.totalMinutes + minToAdd) % Clock.MAX_MINUTES;
    let hour = Math.floor(newMinutes / Clock.BASE_MINUTES);
    let minute = newMinutes % Clock.BASE_MINUTES;

    return new Clock(hour, minute);
  }

  toString() {
    let hourStr = this.formatTime(this.hour);
    let minuteStr = this.formatTime(this.minute);
    return hourStr + ':' + minuteStr;
  }

  formatTime(num) {
    let strNum = String(num);
    return strNum.length === 1 ? '0' + strNum : strNum;
  }

  isEqual(obj) {
    let objOne = Object.values(obj);
    let objTwo = Object.values(this);
    
    return objOne.every((ele, idx) => {
      let other = objTwo[idx];
      return other === ele;
    })
  }
}

module.exports = Clock;

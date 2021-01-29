Math.seedrandom = require('seedrandom');
// Generate random robot names.
//
// Req: first two characters are letters, the rest (3) are numbers.
//
//  - Need to be able to prevent collitions
//  - if one collition is detected, recreate the name.
//
//  Steps (algorithm)
//
//  create name
//    for the first and second characters, choose a random number between
//            65 and 90 then get char from code.
//
//    for the second part get random number from 1 to 999
//        convert to strin
//
//    append both strings
//    save into robot names collection
//
//    return string

class Robot {
  constructor() {
    this.nameStr = this.createName();
  }

  static robotNames = {};
  
  name() { return this.nameStr }

  createName() {
    let name;

    do {
      let letters = this.generateFirst(); // letters
      let numbers = this.generateSecond(); // numbers
      name = letters + numbers;
    } while (Robot.robotNames[name])

    Robot.robotNames[name] = true;

    return name;
  }

  generateSecond() {
    return this.getRandom(100, 999);
  }

  generateFirst() {
    const MIN = 65; // A
    const MAX = 90; // Z
    
    let one = String.fromCodePoint(this.getRandom(MIN, MAX));
    let two = String.fromCodePoint(this.getRandom(MIN, MAX));

    return one + two;
  }

  reset() {
    delete Robot.robotNames[this.nameStr];
    this.nameStr = this.createName();
  }

  getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}


module.exports = Robot;

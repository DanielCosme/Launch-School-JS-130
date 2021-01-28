//
//
//
// In: string (represents octal)
// Out: number 
//
// Problem: convert octal string into decimal number
//
// Requirements:
//    invalid input = octal 0
// 
// Data structure???? numbers && strings
//
// Algorithm (steps)
//  if invalid input return 0 (number);
//  remember the current power position starting from 0
//  remember final result, starting from 0
//
//  iterate over string char by char  (this is a loop) from right to left
//    each char must be converted into a number
//    take current number * (8)^current power position
//    result += result of previous operation
//    currentPowerPosition++;
//
//  return result
//
//  What is invalid input
//    anything not a number?

class Octal {
  constructor(octalStr) {
    this.octalStr = octalStr;
  }

  toDecimal() {
    let result = 0; 
    if (Number.isNaN(Number(this.octalStr))) return result;
    let power = 0;
    let len = this.octalStr.length;

    for (let index = len - 1  ; index > -1 ; --index) {
      let cur = Number(this.octalStr[index]);       
      let calculation = cur * Math.pow(8, power);

      if (cur >= 8) return 0;
      
      result += calculation;
      power++;      
    }

    return result;
  }
}

//let o = new Octal('17');
//console.log(o.toDecimal());

module.exports = Octal;

// Get all posible numbers in the string of the asked for length
//   a substring problem
//
//
// Requirements:
//    - only numbers of the provided length
//    - all inputs are valid numbers
//    - if asked for length is bigger than digits length throw exception.
//    - class Series -> digits input
//    - method slices  -> req len input --> Out
//
// Inputs: 
//    - digits str
//    - required length
//
// Out: 
//    - arr that contains the numbers also as an array
//        e.g. result is '123' '234'
//        - [[1,2,3], [2,3,4]]
//        - The digits need to be numbers
//
// Algorithm: (steps)
//    - get all posible substrings of reqLen in the digits.
//    - for each sub-string found split into an array.
//    - push sub-string into result array.
//  

class Series {
  constructor(digitsStr) {
    this.digitsStr = digitsStr;
  }

  slices(reqLen) {
    if (reqLen > this.digitsStr.length) throw "Error";

    let result = [];
    let tail = reqLen;

    for (let head = 0 ; tail <= this.digitsStr.length ; head++) {
      let currentSlice = this.digitsStr.slice(head, tail).split('');
      result.push(currentSlice.map(digit => Number(digit)));
      tail++;
    }
    
    return result;
  }
}

module.exports = Series;

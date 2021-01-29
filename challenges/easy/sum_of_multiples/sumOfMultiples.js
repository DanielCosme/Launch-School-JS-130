//
// get the sum of all the multiples of a set of numbers that goes up to
// a range provided. 
//
// In: upper range - collection of multiples.
// Out: the sum of all multiples found
//
// Problem: compute the sum of all posible multiples of the numbers 
//  in the collection.
// 
// Req: 
//    - If not collection provided, it defaults to [3, 5].
//    - the range does not include the upper number, if range is up to 100, 
//        100 is not going to be a multiple evaluated a posible multiple.
//
//  What is a multiple?
//  what does it mean to be a multiple of other number?
//    if the division by that number leaves no reminder
//      2 is mult of 4
//      4 / 2 = 2 rem 0  --> 4 % 2 === 0
//          to be a multiple the modulo operation must be === 0
//
// Algorithm: (steps)
//    collection of multiples to test.
//    result variable = 0 
//
//    iterate over n times (range provided)
//        test if current number is a multiple of any of the numbers
//        in the test collection
//          if yes result += current number on iteration
//    
//    return result
//

class SumOfMultiples {
  constructor(...arrMultiples) {
    this.multiples = arrMultiples;
  }

  to(upperRange) {
    let result = 0;

    for (let num = 1 ; num < upperRange ; num++) {
      let test = this.multiples.some(cur => num % cur === 0);    
      if (test) result += num;
    }

    return result;
  }

  static to(to) {
    let sumOfMultiples = new SumOfMultiples(3, 5);
    return sumOfMultiples.to(to);
  }
}

module.exports = SumOfMultiples;

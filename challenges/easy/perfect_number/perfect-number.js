/*
given a number determine if it is:
  - abundant
  - perfect
  - deficient

In: number
Out: string

how to determine?
  num compared to sum of positive divisors
    aliquot sum

perfect --> aliquot = to number
abundant -->  "  = greater to number
deficient --> "  = less than

algorithm
  get aliquot sum
    get positive divisors 
      iterate by n times
        reduce n by 1
        test if n % new n === 0
          aliquotNum += new n

  p if = to n
  a if = < to n
  d if = > to n
*/

class PerfectNumber {
  constructor(number) {
    this.number = number;

    if (this.number < 0) throw "Negative Number";
  }

  static classify(n) {
    let inst = new PerfectNumber(n);    

    let aliquot = inst.getAliquot();
    let strResult = 'perfect'; 

    if (aliquot > n) strResult = 'abundant';
    else if (aliquot < n) strResult = 'deficient';

    return strResult;
  }


  getAliquot() {
    let sum = 0;

    for (let num = this.number - 1 ; num !== 0 ; num--) {
      if (this.number % num === 0) sum += num;
    }    

    return sum;
  }
}

module.exports = PerfectNumber;


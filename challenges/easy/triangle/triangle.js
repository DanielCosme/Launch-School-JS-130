/* Write a program to determine whether a triangle is equilateral, isosceles, 
 or scalene.

An equilateral triangle has all three sides the same length.

An isosceles triangle has exactly two sides of the same length.

A scalene triangle has all sides of different lengths.

Note: For a shape to be a triangle at all, all sides must be of length > 0, 
and the sum of the lengths of any two sides must be greater than or equal to 
the length of the third side.
*/

class Triangle {
  constructor(first, second, third) {
      this.first = first;
      this.second = second;
      this.third = third;

      this.validate();
  }

  kind() {
    let result = 'scalene';

    if (this.isEquilateral()) result = 'equilateral';
    else if (this.isIsosceles()) result = 'isosceles';

    return result;
  }
  
  isEquilateral() {
    return this.first === this.second && this.first === this.third;
  }

  isIsosceles() {
    return (this.first === this.second 
          || this.first === this.third 
          || this.second === this.third);
  }

  validate() {
    this.validateLength();
    this.validateEquality();
  }

  validateLength() {
    let arr = [this.first, this.second, this.third];
    if (!arr.every(side => side > 0)) throw 'Length violated';
  }

  validateEquality() {
    let sum = this.first + this.second >= this.third;
    let sum1 = this.first + this.third >= this.second ;
    let sum2 = this.second + this.third >= this.first ;

    if (!(sum && sum1 && sum2)) throw 'Side equallity violated';
  }
}

module.exports = Triangle;

class RomanNumeral {
  constructor(num) {
    this.number = num;
  }
  
  static map = {
     M: 1000,
    CM: 900,
     D: 500,
    CD: 400,
     C: 100,
    XC: 90,
     L: 50,
    XL: 40,
     X: 10,
    IX: 9,
     V: 5,
    IV: 4,
     I: 1
  }

  toRoman() {
    let result = '';
    let toConvert = this.number;

    Object.keys(RomanNumeral.map).forEach(numeral => {
      let value = RomanNumeral.map[numeral];
      let multiplier = Math.floor(toConvert / value);
      let remainder = toConvert % value;

      if (multiplier > 0) {
        result += (numeral.repeat(multiplier));
      }

      toConvert = remainder;
    }); 
    
    return result;
  }

}

/*
r = new RomanNumeral(3);
console.log(r.toRoman());
r = new RomanNumeral(9);
console.log(r.toRoman());
*/

module.exports = RomanNumeral;

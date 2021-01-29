// Display a letter made diamond on the console.
//
// In: letter
// Out: letter made diamond
// 
// Validate input??
//
// Problem:
//    based on input figure out the needed dimentions
//      - width/heigth is always an odd number
//
//  A -> A 1
//  B -> .A.  3
//       B.B 
//       .A.
//
//  C -> ..A..  5
//       .B.B. 
//       C...C
//       .B.B.
//       ..A..    1, 3, 5, 7, 9, 11
//                A, B, C, D, E, F
//  D -> ...A... 7
//       ..B.B..
//       .C...C.
//       D.....D
//       .C...C.
//       ..B.B..
//       ...A...
// 
// Lines: 
//    - one A and rest spaces.
//    - two letters and rest spaces
//    -  number of spaces width - 2
//    - number of spaces inreases by 2 each new line
//
// One line has an odd width
//    one entire diamond has odd width and heigth and both are equal
//    
//    First and last only have one letter, the rest are spaces.
//
// Based on input get W and H, map input letter to a number.
//    based on that number the piramid will be created.
//

class Diamond {
  constructor(finalLetter) {
    this.finalLetter = finalLetter;
    this.width = this.generateWidth(finalLetter)
    this.space = ' ';
  }

  static makeDiamond(l) {
    let diamond = new Diamond(l);
    let finalResult = '';
    
    // figure out where to place the letters
    // print away
    finalResult += diamond.placeHeadTail();

    if (!(diamond.width === 1)) {
      finalResult += diamond.getDiamond();
      finalResult += diamond.placeHeadTail();
    }  

    return finalResult; 
  }

  placeHeadTail() {
    let numSpaces = this.width - 1;
    if (numSpaces === 0) return 'A\n';

    let half = numSpaces / 2;
    let res = this.space.repeat(half) + 'A' + this.space.repeat(half) + '\n';

    return res;
  }

  generateWidth(letter) {
    let letterCode = letter.charCodeAt(0);
    let asciiCount = 65;
    let width = 1;

    while (asciiCount < letterCode) {
      width += 2;
      asciiCount++;
    }

    return width;
  }

  getDiamond() {
    let numEdge = (this.width - 3) / 2; // - 1 || + 1
    let numCent = this.width - (this.width - 1); // + 2 || - 2
    let result = '';
    let letterCode = 66;
    let letter = '';
    let up = true;

    for (let i = 0 ; i < this.width - 2 ; i++) {
      letter = String.fromCharCode(letterCode);
      result += this.getLine(numEdge, letter, numCent); 
      
      if (up) {
        numEdge--;
        numCent += 2;
        letterCode++;
      } else {
        numEdge++;
        numCent -= 2;
        letterCode--;
      }

      if (letterCode === this.finalLetter.charCodeAt(0)) {
        up = false;
      }
    }

    return result;
  }

  getLine(e, l, c) {
    let result = '';
    let edge = e === 0 ? '' : this.space.repeat(e);
    let center = this.space.repeat(c);

    return edge + l + center + l + edge + '\n';
  }
}

module.exports = Diamond;

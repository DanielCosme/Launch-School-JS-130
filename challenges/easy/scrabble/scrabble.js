//  Write a program that, given a word, computes the Scrabble score for that 
//  word.

class Scrabble {
  constructor(word) {
    this.word = word ? word : '';
  } 

  score() {
    let result = 0;
    let current;

    for (let idx = 0 ; idx < this.word.length ; idx++) {
      current = this.word[idx];
      result += this.getCharScore(current);  
    }

    return result;
  }

  static score(word) {
    return new Scrabble(word).score(); 
  }

  getCharScore(char) {
    switch(char) {
      case 'd':
      case 'g':
        return 2;
      case 'b':
      case 'c':
      case 'm':
      case 'p':
        return 3
      case 'f':
      case 'h':
      case 'v':
      case 'w':
      case 'y':
        return 4
      case 'k':
        return 5
      case 'j':
      case 'x':
        return 8;
      case 'q':
      case 'z':
        return 10;
      default:
        return 1;
    }  
  }
}

module.exports = Scrabble;


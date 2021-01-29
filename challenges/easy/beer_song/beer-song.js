// Problem: I want a program that can generate 99 bottles of Beer song
//
// Req: 
//    - each verse needs to be number indexable
//    - if a verse if x it alse contains x - 1 bottles of beer
//    - each line (anyting that ends with a '.') ends with '\n'
//    - each verse ends with a '\n'
//    - the rest of the text is static and does not change, only the 
//        number of bottles.
//    - verses must be able to be queried based on range (x to y)
//    - a single verse must be able to be retrieved
//    - the whole song must be able to be retrieved
//    - there is a new line character between verses
// 
// Data structures: numbers and strings (combination)
//
// Algorithm (steps)
//   create template verse

const BeerSong = {
  verse(...num) {
    if (num.length === 1) return getVerse(num[0]);

    let newLine = '\n';
    let result = '';

    for (let i = num[0] ; i > num[1] - 1; i--) {
      if (i === num[1]) newLine = '';

      result += getVerse(i) + newLine; 
    }    
    
    return result;
  },

  verses(high, low) {
    return this.verse(high, low);  
  },

  lyrics() {
    return this.verses(99, 0);
  }
}


function getVerse(num) {
  let bottle = 'bottle';
  let bottles = 'bottles';
  let top = num;
  let bottom = num - 1;

  let sentence1 = `${top} ${bottles} of beer on the wall, ${top} ${bottles} of beer.\n`
  let sentence2 = "Take one down and pass it around, "
  let sentence3 = `${bottom} ${bottles} `;
  let end = "of beer on the wall.\n"

  if (num === 2) {
    sentence3 =  `${bottom} ${bottle} `;
  }
  else if (num === 1) {
    sentence1 = `${top} ${bottle} of beer on the wall, ${top} ${bottle} of beer.\n`
    sentence2 = "Take it down and pass it around, "
    sentence3 =  `no more ${bottles} `;
    
  }
  else if (num === 0) {
    sentence1 = `No more ${bottles} of beer on the wall, no more ${bottles} of beer.\n`
    sentence2 = "Go to the store and buy some more, 99 bottles "
    sentence3 = '';
  }

  return sentence1 + sentence2 + sentence3 + end;
}

module.exports = BeerSong;

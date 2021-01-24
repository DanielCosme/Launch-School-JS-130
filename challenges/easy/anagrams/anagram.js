class Anagram {
  constructor(str) {
    this.word = str;
  }

  match(m) {
    let sortedWord = this.word.toLowerCase().split('').sort().join("");
    let mCopy = [...m].map(s => s.toLowerCase().split('').sort().join(''));
    let result = [];
    
    for (let idx = 0 ; idx < m.length ; idx++) {
      let sor = m[idx];
      let org = mCopy[idx];
      
      if (sor.toLowerCase() === this.word.toLowerCase()) continue;

      if (org === sortedWord) {
        result.push(sor); 
      }
    }

    return result;
  }
}

module.exports = Anagram;

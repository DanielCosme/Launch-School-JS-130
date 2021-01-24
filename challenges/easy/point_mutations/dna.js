/* 
 Write a program that can calculate the Hamming distance between two DNA strands.

A mutation is simply a mistake that occurs during the creation or copying of a 
nucleic acid, in particular DNA. Because nucleic acids are vital to cellular 
functions, mutations tend to cause a ripple effect throughout the cell. Although 
mutations are technically mistakes, a very rare mutation may equip the cell with 
a beneficial attribute. In fact, the macro effects of evolution are attributable 
by the accumulated result of beneficial microscopic mutations over many generati
ons.

The simplest and most common type of nucleic acid mutation is a point mutation, 
which replaces one base with another at a single nucleotide.

By counting the number of differences between two homologous DNA strands taken 
from different genomes with a common ancestor, we get a measure of the minimum 
number of point mutations that could have occurred on the evolutionary path 
between the two strands.

This is called the Hamming distance.
*/

// In: String vs String
// Out: Number
// Data Structure: String
//
// Problem: 
//    calculate the number of different characters on the same
//    index from two different strings.
//      If characters are different
//          ++
//
//  Requeriments:
//    If lengths are different compare until the length of 
//    the shortest one.
//
// Pseudo code
//    If length not equal
//      Pick the shortest string as the iterator
//    
//    Iterate over string comparing the characters in both strings at
//    the same index.
//      if not equal
//        hamming_distance++
//
//    return hamming_distance


class DNA {
  constructor(dna) {
    this.dna = dna;
  }

  hammingDistance(dna2) {
    let distance = 0;
    let len = Math.min(this.dna.length, dna2.length);

    for (let idx = 0 ; idx < len ; idx++) {
      let [comp, comp2] = [this.dna[idx], dna2[idx]];
      if (comp !== comp2) distance++;
    }

    return distance;
  }
}

module.exports = DNA;

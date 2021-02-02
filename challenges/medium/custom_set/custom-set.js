class CustomSet {
  constructor(collection = []) {
    this.set = Object.create(null);
    this.insertFromCollection(collection);
  }

  add(element) { 
    this.set[element] = element 
    return this;
  }

  insertFromCollection(collection) {
    for (let idx = 0 ; idx < collection.length ; idx++) {
      this.add(collection[idx]);
    }
  }

  union(externalSet) {
    return new CustomSet([...externalSet.getSet(), ...this.getSet()]);
  }

  difference(externalSet) { return this.interOrDiff(externalSet, true) } 
  intersection(externalSet) { return this.interOrDiff(externalSet, false) }

  interOrDiff(externalSet, difference = false) {
    return new CustomSet(this.getSet().filter(value => {
      let test = externalSet.getSet().includes(value);
      return difference ? !test : test;
    }))
  }

  isSame(externalSet = []) {
    if (this.getSet().length !== externalSet.getSet().length) return false;
    return this.isSubset(externalSet);
  }

  isDisjoint(externalSet) { return this.subOrDis(externalSet, true); }
  isSubset(externalSet) { return this.subOrDis(externalSet, false); }

  subOrDis(externalSet, disjoint = false) {
    return this.getSet().every(value => {
      let test = externalSet.contains(value);  
      return disjoint ? !test : test;
    }) 
  }

  contains(query) { return this.set[String(query)] ? true : false } 
  getSet() { return Object.values(this.set) }
  isEmpty() { return this.getSet().length === 0 }
}

module.exports = CustomSet;




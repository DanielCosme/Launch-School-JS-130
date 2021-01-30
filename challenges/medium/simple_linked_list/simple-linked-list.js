//
// Implement a Single-ly linked list
//    element (link) is a different class
//      contains: 
//          a pointer to the next element.
//          a boolean telling if its tail or not
//          a reference to the actual data.
//
//          a method that returns the value of tail
//          a method that returns a reference to the next pointer
//
// Linked list class:
//    properties:
//      pointer to:
//          - head
//          - tail (is the next to be out always)
//          - size
//
//    methods:
//      - size of list
//      - head() --> returns head property
//      - tail() --> returns tail property
//      - peek() --> returns current tail property without modifying
//      - pop() --> pops (returns and delete) current tail, assign new tail
//      - push() --> add element to list
//      - toArray() --> returns the array representation of the list
//      - fromArray() --> make list from array --> static
//      - revere() --> reverses list
//

class SimpleLinkedList {
  constructor() {
    this._head = null;
    this.tail = null;
    this._size = 0;
  }

  static fromArray(arr) {
    let list = new SimpleLinkedList();
    arr = arr || [];
      
    [...arr].reverse().forEach(value => list.push(value));

    return list;
  }

  push(value) {
    let element = new Element(value);

    if (this.tail === null) {
      this.tail = element; 
    } else {
      element.nextElement = this._head; 
      element.setTail(false);
    } 

    this._head = element;
    this._size++;
  }

  pop() {
    let ret = this._head;

    if (this._size === 1) this.tail = null;

    this._head = this._head.next();
    this._size--;

    return ret.datum();
  }

  toArray() {
    let arr = [];
    let n = this._head;

    while (n) {
      arr.push(n.datum()); 
      n = n.next();
    }

    return arr;
  } 

  reverse() {
    let list = new SimpleLinkedList();
    let n = this._head;

    while (n) {
      list.push(n.datum());
      n = n.next();
    } 

    return list;
  }

  peek() { return this._head ? this._head.datum() : this._head }
  head() { return this._head }
  size() { return this._size }
  isEmpty() { return this._size === 0}

  print() {
    let n = this._head;
    while(n) {
      console.log(n.datum())
      n = n.next();
    } 
  }
}

class Element {
  constructor(value, next = null) {
    this.value = value;
    this.tail = true;
    this.nextElement = next;
  }

  isTail() { return this.tail; }
  datum() { return this.value; }
  next() { return this.nextElement; }
  setTail(val) { this.tail = val }
}

module.exports = {
  Element,
  SimpleLinkedList
}


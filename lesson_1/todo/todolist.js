"Use Strict";

class Todo {
  static DONE_MARKER = 'X';
  static UNDONE_MARKER = ' ';
  
  constructor(title) {
    this.title = title; 
    this.done = false;
  }

  toString() {
    let marker = this.isDone() ? Todo.DONE_MARKER : Todo.UNDONE_MARKER;
    return `[${marker}] ${this.title}.`;
  }

  markDone() {
    this.done = true;
  }

  markUndone() {
    this.done = false;
  }

  isDone() {
    return this.done;
  }

  getTitle() {
    return this.title;
  }
}

// omitted code

// This class represents a collection of Todo objects.
// You can perform typical collection-oriented actions
// on a TodoList object, including iteration and selection.

class TodoList {
  constructor(title) {
    this.title = title;
    this.todos = [];
  }

  add(todo) {
    if (!(todo instanceof Todo)) {
      throw new TypeError("Only todo's accepted");
    }

    this.todos.push(todo);
  }

  size() { return this.todos.length; }

  first() { return this.todos[0]; }
  last() { return this.todos[this.size() - 1]; }

  itemAt(index) {
    this.validateIndex(index);
    return this.todos[index];
  }

  isDone() {
    return this.todos.every(todo => todo.isDone());
  }

  markDoneAt(index) {
    this.validateIndex(index);
    this.todos[index].markDone();
  }

  markUndoneAt(index) {
    this.validateIndex(index);
    this.todos[index].markUndone();
  }

  validateIndex(index) {
    if (!(index in this.todos)) {
      throw new ReferenceError(`Invalid index: ${index}`);
    }
  } 

  pop() { return this.todos.pop(); }
  shift() { return this.todos.shift(); }

  removeAt(index) {
    this.validateIndex(index);
    return this.todos.splice(index, 1); 
  }

  forEach(callback) {
    this.todos.forEach(callback);
  }
  
  toString() {
  /watch?v=qdWhFjmuGmM  let ret = `--- ${this.title} ---\n`;

    this.todos.forEach(todo =>  { 
      ret += todo.toString() + '\n';
    });

    return ret;
  }

  filter(callback) {
    let ret = new TodoList(this.title);

    this.forEach(todo => { 
      if(callback(todo))  {
        ret.add(todo);
      }
    });

    return ret;
  }

  findByTitle(title) {
    let ret;
    let first = false;

    this.forEach(todo => {
      if (todo.getTitle() === title && !first) {
        ret = todo; 
      }
    });

    return ret;
  }

  allDone() {
    return this.filter(todo => todo.isDone());
  }

  allNotDone() { return this.filter(todo => !todo.isDone())}

  markDone(title) {
    let todo = this.findByTitle(title);
    if (todo) todo.markDone();
  }

  markAllDone() {
    this.forEach(todo => todo.markDone());
  }

  markAllUndone() {
    this.forEach(todo => todo.markUndone());
  }

  toArray() { return [].concat(this.todos); }
}


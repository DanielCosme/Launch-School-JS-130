function newStack() {
  let stack = [];

  return {
    push(e) {
      stack.push(e); 
    },
    
    pop() {
      stack.pop();
    },

    printStack() {
      console.log(stack);
    }, 
  }
}

let s = newStack();
s.push(1);
s.push(3);
s.pop();
s.printStack();

console.log(s.stack);

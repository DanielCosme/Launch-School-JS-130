# 139 Assessment Study-Guide
## JavaScript Topics

### Hoisting
#### What is hoisting?

Hoisting is a process in which variable, function and class definitions are moved up towards the 
top of their respective scope in JavaScript. All of this happens before code execution in a phase 
called creation phase, during this phase the interpreter parses the file and creates a table of 
sorts that contains variables/references in order to correctly "Enforce" (for lack of a better word) the 
lexical scoping rules of each one of them when the code is actually executed.

#### What is the Role of hoisting in JS?
The role is that of being able to know what is the scope of every variable/reference on the code
before execution, just by looking at the semantic structure of the code at hand.

Another role is that of being able to explain why or why not some variables and/or functions might 
or might not be accessible in different scopes.

The role is that as JavaScript developers we need a visual way of identifying and understanding 
some non-intuitive behavior with JavaScript function and variable definitions the terms of scope, 
and the concept of hoisting is the mechanism used to explain it.

In reality variables and function definitions don't really get moved, they are used as means to 
explain what is it that happens when JavaScript first parses the code on the creation phase.

Only the names (declarations) are hoisted, the body of functions and variable assignments do no get
hoisted, ever.

#### How do functions interact with hoisting?
Function declarations get hoisted before anything else and to the top of their scope:
```javascript
function func() {} // hoisted to the top.
```
If a function is defined as an expression like so: 
```javascript 
const foo = () => 'Hello, World!';
```
the name `foo` will get hoisted at the top of its scope but it will be treated as a variable, and
it will be hoisted after any function declaration. Moreover, if the function expression is assigned
to a variable with the keyword `var` as opposed to the keywords `let` or `const` the scoping rules
for the function itself will change, because again the scoping rules for regular variables are 
going to be applied; this is not of much concern as only names/declarations are hoisted.

Functions have (of course) function scope, meaning they get hoisted to the top of their enclosing
function.


#### How var works?
The keyword `var` is used to declare new variables, it is the older (less optimal) way of declaring
variables in JavaScript, the reason is not a good practice to write modern JavaScript using this keyword is 
because of the scoping rules that the new variables will come with; this rules can create
unintended bugs and harder to understand code.

Variables created with `var` will have function scope, they get hoisted to the top of their enclosing 
function body.

#### How, `var`, `let` and `const` interact with hoisting?
They all get hoisted to the top of their enclosing scope, based on their respective scoping rules.

They interact with hoisting in the sense that `var` hoisting occurs differently from `let` and 
`const`. Technically all 3 get hoisted, but their scoping rules are going to be different no matter
the data type they have.

#### How do they differ?
With `var` the variable declarations get hoisted on top of their **enclosing function's** body, in terms 
of scope this is what we call to have **function scope.**

With `let` and const the variable names get hoisted on top of their enclosing block, this is what we 
to have **block scope**.

#### In what part does hoisting play in the way a specific program works?
Hosting can determine if a program will crash or not depending on how variables where hoisted, for 
example:

```javascript
function func() {

  if (true) {
    let bar = 'block scope';
    var foo = 'function scope';
  }

  console.log(foo); // can reference the name, cannot use the intended value, but it will not crash the program.
  console.log(bar); // cannot use the name nor can it use the value, program crash. This is desirable as it crashes it helps the programmer to not ship a silent bug in the code.
}

func();
```
The implications of the previous example are that in this case it is desirable that our program 
crash to a halt given that there is a bug in which we are using a variable whose value is out of
scope, when it crashes the programmer will see his mistake and fix it. If this code is written
only using the `var` keyword the program will not crash, but it will have a bug, it will not work
as the programmer intended a **silent bug**. Silent bugs are extremely hard to debug because there
are no visible warnings, crashes, exceptions telling the programmer about it.

Understanding hoisting is vital in order the ship less buggy programs and/or to find hidden bugs
more efficiently.

#### How hoisting and closures relate to each other.
They relate to each other in the sense that the way a variable is declared can heavily influence how
it gets into a closure via its scoping and hoisting rules. If declared incorrectly the variable can
lead to hard to detect bugs, for example:

```javascript
const arr = [];

for (let idx = 1 ; idx <= 4 ; idx++) {
  arr.push(() => console.log(idx));
}

arr.forEach(func => {
  func();
});
// print 
// 1
// 2
// 3
// 4
// Definitely the intent.
```
Declaring the index with `let` gives us the desired result by creating a closure with the `idx` 
variable in the newly crated arrow functions being pushed into the array for later invocation.
```javascript
const arr = [];

for (var idx = 1 ; idx <= 4 ; idx++) {
  arr.push(() => console.log(idx));
}

arr.forEach(func => {
  func();
});
// print 
// 5
// 5
// 5
// 5
// Definitely not intended.
```
Just by declaring the index with `var` created a bug, and more importantly the program run without issues,
however the final result is a far-cry from what the programmer intended.

### Strict Mode
#### What is strict mode?
`Strict mode` is a JavaScript **pragma statement**, which tells the its interpreter to parse the
document with a different set of rules, these rules can drastically (failing silently vs crashing) change the behavior of a 
JavaScript program and depending on the code they can determine if the interpreter will decide to 
crash the program or let it run.

By default if there is no `strict mode` declared the program will with the so called `sloppy mode`.

To enable it just write this: `use strict`

##### How does it differ from "sloppy mode"?
The changes in the rules are many, but the more representative and changing in the programmer 
experience are (when using *strict mode*):

- Using undeclared variables is now Ilegal.
- Not using 'this' in a method will now raise an error.
- The implicit execution context is no longer the global object, now it evaluates to undefined.
- Enabled by default in `Class` definitions.
- Some silent errors will now throw an error and crash the program.
- Runs faster.
- Restrict names and syntax that could conflict with future versions of JS.

#### How do you enable strict mode at the global or function level?

At the global level just write it at the beginning of the file or module.
At function level just write it at the top of the function's body.
#### When is strict mode enabled automatically?
In JS modules strict mode is set be default??
Inside the body of a class declaration.

#### When should you use (or not use) strict mode?
One should use it when writing new code, new functions.
One should not use it when altering/refactoring existing code bases, it could cause enormous
amounts of damage.

### Closures, scope, and private data
#### What is a closure? 
A mechanism which enables a function to access (when invoked) all variables/references available
in scope at the time when the function was crated/defined, regardless if they are not in scope at 
invocation time.

#### What is in a closure?
A closure is the conjunction of the body of a function and its enclosing scope at the moment
of defining the function.

#### When is closure created?
At the time the body of a function is created.

#### What is the relationship between closures and scope?
They relate to each other in the sense that variables to be saved/remembered in a closure are 
chosen by the scope of the function at the time of definition. On the other hand, when a function
is invoked part its scope is determined by the variables/references in the closure. In other words,
at function definition the closure to be created depends on the scope, and at function 
invocation the scope is Dependant on the closure; they are somewhat interdependent.

#### What do we mean when we say that closures are defined lexically?
It has the same meaning as: closures are defined by their current scope, which in turn is what is 
actually defined lexically. Being defined lexically refers to being defined by how the code is 
written, its structure, not dynamically at running time, but statically just by virtue of how the 
code is organized. The implications of the previous statement are that a programmer is able to tell
the scope of variables just by looking at source code, that the interpreter on creation phase or a 
linter could potentially look out for scoping issues/bugs way before code execution (if properly 
configured). E.g. some linters can be configured so that unused variables are flagged.

### What is a partial function application?
Is a programming technique in which the programmer pre-apply's or remembers some arguments of a
function before its invocation, or in other words it partially apply the function's arguments. By 
doing this the function could receive some some of its arguments before invocation and the rest of 
them during (invocation).

In JavaScript, partial function application can be implemented by the use of closures and the 
first-class nature of functions in the language.

### IIFEs
##### What are IIFES'S?
The acronym stands for Immediately invoked function expressions. As the name suggests, they are
function expressions that are immediately invoked at definition.

##### How do you use them?
In JavaScript there is more than one way of using them, generally speaking you want to make any
function definition an expression, the final value evaluated/returned being a function that
gets invoked right away.

```javascript
const foo = "Hello World!";

(function(arg) { 
  console.log(arg)
})(foo)

let bar = function(arg) {
  return arg
}(foo) // When the function def is not at the beginning of the line
  
console.log(bar);

((arg) => { console.log(arg) })(foo);
```
##### How do you use IIFE'S to create private scopes?
It is a simple as placing all the code inside of the function's body and invoke it immediately, 
as this is one of the uses for IIFE's.

```javascript
let number = -100;
let number2 = 1;
console.log(function() {
  let number = 1;
  let number2 = 2;

  // important logic and meaningfull names in private scope go here
  return number + number2; // 3, not -99.
}())
```

##### How do you use blocks to create private scopes?
Similarly as the previous example, but simpler:
```javascript
let number = -100;
let number2 = 1;

{
  let number = 2;
  let number2 = 4;
    
  // important logic and meaningfull names in private scope go here
  console.log(number + number2); // 6, not -99.
}
```
##### How do you use IIFE'S to create private data?
Like so:
```javascript

let getMySecret = (function(mySecret, key) {
  return function(arg) {
    if (key === arg) return mySecret;
  }
})('This is my secret.', 'key')

console.log(getMySecret('key')); // This is my secret.
console.log(getMySecret()); // undefined
console.log(getMySecret.mySecret) // undefined
console.log(getMySecret().mySecret) // TypeError

```

### Shorthand notation (understanding, not using)
  - **Rest operator** 
    This is used in order to take several values and compound then into a single data structure.
    ```javascript
    function func(...args) {
        args.forEach((arg, idx) => {
        console.log('Argument #', idx + 1,'is', arg);
      });
    }

    func('My', 'name', 'is', 'daniel')
    ```

  - **Spread operator**
    The opposite of the `rest` operator, in this case we take a data structure and 'return' all its 
    elements individually.
    ```javascript
    function func(one, two, three, four) {
      console.log(one, two, three, four);
    }

    arr = ['1', '2', '3', '4'];

    func(...arr);
    ```
  - **Array destructuring**
    It is how we get elements from an array and easily assign them to single values, or other data structures.
    In other words is a shorthand way of extracting elements and collections from an array.
    ```javascript
    arr = ['1', '2', '3', '4', '5'];

    let [one, two, /* ommited value '3' */ , ...theRest] = arr;

    console.log(one, two, theRest); // logs: 1 2 [ '4', '5']
    ```
    The `rest` element has to be always the last element, as it is a get the *rest* of the elements
    in the array kind of statement.
    
  - **Object destucturing**
    It is the same as Array destructuring, only it uses bracket notation and we destructure elements 
    (properties) via the key (name).
    ```javascript
    let obj = {
      'one': 1,
      'two': 2,
      'three': 3,
      'four': 4
    }

    let { one, four } = obj;

    console.log(one, four); // logs 1 4
    ```
### Modules (CommonJS)
##### What are the benefits of using modules?
They allow for:
- Better project organization.
- Separation of concerns.
- Exposing only the desired interface of the module (encapsulation).
##### How to use and create common JS modules?
A module is JavaScript file, to use it the programmer just need to create the .js file on the 
operating system and the interpreter will treat each individual file as a JS module.
##### How common JS modules pass exported items to the importing module?
To **make available** code in a module to another module the following syntax must be used:
```javascript
const myConst = 'Some value';
function func() {}

module.exports = {
  func,
  myConst
}
```
We assign the desired available code to the property `exports` in the `module` object, then
the interpreter will know that the programmers intent is to **export** that piece of code.

If something in the module is not explicitly exported is not directly accessible, it is effectively
private.

Now it is the responsibility of the module that requires the incoming module to correctly request
it. To request a module we use the `request` method, the parameter is a path to the desired module.
If the module is imported to the project via **npm** only the name is needed, not path, no file 
extension. If the module is another file on the project (non-npm imported) the *relative* path needs
to be passed onto the function, no file extension needed.

```javascript
const express = require('express');
const myPersonalLib = require('../lib/someLib');
```

### Exceptions
##### What are exceptions?
It is a mechanism that is used for project wide error handling by the use of built-in language 
features. More specifically an exception is an error that is explicitly **raised** to indicate
that something went wrong, an exception is usually an object and it can contain useful properties (information) to
**handle** the error.

##### Given an exception error message, identify the exception type and understand the meaning.
Exceptions contain error messages, and by their type the programmer can understand it meaning and
more importantly, what to do with it.

##### Understand the terms raise, throw, re-throw and catch.
When the term 'raise' an exception is used it means to throw an exception in JavaScript.

To **throw** and exception means to **raise an error** in the program.

To **catch** an exception means that when it is raised there is a piece of code that will receive it
(so to speak), and pass it onto a block of code that will do something (handle) about it.

To **re-throw** an exception is to catch an exception and throw it again, this of course happens in
a catch block.

##### Know the syntax for the "throw" and "try/catch" statements.
The proper syntax for exceptions are like so:

```javascript
function otherFunc() {
  // lets asume an error happend here and I need to throw an exception
  throw 'This can be an exception, just a string';
}

function func() {
  try {
    otherFunc();
  } catch (e) {
    // We handle the exception by logging it...
    // ...then we carry on with the program.
    console.log(e);

    // if we re-throw it will keep going up the stack until a catch block is found.
    // if no catch block is found the program crashes.
    if (false) throw e; 
  }

  console.log('We carry on');
}

func();
// Logs:
// This is an exception
// We carry on
```

##### When is appropriate to throw an exception?
- Only in exceptional (unexpected/not-normal) cases.
- When the error can/should not be ignored.
##### When is appropriate to catch one?
- When we can do something about it.
- When we can recover from the error without raising another exception.

### Side Effects and Pure Functions 
A pure function is defined by 3 characteristics:
  - It has no side effects.
  - The return value is a direct consequence of computing the arguments.
  - The return value is always the same given the same arguments (deterministic).

A function that has a **side effect** is said to have any of the following characteristics:
  - Any sort of I/O operation (network, disc, user input), that is non-local to the program.
  - Does not return a meaningful value.
  - Invoke a function that has a side effect.
  - Mutates or reassigns any of its non-local references.
  - Raises an exception.


### Testing With Jest

##### Why write tests?
There are many good reasons to write tests. The most basic one is to **prevent regression** in code.
Regression happens when functionality is added to the code and now it does not work as it 
previously did, this usually manifest itself in bugs, exceptions, erratic outputs, etc. The code
regressess itself to a worst state in functionality before the changes, this is why is called 
regression, is the act of regressing.

##### Testing terminology
  - **Test suite**
    A test suite is the collection of all tests that belong to a project.
  - **Test (spec)**
    The basic unit of code in which the tests are tried out.
  - **Assertion (expectations)**
    The condition to which the test is going to be matched against (the expected result).

##### Jest
###### expect and matchers (toBe and toEqual especially)
The `expect` method will take the result that we got and is going to be **compared** against
the result of the *matcher* method provided along with it's argument, like do:

```javascript
test('Dummy test', () => {
  // test code
  let num = 5;
  let num2 = new Number(5);

  expect(num).toBe(5); // evaluates values (primitives)
  expect(num2).toEqual(new Number(5)); // evaluates properties of objects 
  // tests will pass.
});
```

###### SEAT approach
This approach is a framework for running tests, it talks about running tests in project 
following it's four steps:

  - **S**etup
    Setup the necessary objects (usually initializations);
  - **E**xecute
    Code that runs on each test to reach the desired condition to be tested on the assertion.
  - **A**ssert
    Where the comparison of the **result** against the **expectation** occurs.
    The result of the assertion determines if a test pass or fails.
  - **T**earup
    Clean up is done (network or db connections).

###### Understanding code coverage
Coverage refers to what is the percentage of lines of code that gets executed on the test suite
for a project. Code coverage serve to have a better idea of code quality, because if a piece of 
code has coverage it means it has been tested and as a result can be more resilient of additions
and modifications, because it is guarded from regression.

###### Writing tests
  - Anatomy of a test written in jest.

  Describe method, takes 2 arguments: (module, class) general functionality.
   - Title 
   - Callback

    Inside the callback is where tests occur.

  Test (function, method) more atomic pieces of code.

### Packaging Code

##### When to use them (npm, npx, babel, eslint)
**npm** is used to: 
 - Install packages
 - Manage dependencies

**npx** is used to run packages just one tine, no installation.
**babel** When you need to transpile your code to work with older JavaScript versions like
out of date browsers.
**eslint** when you want to analyze source code for naming convention violations among others,
in other words to provide static analysis of your code.

###### How to use them (npm, npx, babel, eslint)
All of them are comand line programs which you ivoke on your shell.
###### How they work (npm, npx, babel, eslint)
###### Project directory layout
There has to be a node_packages, package.json, package-lock.json
###### what is transpilation
###### npm and npx
###### local vs global packages
###### package.json and package-lock.json
###### npm scripts


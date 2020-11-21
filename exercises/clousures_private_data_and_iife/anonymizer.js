'use strict';

function log(str) {
  console.log(str, '\n');
}

const Account = (function() {
  let userEmail; 
  let userPassword; 
  let userFirstName;
  let userLastName;
  let displayName;

  function isValidPassword(pass) { return pass === userPassword }  

  function anonimize() {
    const sequence = 'abcdefghijkmlopqrstuvwxyz1234567890QWERTYUIOPLKJHGFDSAZXCVBNM'.split('');
    let res = '';

    for (let i = 0 ; i < 16 ; i++) {
      let index = Math.floor(Math.random() * sequence.length);
      res += sequence[index];
    }

    return res; 
  }

  function init(email, password, firstName, lastName) {
    userEmail = email;
    userPassword = password;
    userFirstName = firstName;
    userLastName = lastName;
    this.displayName = anonimize();
    return this;
  }

  function resetPassword(pass, newPass) {
    if (!isValidPassword(pass)) return 'Invalid Password';
    userPassword = newPass;
    return true;
  }

  function firstName(pass) {
    if (!isValidPassword(pass)) return 'Invalid Password';
    return userFirstName;
  }

  function reanonymize(pass) {
    if (!isValidPassword(pass)) return 'Invalid Password';
    this.displayName = anonimize();
    return true;
  }

  function lastName(pass) {
    if (!isValidPassword(pass)) return 'Invalid Password';
    return userLastName;
  }

  function email(pass) {
    if (!isValidPassword(pass)) return 'Invalid Password';
    return userEmail;
  }

  return {
    init,
    resetPassword,
    firstName,
    reanonymize,
    displayName,
    lastName,
    email,
  }

})();

let fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');
console.log(fooBar.firstName);                     // returns the firstName function
console.log(fooBar.email);                         // returns the email function
console.log(fooBar.firstName('123456'));           // logs 'foo'
console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
console.log(fooBar.displayName);                   // logs 16 character sequence
console.log(fooBar.resetPassword('123', 'abc'))    // logs 'Invalid Password'
console.log(fooBar.resetPassword('123456', 'abc')) // logs true

let displayName = fooBar.displayName;
fooBar.reanonymize('abc');                         // returns true
console.log(displayName === fooBar.displayName);   // logs false

let bazQux = Object.create(Account).init('baz@qux.com', '123456', 'baz', 'qux');
console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
console.log(fooBar.email('abc'));                  // logs 'Invalid Password'

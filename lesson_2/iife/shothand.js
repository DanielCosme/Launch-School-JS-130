let obj = {
  name: 'Daniel',
  lastName: 'Cosme',
  location: 'Laval',
  age: 28,
}

let { name, age } = obj;

function log({name, lastName}) {
  console.log('name', name, 'last name', lastName);
}

log(obj);

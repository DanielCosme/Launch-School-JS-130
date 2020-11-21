function Person(fn, ln, age, gender) {
  this.firstName = fn;
  this.lastName = ln;
  this.age = age;
  this.gender = gender;
}

Person.prototype = {
  fullName() { return this.firstName + ' ' +this.lastName; },
  communicate() { console.log('Communicating') },
  eat() { console.log('Eating'); },
  sleep() {console.log('Sleeping') },
}

Person.prototype.constructor = Person;

function Doctor(fn, ln, age, gender, sp) {
  Person.call(this, fn, ln, age, gender);
  this.specialization = sp;
}

Doctor.prototype = Object.create(Person.prototype);
Doctor.prototype.diagnose = function () { console.log('Diagnosing') };
Doctor.prototype.constructor = Doctor;

function Professor(fn, ln, age, gender, subject) {
  Person.call(this, fn, ln, age, gender);
  this.subject = subject;
}

Professor.prototype = Object.create(Person.prototype);
Professor.prototype.teach = function () { console.log('Teaching') };
Professor.prototype.constructor = Professor;

function Student(fn, ln, age, gender, degree) {
  Person.call(this, fn, ln, age, gender);
  this.degree = degree;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.study = function () { console.log('Studying') };
Student.prototype.constructor = Student;

function GraduateStudent(fn, ln, age, gender, graduateDegree) {
  Person.call(this, fn, ln, age, gender);
  this.graduateDegree = graduateDegree;
}

GraduateStudent.prototype = Object.create(Student.prototype);
GraduateStudent.prototype.research = function () { console.log('Researching') };
GraduateStudent.prototype.constructor = GraduateStudent;

const Professional = {
  invoice() { console.log('Creating Invoice...'); },
  payTax() { console.log('Paying Tax...' ) },
  logName(extra) { console.log( 'My name is...' , this.firstName, this.age, extra ) },
 }

function delegate(object, methodName, callingObject) {
  return function(...args) {
    return object[methodName].apply(callingObject, args);
  }
}

function extend(object, mixin) {
  let keys = Object.keys(mixin);
  
  keys.forEach(key => {
    object[key] = delegate(mixin, key, object);
  });

  return object;
}


let doctor = extend(new Doctor('foo', 'bar', 21, 'gender', 'Pediatrics'), Professional);
console.log(doctor instanceof Person);     // logs true
console.log(doctor instanceof Doctor);     // logs true
doctor.eat();                              // logs 'Eating'
doctor.communicate();                      // logs 'Communicating'
doctor.sleep();                            // logs 'Sleeping'
console.log(doctor.fullName());            // logs 'foo bar'
doctor.diagnose();                         // logs 'Diagnosing'

let professor = extend(new Professor('foo', 'bar', 21, 'gender', 'Systems Engineering'), Professional);
console.log(professor instanceof Person);     // logs true
console.log(professor instanceof Professor);  // logs true
professor.eat();                              // logs 'Eating'
professor.communicate();                      // logs 'Communicating'
professor.sleep();                            // logs 'Sleeping'
console.log(professor.fullName());            // logs 'foo bar'
professor.teach();                            // logs 'Teaching'
console.log();
doctor.invoice();                          // logs 'foo bar is Billing customer'
doctor.payTax();                           // logs 'foo bar Paying taxes'

Professional.invoice = function() {
  console.log(this.fullName() + ' is Asking customer to pay');
};

doctor.invoice();                          // logs 'foo bar is Asking customer to pay'
professor.invoice();                       // logs 'foo bar is Asking customer to pay'
professor.payTax();                        // logs 'foo bar Paying taxes'

doctor.logName('I added this...');


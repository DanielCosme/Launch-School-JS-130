'strict mode';

let list = makeList();
list.add("peas");
// peas added!

list.list();
// peas

list.add("corn");
// corn added!

list.list();
// peas
// corn

list.remove("peas");
// peas removed!

list.list();
// corn


console.log(list);
function makeList() {
  let list = [];
  let obj = {
    add(value) {
      list.push(value);
    }, 

    list() {
      list.forEach(el => console.log(el));
      if (list.length === 0) console.log('List empty');
      console.log();
    },

    remove(arg) {
      let index = list.indexOf(arg); 
      if (index >= 0) {
        list.splice(index, 1);
      }
    }
  }

  return obj;
}


var a = 1;
var a = 2;

console.log(a);

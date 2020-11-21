'use strict';
const ItemCreator = (function() {

  function isValidName(itemName) {
    return validateWordLength(itemName, 5);
  }

  function validateCategory(category) {
    let cat = category.trim();
    // validate one word.
    if (!isValidName(cat)) return false;

    // validate length.
    let testArr = cat.split(' ').length;
    if (testArr !== 1) return false;

    return true;
  }

  function validateWordLength(word, len) {
    if (!word || word.length < len) return false;
    return true;
  }

  function validateQuantity(q) {
    return !(Number.isNaN(Number(q)));
  }

  function validateAll(name, cat, quant) {
    return (isValidName(name)
    && validateCategory(cat)
    && validateQuantity(quant));
  }

  function createSkuCode(name, category) {
    let first = name.slice(0, 3);
    let last = category.slice(0, 2);
    return (first + last).toUpperCase();
  }

  return function(itemName, category, quantity) {
    if (validateAll(itemName, category, quantity)) {  // valid input? create object.
        this.itemName = itemName;
        this.category = category;
        this.quantity = quantity;
        this.skuCode = createSkuCode(itemName, category);
    } 
    else  { 
      return { isInvalid: true } 
    }
  }
})()

const ItemManager = { 
  items : {},

  create(name, category, quantity) {
    let item = new ItemCreator(name, category, quantity);
    if (item.isInvalid) return false;
    
    this.items[item.skuCode] = item;
  },

  update(code, item) {
    Object.assign(this.items[code], item); 
  }, 

  delete(code) {
    delete this.items[code];
  },

  inStock() {
    this.getInStock().forEach(e => console.log(e) );
  },

  itemsInCategory(category) {
    for (let item in this.items) {
      if (this.items[item].category === category) console.log(this.items[item]); 
    } 
  },

  getInStock() {
    let arr = [];
    for (let item in this.items) {
      if (this.items[item].quantity > 0) { 
        arr.push(this.items[item]);
      }
    }
    return arr;
  },

}

const ReportManager = {
  items : '',

  init(itemsManager) {
    this.items = itemsManager;
  },

  reportInStock() {
    console.log(this.items.getInStock().reduce((acc, curr) => {
      acc.push(curr.itemName); 
      return acc;
    }, []).join(', ')); 
  },

  createReporter(code) {
    let obj = this.items.items;

    function itemInfo() {
      Object.entries(obj[code]).forEach(e => {
        console.log(e[0],' : ' ,e[1]);
      });
    }
   
    return { itemInfo }
  },

}

ItemManager.create('basket ball', 'sports', 0);           // valid item
ItemManager.create('asd', 'sports', 0);
ItemManager.create('soccer ball', 'sports', 5);           // valid item
ItemManager.create('football', 'sports');
ItemManager.create('football', 'sports', 3);              // valid item
ItemManager.create('kitchen pot', 'cooking items', 0);
ItemManager.create('kitchen pot', 'cooking', 3);          // valid item
// returns list with the 4 valid items

ReportManager.init(ItemManager);
// logs soccer ball,football,kitchen pot
ReportManager.reportInStock();


ItemManager.update('SOCSP', { quantity: 0 });
// returns list with the item objects for football and kitchen pot
ItemManager.inStock();
// football,kitchen pot
ReportManager.reportInStock();

// returns list with the item objects for basket ball, soccer ball, and football
ItemManager.itemsInCategory('sports');

ItemManager.delete('SOCSP');
// returns list the remaining 3 valid items (soccer ball is removed from the list)
console.log(ItemManager.items, '\n');
let kitchenPotReporter = ReportManager.createReporter('KITCO');
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 3

console.log();
ItemManager.update('KITCO', { quantity: 10 });
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 10
let a = ReportManager.createReporter('FOOSP');
a.itemInfo();


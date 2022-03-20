//Setter: When a property is set, it implicitly calls a function and the value is passed as an argument
//Getter: When a property is accessed, the value gets through calling a function implicitly
//Getter accessor properties use the keyword 'get'
//Setter accessor properties use the keyword 'set'

//The following example does a good job of showing an object that has both a getter and setter accessor property

class Groceryclass {
  constructor() {
    this.History = [];
  }
//The setter takes a value and adds it to the History array that is a property of the Groceryclass, as well as assigns the value to the _item property
  set item(newItem) {
    this.History.push(newItem);
    this._item = newItem;
  }
//The getter simply allows for the user to access the _item property and see the most recent item added to the list
  get item() {
    return this._item;
  }
}

let walmartList = new Groceryclass();
walmartList.item = 'Eggs';
walmartList.item = 'Bread';
walmartList.item = 'Butter';
console.log(walmartList.History) + console.log(walmartList.item);
//Logs: [ 'Eggs', 'Bread', 'Butter' ] Butter

/* 08. Class Storage - https://judge.softuni.org/Contests/1322/Objects-and-Classes-Exercise

Create a class Storage. It should have the following properties:
•	capacity – a number that decreases when adding a given quantity of products in storage
•	storage – list of products (object). Each product should have:
o	name - a string
o	price – a number (price is for a single piece of product)
o	quantity – a number
•	totalCost – sum of the cost of the products
•	addProduct – a function that receives a product and adds it to the storage
•	getProcuts – a function that returns all the products in storage in JSON format, each on a new line
The constructor should receive a capacity
Paste only the class Storage in judge (Note: all names should be as described)

*/

class Storage {
  capacity;
  storage = [];
  totalCost = 0;

  constructor(capacity) {
    this.capacity = capacity;
  }
  addProduct(product) {
    this.storage.push(product);
    this.capacity -= product.quantity;
    this.totalCost += product.price * product.quantity;
  }
  getProducts() {
    this.storage.forEach((product) => console.log(JSON.stringify(product)));
  }
}
let productOne = {
  name: "Cucamber",
  price: 1.5,
  quantity: 15,
};
let productTwo = {
  name: "Tomato",
  price: 0.9,
  quantity: 25,
};
let productThree = {
  name: "Bread",
  price: 1.1,
  quantity: 8,
};

let storage = new Storage(50);

storage.addProduct(productOne);
storage.addProduct(productTwo);
storage.addProduct(productThree);
console.log(storage.capacity);

let output = storage.getProducts();

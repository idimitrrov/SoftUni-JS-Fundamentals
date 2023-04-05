/* 03. Store Provision - https://judge.softuni.org/Contests/1322/Objects-and-Classes-Exercise

You will receive two arrays. The first array represents a current stock of the local store. The second array will contain products which the store has ordered for delivery.
The following information applies to both arrays:
Every even index will hold the name of the product and on every odd index will hold the quantity of that product. The second array could contain products that are already in the local store. If that happens increase the quantity for the given product .You should store them into an object, and print them in the following format: (product -> quantity)
All of the arrays values will be strings.

*/

function printStoreInventory(currentStockArray, orderedProductsArray) {
  const products = {};
  for (let i = 0; i < currentStockArray.length; i += 2) {
    let productName = currentStockArray[i];
    let productQuantity = Number(currentStockArray[i + 1]);

    products[productName] = productQuantity;
  }

  for (let i = 0; i < orderedProductsArray.length; i += 2) {
    let productName = orderedProductsArray[i];
    let productQuantity = Number(orderedProductsArray[i + 1]);

    if (products.hasOwnProperty(productName)) {
      products[productName] += productQuantity;
    } else {
      products[productName] = productQuantity;
    }
  }
  for (let key in products) {
    console.log(`${key} -> ${products[key]}`);
  }
}

printStoreInventory(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);

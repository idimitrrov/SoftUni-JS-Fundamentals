/* 08. Class Storage - https://judge.softuni.org/Contests/1322/Objects-and-Classes-Exercise

You have to create a sorted catalogue of store products. You will be given the products’ names and prices. You need to order them by alphabetical order. 
The input comes as array of strings. Each element holds info about a product in the following format:
“{productName} : {productPrice}”
The product’s name will be a string, which will always start with a capital letter, and the price will be a number. You can safely assume there will be NO duplicate product input. The comparison for alphabetical order is case-insensitive.
As output you must print all the products in a specified format. They must be ordered exactly as specified above. The products must be divided into groups, by the initial of their name. The group’s initial should be printed, and after that the products should be printed with 2 spaces before their names. For more info check the examples.

*/

function getCatalogue(arrayInput) {
  let products = {};

  arrayInput.forEach((element) => {
    const [item, price] = element.split(" : ");
    products[item] = Number(price);
  });

  const sortedProducts = Object.entries(products).sort((a, b) =>
    a[0].localeCompare(b[0])
  );

  let initial = "";
  console.log(initial);

  sortedProducts.forEach((element) => {
    const currentinitial = element[0][0];
    if (currentinitial !== initial) {
      initial = currentinitial;
      console.log(initial);
    }

    console.log(`${element[0]}: ${element[1]}`);
  });
}

getCatalogue([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]);

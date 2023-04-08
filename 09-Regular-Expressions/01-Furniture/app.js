/*  01 - Furniture  https://judge.softuni.org/Contests/Practice/Index/1706#0

Write a function to calculate the total cost of different types of furniture. You will be given some lines of input until you receive the line "Purchase". For the line to be valid it should be in the following format:
">>{furniture name}<<{price}!{quantity}"
The price can be floating point number or whole number. Store the names of the furniture and the total price. At the end print the each bought furniture on separate line in the format:
"Bought furniture:
{1st name}
{2nd name}
…"
And on the last line print the following: "Total money spend: {spend money}" formatted to the second decimal point.


*/

function furniture(array) {
  console.log("Bought furniture:");

  let totalSum = 0;

  array.forEach((line) => {
    const pattern =
      />>(?<name>[A-Za-z]+)<<(?<price>[0-9]+[.]?[0-9]*)!(?<quantity>[\d]+)/gm;
    let result = pattern.exec(line);

    if (result) {
      console.log(result.groups.name);
      totalSum += Number(result.groups.price) * Number(result.groups.quantity);
    }
  });

  console.log(`Total money spend: ${totalSum.toFixed(2)}`);
}

furniture([">>Sofa<<312.23!3", ">>TV<<300!5", ">Invalid<<!5", "Purchase"]);

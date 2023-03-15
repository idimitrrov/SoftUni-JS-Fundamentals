function printN(array) {
  let nElement = Number(array.pop());
  const result = [];

  array.forEach((element, index) => {
    if (index % nElement === 0) {
      result.push(element);
      console.log(index);
    }
  });
  console.log(result.join(" "));
}

// function printN(array) {
//   const nElement = Number(array.pop());
//   const result = [];

//   for (let i = 0; i < array.length; i += nElement) {
//     result.push(array[i]);
//   }

//   console.log(result.join(" "));
// }
printN(["1", "2", "3", "4", "5", "6"]);

function addOrRemove(input) {
  let array = [];
  for (let i = 0; i <= input.length; i++) {
    let command = input[i];
    if (command === "add") {
      array.push(i + 1);
    } else if (command === "remove") {
      array.pop();
    }
  }
  if (array.length <= 0) {
    console.log("Empty");
  } else {
    console.log(array.join(" "));
  }
}
addOrRemove(["add", "add", "add", "add"]);
addOrRemove(["add", "add", "remove", "add", "add"]);
addOrRemove(["remove", "remove", "remove"]);

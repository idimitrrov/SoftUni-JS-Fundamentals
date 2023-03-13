/* More Exercise 06. Chess Board- https://judge.softuni.org/Contests/1269
    
Write a function to print a chessboard of size n X n. 

See the example for more information.
The input comes as a single number argument n.
The output should be returned as a result of your function in the form of a string.



*/

// function printChess(a) {
//   let divContainer = document.createElement("div");
//   divContainer.classList.add("chessboard");
//   document.body.appendChild(divContainer);

//   for (let i = 0; i < a; i++) {
//     let newDiv = document.createElement("div");
//     newDiv.innerHTML = `
//     <span class="black"></span>
//     <span class="white"></span>
//     <span class="black"></span>`;
//     divContainer.appendChild(newDiv);
//   }

//   console.log(divContainer);
// }

function printChessBoard(number) {
  let identation = 2;
  printBaseStart();
  for (let i = 1; i <= Number(number); i++) {
    let counter = i;
    console.log(`${" ".repeat(identation)}<div>`);
    for (let j = 1; j <= Number(number); j++) {
      printSpans(counter);
      counter++;
    }
    console.log(`${" ".repeat(identation)}</div>`);
  }
  printBaseEnd();

  function printBaseStart() {
    console.log('<div class="chessboard">');
  }

  function printBaseEnd() {
    console.log("</div>");
  }

  function printSpans(counter) {
    let types = {
      0: "white",
      1: "black",
    };
    let result = `${" ".repeat(identation + identation)}<span class="${
      types[counter % 2]
    }"></span>`;
    console.log(result);
  }
}
printChessBoard(3);

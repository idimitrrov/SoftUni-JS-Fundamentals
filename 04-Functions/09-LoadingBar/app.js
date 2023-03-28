/* 09. Loading Bar  - https://judge.softuni.org/Contests/1262/Functions-Exercise

You will receive a single number between 0 and 100 which is divided with 10 without residue (0, 10, 20, 30...). 
Your task is to create a function that visualize a loading bar depending on that number you have received in the input.


*/

function printLoadingBar(percent) {
  function drawLoadingBar() {
    let numberOfTimes = Math.floor(percent / 10);
    const loadingArray = Array(10).fill(".");
    for (let i = 0; i < numberOfTimes; i++) {
      loadingArray.splice(i, 1, "%");
    }
    console.log(`${percent}% [${loadingArray.join("")}]`);
  }
  // drawLoadingBar();
  function isComplete() {
    if (percent === 100) {
      console.log("100% Complete");
      console.log(`[%%%%%%%%%%]`);
    } else {
      drawLoadingBar();
      console.log("Still loading...");
    }
  }
  isComplete();
}

printLoadingBar(100);

/* 04. Crystals - https://judge.softuni.org/Contests/1262/Functions-Exercise

You need to write a JS program that monitors the current thickness of the crystal and recommends the next procedure that will bring it closer to the desired frequency. 
To reduce waste and the time it takes to make each crystal your program needs to complete the process with the least number of operations. 
Each operation takes the same amount of time, but since they are done at different parts of the factory, the crystals have to be transported and thoroughly 
washed every time an operation different from the previous must be performed, so this must also be taken into account. When determining the order, 
always attempt to start from the operation that removes the largest amount of material.
The different operations you can perform are the following:
•	Cut – cuts the crystal in 4
•	Lap – removes 20% of the crystal’s thickness
•	Grind – removes 20 microns of thickness
•	Etch – removes 2 microns of thickness
•	X-ray – increases the thickness of the crystal by 1 micron; this operation can only be done once!
•	Transporting and washing – removes any imperfections smaller than 1 micron (round down the number); do this after every batch of operations that remove material
At the beginning of your program, you will receive a number representing the desired final thickness and a series of numbers, representing the thickness of crystal ore in microns.
 Process each chunk and print to the console the order of operations and number of times they need to be repeated to bring them to the desired thickness.
The input comes as a numeric array with a variable number of elements. 
The first number is the target thickness and all following numbers are the thickness of different chunks of quartz ore.


*/

function processCrystal(array) {
  let targetThickness = array[0];
  // let thickness = array[1];
  for (let i = 1; i < array.length; i++) {
    let thickness = array[i];
    let cutCounter = 0;
    let lapCounter = 0;
    let grindCounter = 0;
    let etchCounter = 0;
    let xrayCounter = 0;

    function cut(a) {
      a = thickness;
      while (thickness / 4 >= targetThickness) {
        thickness /= 4;
        cutCounter++;
      }
      thickness = Math.floor(thickness);
    }

    function lap(a) {
      a = cut(thickness);
      while (thickness * 0.8 >= targetThickness) {
        thickness *= 0.8;
        lapCounter++;
      }
      thickness = Math.floor(thickness);
    }
    function grind(a) {
      a = lap(thickness);
      while (thickness - 20 >= targetThickness) {
        thickness -= 20;
        grindCounter++;
      }
      // thickness = Math.floor(thickness);
    }
    function etch(a) {
      a = grind(thickness);
      while (thickness > targetThickness) {
        thickness -= 2;
        etchCounter++;
      }
      if (thickness < targetThickness - 1) {
        xray(thickness);
        etchCounter--;
      } else if (thickness === targetThickness - 1) {
        xray(thickness);
        // etchCounter--;
      }
    }

    function xray(a) {
      thickness += 1;
      a = thickness;
      xrayCounter = 1;
      // Math.floor(thickness);
    }

    function printResult() {
      cut(thickness);
      lap(thickness);
      grind(thickness);
      etch(thickness);
      console.log(`Processing chunk ${array[i]} microns`);
      console.log(`Cut x${cutCounter}`);
      console.log("Transporting and washing");
      if (lapCounter > 0) {
        console.log(`Lap x${lapCounter}`);
        console.log("Transporting and washing");
      }
      if (grindCounter > 0) {
        console.log(`Grind x${grindCounter}`);
        console.log("Transporting and washing");
      }
      if (etchCounter > 0) {
        console.log(`Etch x${etchCounter}`);
        console.log("Transporting and washing");
      }
      if (xrayCounter > 0) {
        console.log(`X-ray x${xrayCounter}`);
      }
      console.log(`Finished crystal ${thickness} microns`);
    }
    printResult();
    // cut(thickness);
    // lap(thickness);
    // grind(thickness);
    // etch(thickness);

    // console.log(etchCounter);
    // console.log(cutCounter);

    // console.log(thickness);
    // if (array.length < 3) {
    //   break;
    // }
  }
}
processCrystal([1375, 50000]);
console.log("----------------------");
processCrystal([1000, 4000, 8100]);

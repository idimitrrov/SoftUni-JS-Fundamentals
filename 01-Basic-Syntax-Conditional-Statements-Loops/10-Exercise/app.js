/* 
Problem 10. The Pyramid of King Djoser -> https://judge.softuni.org/Contests/Practice/Index/1469#0
Write a JS program that calculates how much resources will be required for the construction of a pyramid. 
It is made out of stone, marble, lapis lazuli and gold. 
Your program will receive an integer that will be the base width and length of the pyramid and an increment, that is the height of each step. 
The bulk is made out of stone, while the outer layer is made out of marble. Every fifth step’s outer layer is made out of lapis lazuli instead of marble. 
The final step is made out of gold.
The pyramid is built with 1x1 blocks with height equal to the given increment.
The first step of the pyramid has width and length equal to the given base and every next step is reduced by 2 blocks (1 from each side). 
The height of every step equals the given increment. See the drawing for an example. White steps are covered in marble, 
blue steps are covered in lapis lazuli (every fifth layer from the bottom), and yellow steps are made entirely out of gold (top-most step).

*/
function createPyramid(base, increment) {
  let material = {
    stone: 0,
    marble: 0,
    lapis: 0,
    gold: 0,
  };
  let pyramidHeight = 0;

  for (let i = 0; base > 0; i++) {
    pyramidHeight++;
    if (base === 2 || base === 1) {
      material.gold += base * base * increment;
      break;
    }
    if (pyramidHeight % 5 === 0) {
      material.stone += (base * base - (base * 4 - 4)) * increment;
      material.lapis += (base * 4 - 4) * increment;
    } else {
      material.stone += (base * base - (base * 4 - 4)) * increment;
      material.marble += (base * 4 - 4) * increment;
    }
    base -= 2;
  }
  console.log(`Stone required: ${Math.ceil(material.stone)}`);
  console.log(`Marble required: ${Math.ceil(material.marble)}`);
  console.log(`Lapis Lazuli required: ${Math.ceil(material.lapis)}`);
  console.log(`Gold required: ${Math.ceil(material.gold)}`);
  console.log(`Final pyramid height: ${Math.floor(pyramidHeight * increment)}`);
}
createPyramid(11, 0.75);

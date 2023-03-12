// Problem 04.NextDay -> https://judge.softuni.org/Contests/Practice/Index/1469#0
function getPointAtoB(x1, y1, x2, y2) {
  let dx = x2 - x1;
  let dy = y2 - y1;
  let distance = Math.sqrt(dx * dx + dy * dy);
  return console.log(distance);
}

getPointAtoB(2.34, 15.66, -13.55, -2.9985); // This should output 24.50778901186315
getPointAtoB(2, 4, 5, 0); // This should output 5

/* 03. Points Validation - https://judge.softuni.org/Contests/1262/Functions-Exercise

Write a JS program that receives two points in the format [x1, y1, x2, y2] and checks if the distances between each point and 
the start of the cartesian coordinate system (0, 0) and between the points themselves is valid. 
A distance between two points is considered valid, if it is an integer value. In case a distance is valid write "{x1, y1} to {x2, y2} is valid", 
in case the distance is invalid write "{x1, y1} to {x2, y2} is invalid". 
The order of comparisons should always be first {x1, y1} to {0, 0}, then {x2, y2} to {0, 0} and finally {x1, y1} to {x2, y2}. 
The input consists of two points given as an array of numbers.
For each comparison print on the output either "{x1, y1} to {x2, y2} is valid" if the distance between them is valid, 
or "{x1, y1} to {x2, y2} is invalid"- if it’s invalid.


*/

function checkDistances(points) {
  function isValidDistance(point1, point2) {
    const distance = Math.sqrt(
      Math.pow(point2[0] - point1[0], 2) + Math.pow(point2[1] - point1[1], 2)
    );
    return Number.isInteger(distance);
  }

  const point1 = [points[0], points[1]];
  const point2 = [points[2], points[3]];

  if (isValidDistance(point1, [0, 0])) {
    console.log(`{${point1[0]}, ${point1[1]}} to {0, 0} is valid`);
  } else {
    console.log(`{${point1[0]}, ${point1[1]}} to {0, 0} is invalid`);
  }

  if (isValidDistance(point2, [0, 0])) {
    console.log(`{${point2[0]}, ${point2[1]}} to {0, 0} is valid`);
  } else {
    console.log(`{${point2[0]}, ${point2[1]}} to {0, 0} is invalid`);
  }

  if (isValidDistance(point1, point2)) {
    console.log(
      `{${point1[0]}, ${point1[1]}} to {${point2[0]}, ${point2[1]}} is valid`
    );
  } else {
    console.log(
      `{${point1[0]}, ${point1[1]}} to {${point2[0]}, ${point2[1]}} is invalid`
    );
  }
}

checkDistances([3, 0, 0, 4]);
checkDistances([2, 1, 1, 1]);

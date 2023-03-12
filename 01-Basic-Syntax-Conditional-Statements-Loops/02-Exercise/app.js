function roundNumber(number, floatPoint) {
  if (floatPoint > 15) {
    floatPoint = 15;
    console.log(parseFloat(number.toFixed(floatPoint)));
  } else {
    console.log(parseFloat(number.toFixed(floatPoint)));
  }
}

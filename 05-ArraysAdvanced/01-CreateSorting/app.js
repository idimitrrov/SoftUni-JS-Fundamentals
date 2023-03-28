const quickSort = (array) => {
  if (array.length <= 1) {
    return array;
  } else {
    let firstElement = array[0];
    let leftArray = [];
    let rightArray = [];

    for (let i = 1; i < array.length; i++) {
      if (array[i] < firstElement) {
        leftArray.push(array[i]);
      } else {
        rightArray.push(array[i]);
      }
    }
    return quickSort(leftArray).concat(firstElement, quickSort(rightArray));
  }
};

console.log(quickSort([10, 80, 30, 90, 40, 50, 70]));

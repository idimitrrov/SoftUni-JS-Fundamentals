function getNextDate(year, month, day) {
  // let dateObj = new Date(year, month - 1, day + 1);
  let nextDateObj = new Date(year, month - 1, day + 1);
  year = nextDateObj.getUTCFullYear();
  month = nextDateObj.getUTCMonth() + 1;
  day = nextDateObj.getUTCDate();

  console.log(`${year}-${month}-${day}`);
}
getNextDate(2023, 3, 11); // 2016-10-1
// getNextDate(2020, 3, 24); // 2020-3-25
// getNextDate(1951, 12, 24); // 1951-12-25
// getNextDate(1, 1, 1); // 1901-1-2
// getNextDate(2016, 2, 28); // 2016-2-29
// console.log(dateObj);
// console.log(new Date(year, month - 1, day + 2));

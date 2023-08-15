let arr = [2, 3, 4, 5, 6, 7, 8, 90, 67, -56, -90, 86, 545, 8899, -89765];
let positiveNumber = arr
  .filter(function (n) {
    return n > 0;
  })
  .reduce(function (acc, value) {
    let sum = acc + value;
    return sum;
  }, 0);
console.log(positiveNumber);

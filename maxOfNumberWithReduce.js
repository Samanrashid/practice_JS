// Find the maximum number in an array of numbers
const arr = [2, 3, 4, 5, 9, 7, 21];
let maxarray = arr.reduce(function (acc, value) {
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > arr[0]) {
      arr[0] = arr[i];
    }
  }
}, arr[0]);
console.log(arr[0]);

//you have a array [7,9,0,3,5,67,90,23,18,78,43,9087] you have to find a sum of all number in array using reduce
const arr = [7, 9, 0, 3, 5, 67, 90, 23, 18, 78, 43, 9087];
const sum = arr.reduce(function (acc, value) {
  sumofnumber = acc + value;
  return sumofnumber;
}, 0);
console.log(sum);

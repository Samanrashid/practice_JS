//you have a array of [8,11,3,4,5,10,12,14,89,90] you have to print all even and odd number with filter method
const arr = [8, 11, 3, 4, 5, 10, 12, 14, 89, 90, -8 - 67, -976];
const evenNum = arr.filter(function (n) {
  return n % 2 == 0;
});
const oddNum = arr.filter(function (n) {
  return n % 2 != 0;
});
const posNum = arr.filter(function (n) {
  return n > 0;
});
const negNum = arr.filter(function (n) {
  return n < 0;
});

console.log(evenNum);
console.log(oddNum);
console.log(posNum);
console.log(negNum);

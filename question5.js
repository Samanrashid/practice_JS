//some method in js
const arr = [4, 6, 7, 8, 9, -9, 6];
const conditition = arr.some(function (n) {
  return n > 0;
});
console.log(conditition);

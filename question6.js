//every higher order function
const arr = [56, 90, 78, 65, 45, -90, -89];
const posArr = arr.every(function (n) {
  return n < 0;
});
console.log(posArr);

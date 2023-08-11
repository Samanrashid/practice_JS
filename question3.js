// you have an array of name = ["saman","Geeta","sunita","geetanjali"] and you have to add mrs in all elements of array
const firstname = ["saman", "Geeta", "sunita", "geetanjali"];
const prename = firstname.map(function (n) {
  return "mrs" + " " + n;
});
console.log(prename);

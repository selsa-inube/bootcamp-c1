console.log("Flattening");

var arrays = [[1, 2, 3], [4, 5], [6]];

var flat = arrays.reduce(function (a, b) {
  return a.concat(b);
});

console.log(flat);

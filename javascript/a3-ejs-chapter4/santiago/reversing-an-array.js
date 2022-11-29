console.log("Reversing an array");

function reverseArray(array) {
  let reverse = [];
  for (let i = array.length - 1; i >= 0; i--) {
    reverse.push(array[i]);
  }
  return reverse;
}

reverseArray([1, 2, 3, 4, 5]);

function reverseArrayInPlace(array) {
  let reverse = [];
  for (let i = array.length - 1; i >= 0; i--) {
    reverse.push(array[i]);
  }
  for (let j = 0; j < array.length; j++) {
    array[j] = reverse[j];
  }
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]

console.log("The sum of a range");

function range(start, end, step) {
  let result = [];
  if (step == undefined) step = 1;
  numLoops = Math.abs((end - start) / step) + 1;
  for (let i = 0; i < numLoops; i++) {
    result.push(start);
    start += step;
  }
  return result;
}

function sum(array) {
  let arrayTotal = 0;
  numLoops = array.length;
  for (let i = 0; i < numLoops; i++) {
    arrayTotal += array[i];
  }
  return arrayTotal;
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55

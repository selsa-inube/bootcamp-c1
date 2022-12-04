console.log("A list");

function arrayToList (array){
  let list = null;
  for (let i = array.length - 1; i >= 0; i--) {
    list = {
      value: array[i],
      rest: list,
    };
  }
  return list;
};

function listToArray (list){
  let array = [];
  for (const arr in list) {
    const value = list[arr];
    typeof value === "object" ? array.push(listToArray(value)) : array.push(value);
  }
  array = [].concat.apply([], array);
  return array;
};

function prepend (value, rest){
  let list = {
    value: value,
    rest: rest,
  };
  return list;
};
nth = (list, num) => {
  return num === 0 ? list.value : nth(list.rest, num - 1);
};

// Your code here.

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20


function arrayToList(numbers) {
   let list = null;
   for (let i = numbers.length - 1; i >= 0; i--) {
      list = {
         value: numbers[i],
         rest: list,
      }
   }
   return list;
}


function listToArray(listNumbers){
   let arrayValues = [];
   for (let i = listNumbers; i; i=i.rest) {
      arrayValues.push(i.value);
   }
   return arrayValues;
}

function prepend(value, rest) {
   let list = {
      value: value,
      rest: rest,
   }
   return list;
}

function nth(list, number){
   return listToArray(list)[number];
}


console.log(arrayToList([10, 20]));
console.log(listToArray(arrayToList([10, 20, 30])));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20, 30]), 1));



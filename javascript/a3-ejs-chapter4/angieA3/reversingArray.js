
function reverseArray(arrays){
    let arrayValues=[];
    for (let i = arrays.length - 1; i >= 0; i--) {
        arrayValues.push(arrays[i]); 
    }
    return arrayValues;
}

function reverseArrayInPlace(arrayN) {
    let revArr = Math.floor(arrayN.length/2)
    for(let i=0; i<=revArr; i++){
        let asc= arrayN[i];
      arrayN[i] = arrayN[arrayN.length-1-i]
      arrayN[arrayN.length-1-i]=asc;
    }
   return arrayN;
  }

console.log(reverseArray(["A", "B", "C"]));

let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);





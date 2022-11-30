function reverseArray (array) {
    let counter = array.length -1;
    let order = [];

    while (counter >= 0){
        order.push(array[counter]);
        counter--;
    }
    return order;
}

function reverseArrayInPlace(array) {
    for (let counter = 0; counter < array.length; counter++) {
		let data = array.pop();
		array.splice(counter, 0, data);
	}
}

console.log(reverseArray(["A", "B", "C"]));
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
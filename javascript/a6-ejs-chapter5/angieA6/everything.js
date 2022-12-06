function every(array, test) {
    for (let value of array) {
        if (!test(value)) {
            return false;
        }
    }
    return true;
}

function everyWithSome(array, test) {
    return array.some(value => test(value));
}

console.log(every([1, 3, 5], n => n < 10));
console.log(every([2, 4, 16], n => n < 10));
console.log(every([], n => n < 10));

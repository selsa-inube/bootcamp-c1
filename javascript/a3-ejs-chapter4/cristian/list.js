function arrayToList(array){
    let data = null;

    for (let counter = array.length - 1; counter >= 0; counter --){        
        data = {value: array[counter], rest: data};
    }
    return data;
}

function listToArray(data){
    let array = [];

    for (let counter = data; counter; counter = counter.rest){
        array.push(counter.value);
    }
    return array;    
}

function prepend(value, data){
    return {value, rest: data};
}

function nth(data, num){
    if (num == 0){
        return data.value;
    } else if (!data){
        return undefined;
    } else {
        return nth(data.rest, num - 1);
    }
}

console.log(arrayToList([10, 20]));
console.log(listToArray(arrayToList([10, 20, 30])));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20, 30]), 1));
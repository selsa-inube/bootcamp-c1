function basicRange(start, end){
    let numbers = [];

    for (let counter = start; counter <= end; counter ++){
        numbers.push(counter);
    }
    return numbers;
}

function range(start, end, step = start < end ? 1 : -1){
    let numbers = [];


    if (step == 0 || (start < end && step < 0) || (start > end && step > 0)){
        return "Error in parameters";
    }
    if (step >= 1){
        for (let counter = start; counter <= end; counter += step){
            numbers.push(counter);
        }
    }
    if (step < 0){
        for (let counter = start; counter >= end; counter += step){
            numbers.push(counter);
        }
    } 
    return numbers;
}

function sum(array){
    let sumtotal = 0;

    for (let num of array){
        sumtotal += num;
    }
    return sumtotal;
}

console.log(range(1, 10));
console.log(range(5, 2, -1));
console.log(sum(range(1, 10)));
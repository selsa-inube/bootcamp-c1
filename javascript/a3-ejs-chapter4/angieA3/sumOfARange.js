console.log("1. exercice the sum of a range");

function range(nStart, nEnd, increm = 1){
    let numbers=[];

    if(increm >= 0){
        for (let i = nStart; i <= nEnd; i+=increm) {
            numbers.push(i)
        }
        return numbers;
    }
    
    if(increm < 0){
        for (let i = nStart; i>= nEnd; i+=increm) {
            numbers.push(i)
        }
        return numbers;
    } 
}

function sum(numbers){
    let sumNumbers = 0;
    for (let i = 0; i < numbers.length; i++) {
        sumNumbers += numbers[i]; 
    }
    return sumNumbers;
}

console.log(range(1,10));
console.log(range(5,2,-1));
console.log(sum(range(1,10)));


function min(num1, num2){
    if (num1 == num2){
        return "The numbers are equals";
    }
    if (num1 > num2){
        return num2;
    }
    return num1;
}

console.log(min(0, 10));
console.log(min(0, -10));
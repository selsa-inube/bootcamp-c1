console.log("Second exercise: Recursion")

function par(n) {
    if (n < 0)
        n *= - 1;
    if (n === 0)
        return true;
    if (n === 1)
        return false;
    return par(n - 2);
}

console.log(par(50));
// → true   
console.log(par(75));
// → false
console.log(par(-1));
// → ??
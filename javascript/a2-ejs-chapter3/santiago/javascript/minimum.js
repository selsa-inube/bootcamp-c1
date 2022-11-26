console.log("Firts exercise: Minimum")

function min(a, b) {
    if (a > b) {
        return b;
    } else if (a < b) {
        return a;
    } else {
        return "numbers are the same";
    }
}
console.log(min(0, 10));
console.log(min(0, -10));
console.log("Third exercise: Bean Counting")

function countBs(a) {
    let count = 0;
    for (let counter of a) {
        if (counter === "B")
            count += 1;
    }
    return count;
}

function countChar(a, b) {
    let count = 0;
    for (let counter of a) {
        if (counter === b)
            count += 1;
    }
    return count;
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4

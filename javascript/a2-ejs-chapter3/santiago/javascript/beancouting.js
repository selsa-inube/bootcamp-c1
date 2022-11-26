console.log("Third exercise: Bean Counting")

function countBs(a) {
    let count = 0;
    for (let i = 0; i < a.length; i += 1) {
        if (a.charAt(i) === "B")
            count += 1;
    }
    return count;
}

function countChar(a, b) {
    let count = 0;
    for (let i = 0; i < a.length; i += 1) {
        if (a.charAt(i) === b)
            count += 1;
    }
    return count;
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4

console.log("1) Exercise minimum");

console.log("Option 1");
function minim(a, b) {
    if (a > b) {
        return b;
    } else if (a < b) {
        return a;
    }else {
        return"equal numbers";
    }
}
console.log(minim(0, 10));
console.log(minim(0, -10));


console.log("Option 2");
const minimum = (c,d) =>{return Math.min(c,d);}
console.log(minimum(0, 10));
console.log(minimum(0, -10));

console.log("\n");



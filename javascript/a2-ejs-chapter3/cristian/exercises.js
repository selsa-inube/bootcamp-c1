// -------------------------- Activity 1. Minimum -----------------------------

function min(num1, num2){
    if (num1 > num2){
        return num2;
    }else if (num1 < num2){
        return num1;
    }else {
        return "The numbers are equals";
    }
}

console.log(min(0, 10));
console.log(min(0, -10));

// ------------------------ Activity 2. Recursion -----------------------------

function isEven(num1){
    if (num1 < 0){
        return "False - This number is negative";
    }else if (num1 == 0){
        return true;
    }else if (num1 == 1){
        return false;
    }else {
        return isEven(num1 - 2);
    }
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));

// --------------------- Activity 3. Bean Counting ----------------------------

function countBs(word){
    let numLetters = 0;
    for (let counter = 0; counter < word.length; counter++){
        if (word[counter] == "B"){
            numLetters ++;
        }
    }
    return numLetters;
}

function countChar(word, letter){
    let numLetters = 0;
    for (let counter = 0; counter < word.length; counter++){
        if (word[counter] == letter){
            numLetters ++;
        }
    }
    return numLetters;
}

function countBs2(word){
    return countChar(word, "B");
}

console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));
console.log(countBs2("BBC"));
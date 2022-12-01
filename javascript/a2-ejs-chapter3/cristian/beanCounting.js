function countBs(word){
    let numLetters = 0;
    for (let counter of word){
        if (counter == "B"){
            numLetters ++;
        }
    }
    return numLetters;
}

function countChar(word, letter){
    let numLetters = 0;
    for (let counter of word){
        if (counter == letter){
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
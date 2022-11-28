console.log("3) Exercise bean counting");

function countChar(word, letter = 'B'){
    
    let l = 0;
    for (let letterIterate of word) {
        if(letterIterate == letter){
            l++;
        }
    }
    return `the word:  ${word} has ${l} letter(s) ${letter}`;
}

console.log(countChar("BBC"));
console.log(countChar("kakkerlak", "k"));

// Realice solo una función, ya que no vi necesario repetir el código :)



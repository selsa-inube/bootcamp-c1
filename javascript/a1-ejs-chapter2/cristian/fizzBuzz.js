for (let counter = 1; counter<= 100; counter++) {
    let info = "";

    if (counter % 3 == 0){
        info += "Fizz";
    }
    if (counter % 5 == 0) {
        info += "Buzz";
    }

    console.log(info || counter);
}  
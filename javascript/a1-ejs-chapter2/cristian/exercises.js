// ---------------- Activity 1. Looping A Triangle ----------------------------

let icon = "";

for (let counter = 0; counter <= 6; counter++) {
  icon += "# ";
  console.log(icon);
}

// --------------------- Activity 2. FizzBuzz ---------------------------------

for (let counter = 1; counter <= 100; counter++) {
  let info = "";

  if (counter % 3 == 0 && counter % 5 == 0) {
    info = "FizzBuzz";
  } else if (counter % 3 == 0) {
    info = "Fizz";
  } else if (counter % 5 == 0) {
    info = "Buzz";
  } else {
    info = counter;
  }

  console.log(info);
}

// ------------------- Activity 3. Chessboard ---------------------------------

let sizeHeight = 8;
let sizeWidth = 8;
let square = "";

for (let count1 = 0; count1 < sizeHeight; count1++) {
  for (let count2 = 0; count2 < sizeWidth; count2++) {

    if ((count1 + count2) % 2 === 0) {
      square += " ";
    } else {
      square += "#";
    }
  }

  square += "\n";
}

console.log(square);
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
console.log("Third exercise: Chessboard");

let size = 8;
let chessboard = '';

for (let a = 0; a < size; a++) {
  for (let b = 0; b < size; b++) {
    if ((a + b) % 2 == 0) {
      chessboard += ' ';
    } else {
      chessboard += '#';
    }
  }
  chessboard += '\n'
}
console.log(chessboard)


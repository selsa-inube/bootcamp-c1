console.log("Third exercise: Chessboard");

function ajedrez() {
  let par = "";
  let impar = "";
  while (par.length < 8) {
    if (par.length % 2 === 0) {
      par += "#";
      impar += " ";
    }
    if (par.length % 2 === 1) {
      par += " ";
      impar += "#";
    }
  }
  for (let i = 0; i < 8; i++) {
    if (i % 2 === 0) console.log(par + "\n");
    if (i % 2 === 1) console.log(impar + "\n");
  }
}
ajedrez();

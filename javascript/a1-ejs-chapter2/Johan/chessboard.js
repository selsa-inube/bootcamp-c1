//creacion de variables globales.
let grid = "";
//creacion de variables de modificacion de tamaños de filas y columnas.
let columnsx2 = 8;
let rows = 8;

//creacion de bucle dependiente de la cantidad de filas.
for (let i = 0; i < rows; i++) {
  //creacion de bucle dependiente de la cantidad de columnas/2.
  for (let o = 0; o < columnsx2; o++) {

    if ((i + o) % 2 === 0) {
      //concatenacion de espaciado cada 1 de 2 caracteres.
      grid = grid + " ";
    } else {
      //concatenacion de signo numeral cada 1 de 2 caracteres.
      grid = grid + "#";
    }

  }

  //concatenacion de un salto de linea segun la cantidad de filas asignada.
  grid = grid + "\n";
}

//ejecucion de grilla en la consola.
console.log(grid);
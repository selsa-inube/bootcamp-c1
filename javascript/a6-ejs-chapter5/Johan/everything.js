//con bucle
function every(array, test) {
    // creamos un bucle que recorre los elementos de el array
    for (let element of array) {
      // Si la función test devuelve false para algún elemento de el array, devolvemos false inmediatamente
      if (!test(element)) {
        return false;
      }
    }

    // Si la función de test devuelve true para todos los elementos de el array, devolvemos true
    return true;
  }

//con metodo some
function every2(array, test) {
    /*la función every implementada con some devuelve false si some devuelve true,lo que significa que hay al menos un elemento para el que la función de test devuelve false.
     Si some devuelve false, every devuelve true, lo que significa que la función de test devuelve true para todos los elementos.*/
    return !array.some(element => !test(element));
  }


//se ejecutan las pruebas correspodientes con los dos metodos en la consola
console.log(every([1, 3, 5], n => n < 10));
console.log(every([2, 4, 16], n => n < 10));
console.log(every([], n => n < 10));

console.log(every2([1, 3, 5], n => n < 10));
console.log(every2([2, 4, 16], n => n < 10));
console.log(every2([], n => n < 10));

//creamos una funcion con un solo parametro el cual va a ser el array
function reverseArray(array) {
  //creamos una variable que va a tener un valor tipo array
  let reversed = [];

  //hacemos un bucle el cual va a usar la funcion push para insertar en cada espacio del array su respectivo elemento contrario
  for (let i = array.length - 1; i >= 0; i--) {
    reversed.push(array[i]);
  }
  //se retorna el resultao de el array inverso
  return reversed;
}

//se crea una funcion tambien con un solo parametro el cual es el array
function reverseArrayInPlace(array) {
  //se crea un bucle for el cual va a llegar hasta la mitad de la cantiad de caracteres de el array y va a modificar el array para que se cambien de posiciones la [0] con la ultima y la [1] con la penultima y asi sucesivamente
  for (let i = 0; i < array.length / 2; i++) {
    let temp = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = temp;
  }
  //se retorna el array completamente modificado
  return array;
}

//se ejecutan las pruebas correspondientes en la consola
console.log(reverseArray(["A", "B", "C"]));
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
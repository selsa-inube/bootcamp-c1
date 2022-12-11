//ser crea la funcion arrayToList con un parametro
function arrayToList(array) {
    //se crea la variable list pero se le determina un valor nulo al no contener ningun valor el array
    let list = null;
    //se crea un bucle for el va a crear una estructura de lista por cada elemento que tenga el array
    for (let i = array.length - 1; i >= 0; i--) {
      list = {value: array[i], rest: list};
    }
    //se retorna la lista
    return list;
}

//ser crea la funcion listToArray con un parametro el cual va a recibir una lista
function listToArray(list) {
    //se crea la variable array y se le determina que es un array
    let array = [];
    //se crea un bucle for el cual va a agarrar los elementos (valores) de la lista y los va a meter en el array atraves de la funcion push
    for (let node = list; node; node = node.rest) {
      array.push(node.value);
    }
    //se retorna el array
    return array;
}

//se crea la funcion prepend la cual tiene dos parametros de value, list y crea una nueva lista con el valor dado antepuesto al principio de la lista de entrada.
function prepend(value, list) {
    return {value, rest: list};
}

// se crea la funcion nth con dos parametros, una lista y un numero el cual se refiere a la posicion de la lista empezando desde el numero 0
function nth(list, n) {
    //si lista no tiene ningun elemento retorna undefined
    if (!list) return undefined;
    //si el parametro n es igual a 0 entonces va a retornar el primer elemento de la lista
    else if (n == 0) return list.value;
    //si el elemento no es cero entonces va a retornarse a si misma convirtiendola en recursiva y usando como argumento "n-1" hasta poder llegar el elemento deseado
    else return nth(list.rest, n - 1);
}

//se ejecutan las pruebas correspondientes en la consola
console.log(arrayToList([10, 20]));
console.log(listToArray(arrayToList([10, 20, 30])));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20, 30]), 1));
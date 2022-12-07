//creamos la funcion "min" con los parametros de los dos valores numericos
function min(number1, number2) {
    //retornamos el numero que sea menor entre los parametros con la funcion estandar "math.min"
    return Math.min(number1, number2);
}

//ejecutamos las pruebas correspondientes en la consola
console.log(min(0, 10));
console.log(min(0, -10));
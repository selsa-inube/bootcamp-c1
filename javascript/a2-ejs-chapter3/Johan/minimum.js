//creamos la funcion "min" con los parametros de los dos valores numericos
function min(number1, number2) {
    //creamos la condicion la cual retorna el number2 en caso que el number1 sea mayor
    if (number1 > number2) {
        return number2
        //verificamos que los dos numeros no sean iguales
    } else if (number1 === number2) {
        return "the numbers are equal"
    } else{
        //retornamos number1 en el caso que number2 sea mas grande
        return number1
    }
}

//ejecutamos las pruebas correspondientes en la consola
console.log(min(0, 10));
console.log(min(0, -10));
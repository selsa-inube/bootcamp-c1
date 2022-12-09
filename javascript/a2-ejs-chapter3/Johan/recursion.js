//creacion de la funcion "isEven" con un solo parametro
isEven = number => {
    //creacion de la primera condicion que verifica que el number no sea negativo atraves de la funcion estandar "Math.sign"
    if (Math.sign(number) === -1){
        return false;
    } 
    //creacion de la segunda condicion la cual retorna true en caso que el numero sea par (0) y por consiguiente false si es impar (1)
    else if (number === 0){
        return true;
    }
    //en caso que el numero no sea 0 o 1 se retorna la misma funcion convirtiendola en una funcion recursiva y se le restan 2
    return isEven(number - 2);
}

//ejecutamos las pruebas correspondientes en la consola
console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));
//creacion de bucle for de 1 a 100.
for (let i = 1; i <= 100; i++) {
    
    //declaracion de variable tipo cadena.
    let variable = "";
    
    //condiciones.
    if (i % 3 === 0 && !(i % 5 === 0)) {
        variable = "Fizz";
    } else if(i % 5 === 0 && !(i % 3 === 0)) {
        variable = "Buzz";
    } else if(i % 5 === 0 && i % 3 === 0) {
        variable = "FizzBuzz";
    } 
    
    //ejecucion de la variable cadena si es el caso, (OR) si no entonces del numero en la consola.
    console.log(variable || i);
}
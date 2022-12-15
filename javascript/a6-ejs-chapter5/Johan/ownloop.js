//creamos la funcion loop con cuatro parametros: start test update y body 

function loop(start/*valor*/, test/*funcion*/, update/*funcion*/, body/*funcion*/) {
    /*creamos un ciclo for el cual se le determina el valor inicial de el parametro start, despues llama a la funcion
    test la cual tiene el valor actual de " i ". en el caso que test devuelva false el ciclo va a terminar*/
    for (let i = start; test(i); i = update(i)) {
    /*si test es true entonces llama a la funcion body con el valor de (i) y luego llama a la funcion update
     el cual almacena el valor para continuar con el bucle hasta que devuelva false, que es donde el ciclo termina*/
      body(i);
    }
}
  
//se ejecuta la funcion de prueba en la consola
loop(3, n => n > 0, n => n - 1, console.log);

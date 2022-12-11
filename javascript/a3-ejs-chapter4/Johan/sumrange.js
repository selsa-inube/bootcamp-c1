//creamos la funcion range la cual recibe dos parametros obligatorios de start, end y uno opcional de step y se le asigna un valor predeterminado de 1
function range(start, end, step = 1) {
    //se crea la variable numbers y se le determina que es un array
    const numbers = [];
    // se verifica si el step es mayor a 0 entonces es un valor positivo por lo que predeterminadamente va a sumar 1 hasta llegar a end
    if (step > 0) {
      for (let i = start; i <= end; i += step) {
        //usamos la funcion push para añadir un nuevo numero al final del array numbers
        numbers.push(i);
      }
    //en caso que step sea negativo osea menor a 0 step va a restar hasta llegar a end
    } else {
      for (let i = start; i >= end; i += step) {
        numbers.push(i);
      }
    }
    // se retorna el array numbers
    return numbers;
  }
  
  // se crea la siguiente funcion la tiene un unico parametro de numbers
  function sum(numbers) {
    //se crea la variable total y se le da un valor de 0
    let total = 0;
  
    //al la variable numbers tener dos valores se usa un siclo for number of numbers la cual va a retornar la suma de todos los numeros y los va a guardar en la variable total
    for (const number of numbers) {
      total += number;
    }
    //se retorna la variable total con todos los numeros sumados entre ellos
    return total;
  }
  
  
  //se ejecutan las pruebas correspondientes en la consola
  console.log(range(1, 10));
  console.log(range(5, 2, -1));
  console.log(sum(range(1, 10)));
  console.log(range(1, 10, 2))
  
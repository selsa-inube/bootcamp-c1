//se crea la funcion deepEqual la cual recibe dos valores value1 y value2
function deepEqual(value1, value2) {

    //si los dos valores son estrictamente iguales devuelve true esto atraves del operador "==="
    if (value1 === value2) return true;
  
    //si cualquiera de los dos valores no es un objeto o es nulo devuelve false
    if (value1 == null || typeof value1 != "object" ||
    value2 == null || typeof value2 != "object") return false;

    //si los valores son objetos va a crear dos variables las cuales guardaran las propiedades de los objetos esto atraves de la funcion "Object.keys"
    let keysA = Object.keys(value1), keysB = Object.keys(value2);
  
    //compara los caracteres de las propiedes de los objetos y en el caso que sean iguales retorna true, si no. retorna false
    if (keysA.length != keysB.length) return false;
    
    //en el caso en el que deepEqual detecta que los dos valores son objetos va a comparar estrictamente las propiedades de los objetos creando un bucle y llamandose a si misma convirtiendose en recursiva y devolviendo false cuando encuentre alguna diferencia
    for (let key of keysA) {
        //hace dos confirmaciones, una si la variable con las propiedades de el value2 no son true y otra si al llamarse a si misma encuentra una diferencia en alguno de los dos valores
      if (!keysB.includes(key) || !deepEqual(value1[key], value2[key])) return false;
    }
    //si no encuentra diferencias en los objetos devuelve true
    return true;
  }

//se ejecutan las pruebas correspondientes en la consola
let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));

//damos un valor tipo array a la variable arrays esta misma con sub-arrays con diferentes valores tipo numericos
let arrays = [[1, 2, 3], [4, 5], [6]];

/*le damos un nuevo valor a la variable arrays, el método .reduce recorre cada elemento que en este caso son los sub-arrays
y utiliza el método concat para combinar e ir acomulando cada uno de los arrays en uno solo, el counter inicialmente se le determina un array vacio*/
arrays = arrays.reduce((counter, value) => counter.concat(value), []);

//se ejecuta la variable flatted en la consola
console.log(arrays);
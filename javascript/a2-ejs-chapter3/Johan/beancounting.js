//Nota: para el desarrollo de este ejercicio se evito usar el uso de bucles y se trabajo con recursividad.

//se crean las variables globales de los contadores para la funcion string

//la variable counter cuenta la cantidad de "B"
let counter = 0;
//la variable counter1 guarda la posicion en la que se encuentra el valor string[x]
let counter1 = 0;

function countBs (string){
    //se crea la primera condicion que verifica que la letra en la que se encuentra string[x] sea B y que no se pase el counter1 de la string.
    if (string[counter1] === "B" && counter1 < string.length) {
        //se suma 1 al contador de la posicion
        counter1 ++;
        //se suma 1 al contador de "B"
        counter ++;
        //se vuelve a llamar la funcion para que se pase a la siguiente letra 
        countBs(string);
        //se retorna el contador de "B"
        return counter;
        //se crea la condicion que verifica que la letra actual NO es "B"
    } else if(string[counter1] !== "B" && counter1 < string.length){
        //se suma 1 al contador solo de la posicion de string[x]
       counter1 ++;
        //se vuelve a llamar la funcion para que se pase a la siguiente letra 
       countBs(string);
       //se retorna el contador de "B"
       return counter;
    }
}

//un poco de lo mismo pero implementando los dos parametros de word y letter

let counter2 = 0;
let counter3 = 0;

function countChar(word, letter) {
    if (word[counter3] === letter && counter3 < word.length) {
        counter3 ++;
        counter2 ++;
        countChar(word, letter);
        return counter2;
    } else if(word[counter3] !== letter && counter3 < word.length){
       counter3 ++;
       countChar(word, letter);
       return counter2;
    }
}

//ejecutamos las pruebas correspondientes en la consola
console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));

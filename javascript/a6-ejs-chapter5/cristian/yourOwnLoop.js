function loop(value, test, update, body) {    
    for (let number = value; test(number); number = update(number)) {
        body(number);
    }
}

loop(3, n => n > 0, n => n - 1, console.log);
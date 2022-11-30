function deepEqual(objOne, objTwo){
    if(  JSON.stringify(objOne) !== JSON.stringify(objTwo)){
        return false;
    }
    return true;
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
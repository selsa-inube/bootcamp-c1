function deepEqual(data1, data2){

    if (data1 == data2){
        return true;
    }
    if ( data1 == null || data2 == null || typeof data1 != "object"  || typeof data2 != "object"){
        return false;
    }
    if (Object.keys(data1).length != Object.keys(data2).length){
        return false;
    }

    let keyData1 = Object.keys(data1);
    let keyData2 = Object.keys(data2);

    for (let key of keyData1){
        if (!keyData2.includes(key) || !deepEqual(data1[key], data2[key])){
            return false;
        }
    }
    return true;
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
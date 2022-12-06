let arrays = [[1, 2, 3], [4, 5], [6]];

const flattening = arrays => {
    return arrays.reduce((flatArray, finalArray) => {
         return flatArray.concat(finalArray);
    }, []);
};

console.log(flattening(arrays));
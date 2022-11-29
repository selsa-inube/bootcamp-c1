console.log("Deep comparison");

var deepEqual = function (a, b) {
  if (a === b) {
    return true;
  } else if (
    typeof a == "object" &&
    a != null &&
    typeof b == "object" &&
    b != null
  ) {
    if (Object.keys(a).length != Object.keys(b).length) return false;

    for (var c in a) {
      if (b.hasOwnProperty(c)) {
        if (!deepEqual(a[c], b[c])) return false;
      } else return false;
    }

    return true;
  } else return false;
};

// Your code here.

let obj = { here: { is: "an" }, object: 2 };
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, { here: 1, object: 2 }));
// → false
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
// → true

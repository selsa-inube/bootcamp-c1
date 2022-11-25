console.log("2) Exercise recursion");


function isEven(n) {
   if (Number.isInteger(n)) {
      if (n >= 0) {
         if (n == 0) {
            return true;
         } else if (n == 1) {
            return false;
         } else {
            return isEven(n - 2);
         }
      } else {
         return "?? -- Is not positive whole number";
      }

   } else {
      return "Is not a whole number";
   }

}
console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));
console.log(isEven(2.5));

console.log("\n");
console.log("2) Exercise recursion");


function isEven(n) {
   if (!(Number.isInteger(n)) || !(n >= 0)) {
      return "?? -- Is not positive whole number";
   }

   if (n == 0) {
      return true;
   }

   if (n == 1) {
      return false;
   } 

   return isEven(n - 2);
 
}
console.log(isEven(50));           
console.log(isEven(75));
console.log(isEven(-1));
console.log(isEven(2.5));

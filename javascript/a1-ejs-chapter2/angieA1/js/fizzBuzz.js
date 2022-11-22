console.log("2). exercise FizzBuzz");

let message = "";

for (let i = 1; i <= 100; i++) {
   message = i;
   if (i % 5 == 0 && i % 3 == 0) {
      message = "FizzBuzz";
   }else if (i % 3 == 0) {
      message = "Fizz";
   }else if (i % 5 == 0) {
      message = "Buzz";
   }

   console.log(message);
}
console.log("\n");


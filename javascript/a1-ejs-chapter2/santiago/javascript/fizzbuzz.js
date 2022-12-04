console.log("Second exercise: FizzBuzz");

for (let i = 1; i <= 100; i++) {
  let result = "";
  if (i % 3 == 0) {
    console.log("Fizz");
  } if (i % 5 == 0) {
    console.log("Buzz");
  }
  console.log(result || i);
}


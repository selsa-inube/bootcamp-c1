console.log("2). exercise FizzBuzz");

for (let i= 1; i <=100; i++) {
   let fizz, buzz;  

   if(i % 3 == 0){
      fizz = "Fizz";
   }else{
      fizz="";
   }
   
   if(i % 5 == 0){
      buzz = "Buzz";
   }else{
      buzz="";
   }
   console.log((fizz + buzz) || i);
}




console.log("3). exercise Chessboard");

console.log("size 8x8")

let size = 8;
let resp = "";

for (let i= 0; i < size; i++) {
  for(let j = 0; j < size; j++) {
    resp += ((j+i) % 2) === 0 ? " " : "#";
  }
  resp += "\n";
} 

console.log(resp);

console.log("\n Any size");

let res = "",
sizeHeight = 15,
sizeWidth = 9;

for (let i= 0; i < sizeHeight; i++) {
  for(let j = 0; j < sizeWidth; j++) {
    res += ((j+i) % 2) === 0 ? " " : "#";
  }
  res += "\n";
} 
console.log(res);

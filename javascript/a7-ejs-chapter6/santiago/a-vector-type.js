console.log("A Vector Type");

class Vec {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
  plus(c) {
    return new Vec(this.a + c.a, this.b + c.b);
  }
  minus(c) {
    return new Vec(this.a - c.a, this.b - c.b);
  }
  get length() {
    return Math.sqrt(Math.pow(this.a, 2) + Math.pow(this.b, 2));
  }
}

console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// → Vec{x: 3, y: 5}
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// → Vec{x: -1, y: -1}
console.log(new Vec(3, 4).length);
// → 5

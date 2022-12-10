class Vec{
    constructor(number1, number2){
        this.x = number1;
        this.y = number2;
    }

    plus(OtherNumber){
        return new Vec(this.x + OtherNumber.x, this.y + OtherNumber.y);
    } 
    
    minus(OtherNumber){
        return new Vec(this.x - OtherNumber.x, this.y - OtherNumber.y);
    }

    get length(){
        return Math.sqrt(Math.pow(this.x,2) + Math.pow(this.y,2));
    }
}


console.log(new Vec(1, 2).plus(new Vec(2, 3)));
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
console.log(new Vec(3, 4).length);

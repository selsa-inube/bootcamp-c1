class PGroup {
    constructor(array) {
        this.group = array;
        Object.freeze(this.group);
    }

    add(value) {
        if (!this.has(value)) {
            return new PGroup(this.group.concat(value));
        }
        
        return this;
    }

    delete(value) {
        if (this.has(value)) {
            return new PGroup(this.group.filter(element => element !== value));
        }
        
        return this;
    }

    has(value) {
        return this.group.includes(value);
    }
}

PGroup.empty = new PGroup([]);


let a = PGroup.empty.add("a");
console.log("a:", a);

let ab = a.add("b");
console.log("a after add operation:", a);
console.log("ab:", ab);
let b = ab.delete("a");
console.log("ab after delete operation:", ab);
console.log("b:", ab);
console.log(b.has("b"));
console.log(a.has("b"));
console.log(b.has("a"));
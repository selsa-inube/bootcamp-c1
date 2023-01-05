class Group {
  constructor() {
    this.values = [];
  }

  add(value) {
    if (!this.has(value)) {
      this.values.push(value);
    }
  }

  delete(value) {
    this.values = this.values.filter(v => v !== value);
  }

  has(value) {
    return this.values.includes(value);
  }

  static from(iterable) {
    let group = new Group;
    for (let value of iterable) {
      group.add(value);
    }
    return group;
  }
}



let group = Group.from([10, 20]);
console.log(group.has(10));
console.log(group.has(30));
group.add(10);
group.delete(10);
console.log(group.has(10));




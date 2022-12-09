class Group {
  constructor() {
    this.group = [];
  }

  add(value) {
    if (!this.has(value)) {
      this.group.push(value);
    }
  }

  delete(value) {
    if (this.has(value)) {
      const removeDelete = this.group.indexOf(value);
      delete this.group[removeDelete];
    }
  }

  has(value) {
    for (let member of this.group) {
      if (member === value) {
        return true;
      }
    }
    return false;
  }

  static from(iterable) {
    let group = new Group();
    for (let element of iterable) {
      group.add(element);
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

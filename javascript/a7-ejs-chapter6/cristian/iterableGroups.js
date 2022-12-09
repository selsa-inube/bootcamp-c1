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
    if (this.has(value)) {
      const removeDelete = this.values.indexOf(value);
      delete this.values[removeDelete];
    }
  }

  has(value) {
    for (let member of this.values) {
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

  [Symbol.iterator]() {
    return new GroupIterator(this);
  }
}

class GroupIterator {
  constructor(group) {
    this.currentIndex = 0;
    this.group = group;
  }

  next() {
    if (this.currentIndex == this.group.values.length) {
      return { done: true };
    } else {
      let value = this.group.values[this.currentIndex];
      this.currentIndex += 1;

      return { value, done: false };
    }
  }
}

for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}

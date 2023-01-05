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

    *[Symbol.iterator]() {
        for (let value of this.values) {
            yield value;
        }
    }
}

for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
}


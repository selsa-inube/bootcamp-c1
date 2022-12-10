class Group {
   
    constructor(){
        this.member = [];
    }
    
    static from(values) {
        let group = new Group;
        for (let value of values) {
          group.add(value);
        }
        return group;
      }

    has(value){
        return this.member.includes(value);
    }

    add(value){
        if(!this.has(value)){
            return this.member.push(value);
        }  
    }

    delete(value){
        if(this.has(value)){
            let ind = this.member.indexOf(value);
            return this.member.splice(ind, 1);
        }
    }

    [Symbol.iterator]() {
        return new GroupIterator(this);
      };
}


class GroupIterator {
    
    constructor(group) {
      this.position = 0;
      this.group = group;
    }
    
    next() {
      if (this.position == this.group.member.length) {
        return {done: true};
      }
      
      let value = this.group.member[this.position];
      this.position++;
       return {value, done: false};
    }
    
  }

//   Group.prototype[Symbol.iterator] = function() {
//     return new GroupIterator(this);
//   }
  
  
for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
  }



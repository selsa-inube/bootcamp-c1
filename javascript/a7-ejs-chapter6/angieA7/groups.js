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
  }
  

let group = Group.from([10, 20]);
console.log(group.has(10));
console.log(group.has(30));
group.add(10);
group.delete(10);
console.log(group.has(10));
console.log(group);
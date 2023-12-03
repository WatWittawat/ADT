// let myList = ["a", "b", "c", "d"];
// myList.unshift("x"); //O(n) bz it has to shift every bit.
// console.log(myList);
// myList.splice(2, 0, "Wat");
// console.log(myList);

class Player {
  constructor(name, type) {
    console.log(this);
    this.name = name;
    this.type = type;
  }
  introduce() {
    console.log(`Hello I am ${this.name} I like ${this.type}`);
  }
}

class Wizard extends Player {
  constructor(name, type) {
    super(name, type);
  }
  play() {
    console.log(`We are a ${this.type}`);
  }
}

const wizard1 = new Wizard("Wittawat", "Magicians");
// const wizard2 = new Wizard("Thammarat", "Healer");
console.log(wizard1.play());

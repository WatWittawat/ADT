//ex = 10 --> 11 --> 12

// let mylinklist = {
//   head: {
//     value: 10,
//     next: {
//       value: 11,
//       next: {
//         value: 12,
//         next: null,
//       },
//     },
//   },
// };
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Linked {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const nodenew = new Node(value);
    this.tail.next = nodenew;
    this.tail = nodenew;
    this.length++;
    return this;
  }

  prepend(value) {
    const nodenew = new Node(value);
    nodenew.next = this.head;
    this.head = nodenew;
    this.length++;
    return this;
  }

  insert(index, value) {}
}

const mylinklist = new Linked(10);
mylinklist.prepend(5);
console.log(mylinklist);

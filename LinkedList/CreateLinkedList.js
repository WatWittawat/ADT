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

  printList() {
    const arr = [];
    let curNode = this.head;
    while (curNode !== null) {
      arr.push(curNode.value);
      curNode = curNode.next;
    }
    return arr;
  }

  insert(index, value) {
    if (index === 1) {
      return this.prepend(value);
    }
    if (index >= this.length) {
      return this.append(value);
    }
    const newNode = {
      value: value,
      next: null,
    };
    const leader = this.traverseToindex(index - 1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    return this.printList();
  }

  traverseToindex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  remove(index) {
    const leader = this.traverseToindex(index - 1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    this.length--;
    return this.printList();
  }
}

const mylinklist = new Linked(10);
mylinklist.prepend(5);
mylinklist.append(15);
mylinklist.insert(1, 50);
mylinklist.insert(200, 40);
mylinklist.insert(2, 30);
console.log(mylinklist.printList());

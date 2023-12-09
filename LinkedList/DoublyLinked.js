// Construct Node
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}
// DoublyLinked List
class DoublyLinked {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const nodenew = new Node(value);
    nodenew.prev = this.tail;
    this.tail.next = nodenew;
    this.tail = nodenew;
    this.length++;
    return this;
  }

  prepend(value) {
    const nodenew = new Node(value);
    nodenew.next = this.head;
    this.head.prev = nodenew;
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
    const newNode = new Node(value);
    const leader = this.traverseToindex(index - 1);
    const follow = leader.next;
    leader.next = newNode;
    newNode.prev = leader;
    newNode.next = follow;
    follow.prev = newNode;
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
    unwantedNode.prev = leader;
    this.length--;
    return this.printList();
  }
}
// * - * - *
// -> -> ->
// <- <- <-

const mylinklist = new DoublyLinked(10);
mylinklist.append(15);
mylinklist.prepend(5);
mylinklist.prepend(4);
mylinklist.prepend(3);
console.log(mylinklist.remove(2));
// console.log(mylinklist.printList());

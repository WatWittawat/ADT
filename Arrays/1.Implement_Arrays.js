class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  //O(1)
  get(index) {
    return this.data[index];
  }

  //O(1)
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  //O(1)
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  // O(n)
  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
    return item;
  }

  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    this.pop();
  }
}

const newArrays = new MyArray();
// newArrays.push("Test");
// newArrays.push("Test1");
// newArrays.push("Test3");
// newArrays.delete(0);
// console.log(newArrays);

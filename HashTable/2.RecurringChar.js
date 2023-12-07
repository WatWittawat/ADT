// test case one => [2, 3, 4, 5]
// test case two => [2,5,1,2,3,5,1,2,4]
// test case three => [2,1,1,2,3,5,1,2,4]

const Recurring = (arr) => {
  const myob = {};
  let mymax = -9999;
  let checkundefined = arr.length;
  let tmp = 0;
  for (let i = 0; i < arr.length; i++) {
    if (!myob[arr[i]]) {
      myob[arr[i]] = 1;
    } else {
      myob[arr[i]] += 1;
    }
  }
  for (const key in myob) {
    if (myob[key] === 1) {
      tmp++;
    }
    if (myob[key] > mymax) {
      mymax = myob[key];
    }
  }
  if (tmp === checkundefined) {
    return undefined;
  }
  for (const key in myob) {
    if (myob[key] === mymax) {
      return key;
    }
  }
};

console.log(Recurring([2, 5, 1, 2, 3, 5, 1, 2, 4]));

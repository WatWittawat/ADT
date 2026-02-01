function findFactorialRecursively(n) {
  return n === 2 ? 2 : n * findFactorialRecursively(n - 1);
}

console.log(findFactorialRecursively(5));

function findFactorialIteratively(n) {
  let res = 1;
  for (let i = 1; i <= n; i++) {
    res *= i;
  }
  return res;
}

console.log(findFactorialIteratively(5));

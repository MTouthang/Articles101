function sum(...args) {
  let total = 0;
  for (let i of args) {
    total += i;
  }
  return total;
}

console.log(sum(2, 2, 2));

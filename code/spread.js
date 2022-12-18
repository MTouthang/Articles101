// spread operator in function calls
function sum(x, y, z) {
  return x + y + z;
}
const numbers = [1, 2, 3];
console.log(sum(...numbers)); // output: 6

// spread operator in array literals
const fruits = ["apple", "banana"];
const vegetables = ["broccoli", "carrot", ...fruits];

console.log(vegetables);
// output - [ 'broccoli', 'carrot', 'apple', 'banana' ]

// Spread operator in object literals
const user = { name: "John", age: 30 };
const userDetails = { ...user, location: "New York" };

console.log(userDetails);
// output - { name: 'John', age: 30, location: 'New York' }

const orginal = [1, 2, [3, 4]];
const copy = [...orginal];

console.log(orginal);
// output - [1, 2, [3, 4]]

// const item = [];

const sum1 = (...item) => {
  let total = 0;

  for (const num of numbers) {
    total += num;
  }
  return total;
};

console.log(sum1(1, 2, 3, 4, 5));

const fruites = ["apple", "banana", "orange"];
for (const fruit of fruites) {
  console.log(fruit);
}

const object = {
  name: "mang",
  title: "student",
};

for (obj in object) {
  console.log(`${obj} value is ${object[obj]}`);
}

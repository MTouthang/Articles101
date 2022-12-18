### ES6 features 
- ECMAScript 6 (ES6) is a version of the ECMAScript (ES) programming language, which is the standardized version of JavaScript.
- It was released in 2015 and introduced several new features to the language. it includes - 
- The let keyword
    - In  JavaScript, the `let` keyword is used to declare a block-scoped variable.
    - This means that the variable is only accessible within the block of code in which it is defined and is not accessible outside the block.
```javascript
// Example --
let x = 10; 
if(x>5){
let y=20
console.log(y)  // output:20
}
console.log(x) // ReferenceError: y is not defined
```
- The const keyword: 
    - In Javascript, the `const` keyword is used to declare a constant value that cannot be changed or reassigned to a different value.
    - This means that once a value is assigned to a constant, it cannot be changed or reassigned to a different value.
    - It's important to note that the value of a constant can be still be modified if it is an object or an array.
```javascript
// Example --
const PI = 3.14
console.log(PI) //  output: 3.14

PI=3.14159 // TypeError: Assignment to constant variable

```
- Arrow Functions
    - An arrow function is a type of function expression in JavaScript.
    - it is called an 'arrow' function because it is defined using an arrow (`=>`) rather than the `function` keyword.
    - Arrow functions are similar to regular functions, but they have a shorter syntax and do not have thier own `this` value.
Example - 
```javascript
const square = x => x*x
```
- The `...` operator:
    - In JavaScript, the `...` operator is known as the spread operator.
    - it allows an iterable such as an array, string or an object to be expanded in places where zero or more argument (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pair (for object literals) are expected.
    - The spread operator can also be used to shallow-copy an array or object.  
 

```javascript
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
```

- for/of
    - In JavaScript, the `for` loop is a control structure that allows you to repeat a block of code a specified number of times.
    - The `for...of` loop is a new feature introduced in ECMAScript 6 (ES6) that allows you to iterate over the values of an iterable object, such as an array or a string.
    - The `for...of` loop has the following syntax.
    - `for(variable of iterable){ // code to be executed }`

```javascript
const fruites = ["apple", "banana", "orange"];
for (const fruit of fruites) {
  console.log(fruit);
}
// output - apple, banana, orange
```
- Map objects
    - In JavaScript, the `map` object is collection of key/value pairs that can be iterated over and manipulated
    - It allows you to store data in a way that is more efficient and easier to work with than using objects
    - The method object has several useful method such as `set()`, `get()`, `has()`, `delete()`, `clear()`, and `size()` which allow us to add, retrieve check the existence of, remove, and clear key/value pairs, as well as get the number of key/value pairs in the map, respectively.
    - `forEach()` method to iterate over the key/value pairs in the map and perform an operation on each of them.
- Set Objects
- Classes
- Promise
- Symbol 
- Default Parameters
- Function Rest Parameter
- String.includes()
- String.startsWith()
- String.endswith()
- Array.from()
- Array keys()
- Array find()
- Array findIndex()
- New Math methods
- New Number Properties
- New Number Methods
- Object entries
- Javascript Modules.
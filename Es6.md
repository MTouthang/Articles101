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
    - Map object has only `size` property, which returns the number of Map elements.
    - some methods of Map are as follow -
        - new Map() : creates a new Map object
        - set() : Sets the value for a key in a Map
        - get() : gets the value for a key in a Map
        - clear(): Removes all the elements from a Map
        - delete() : Removes a Map element specified by a key
        - has() : Returns true if a key exist in a Map
        - forEach() : Invokes a callback for each key/value pair in a Map
        - entries() : Returns an iterator object with the key/value pairs in a Map
        - keys(): Returns an iterator object with the keys in a Map
        - values() : Returns an iterator object of the values in a Map

```javascript
const map = new Map();

map.set("one", "valueOne");
map.set("two", "valueTwo");
map.set("three", "valueThree");

console.log(map.get("three")); // valueThree

console.log(map.has("one")); // true

map.forEach((value, key) => {
  console.log(`key: ${key}, value: ${value}`);
});
// output -
// key: one, value: valueOne
// key: two, value: valueTwo
// key: three, value: valueThree

// or
for (const [key, value] of map) {
  console.log(`key: ${key}, value: ${value}`);
}

for (const [key, value] of map.entries()) {
  console.log(`key: ${key}, value: ${value}`);
}

for (const key of map.keys()) {
  console.log(key);
}
for (const value of map.values()) {
  console.log(value);
}

console.log(map.delete("three")); // true
console.log(map); // Map(2) { 'one' => 'valueOne', 'two' => 'valueTwo' }

```
- Set Objects
    - In JavaScript the `set` object is a collection of uniques values.
    - You can use the `set` object to store and retrieve data, similar to how you would use an array. 
    - However, unlike arrays, `set` objects do not allow duplicate values.
    - A set can hold any value of any data type.
    - Set has property of only `size` which returns the number element in a set.
    - Some of set Methods are -
        - new Set() creates a new Set
        - add() adds a new element to the Set
        - delete() Removes and element from a Set
        - has() Returns true if a value exists.
        - clear() Removes all elements from a set
        - forEach() Invokes callback for each element
        - values() Returns an iterator with all the values in a Set
        - keys() Same as values()
        - entries() returns an iterator with teh [value, value] pairs from a set.
```javascript
// new Set()
const set = new Set();

// add()
set.add("value1");
set.add("value2");
set.add("value3");

// has()
set.has("value1");

// forEah()
set.forEach((value) => {
  console.log(value);
});

// keys()
for (const item of set.keys()) {
  console.log(item);
}

// delete()
console.log(set.delete("value1"));

// use Set to extract unique item
const arr = ["one", "two", "three", "one", "two", "three"];
const uniqArr = new Set(arr);
console.log(uniqArr);
// output Set(3) { 'one', 'two', 'three' }

```
- Classes
    - In JavaScript, a class is a template for creating objects.
    - It is a way to define the structure and behavior of an object in a single place, and the reuse that definition to create multiples objects with the same structure and behavior.
    
```javascript
class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }

  speak() {
    console.log(`${this.name} says ${this.sound}`);
  }
}
const dog = new Animal('Dog', 'bark');
const cat = new Animal('Cat', 'meow');

dog.speak(); // 'Dog says bark'
cat.speak(); // 'Cat says meow'
```

- Promise
    -  In JavaScript, a Promise is an object that represent the eventual result of an asynchronous operation.
    - A Promise provides a way to handle the result of an asynchronous operation in a consistent manner, regardless of whether the operation succeeds or fails.
    - Promises are commonly use in JavaScript to handle the results of asynchronous operations, such as network requests or user input events.
    - A Promise is in one of these states:
        - pending: initial state, neither fulfilled nor rejected
        - fulfilled: meaning that the operation was completed successfully
        - rejected: meaning that the operation failed.
    - How promise is created :-
        - Promises in JavaScript are created using the `Promise` constructor which takes a callback function as its argument which is immediately invoked when the promise is called.
        - The callback function takes two arguments: `resolve` and `reject`.
        - The `resolve` function is used to indicate the asynchronous operation has completed.
        - and the `reject` function is used to indicate that the operation has failed.
    - Here is an example of Promise
```javascript
// creating function --
let promise = new Promise(function (resolve, reject) {
  if (true) {
    resolve("ok! resolve");
  } else {
    reject("No! rejected");
  }
});

// chaining the function -
promise
  .then((result) => console.log(result)) // ok! resolve
  .catch((error) => console.log("error")); // error

const prom = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("hello world");
  }, 3000);
});

prom.then((message) => console.log(message));
prom.catch((error) => console.log(error));
// output ---
// ok! resolve
// hello world (after 3 second)
```
- Symbol 
    - `Symbol` is a built-in object whose constructor returns a `symbol` primitive also called a symbol value or just a symbol - that's guaranteed to be unique.
    - Symbols are often used to add unique property keys to an object that wont collide with keys any other code might add to the object and which are hidden from any mechanisms other code will typically use to access the object
    - Symbols are useful for creating properties that are meant to be unique and not collide with any other properties on an object.
    - This can be especially useful when working with third-party libraries or APIs that may add properties to objects that you are working with.
    - Symbols are usefull for creating object properties that are meant to be private, since they cannot be accessed or enumerated using the object property methods.
```javascript
const symbol1 = Symbol('symbol1')
const symbol2 = Symbol('symbol2')

console.log(symbol1 === symbol2)// false
```
- Default Parameters
    - In JavaScript, a default parameter is a value that is used when an argument is not specified in a function call.
    - Default parameters allow you to specify a default value for one or more parameters in a function definition, 
    - which can be overridden by arguments passed to the functions when it is called.
    - Example
```javaScript
function greet(name="user"){
console.log(`hello, ${name}!)}
greet(); // outputs "Hello, user!"
```

- Function Rest Parameter
    - In JavaScript, a rest parameter is a way to represent an indefinite number of arguments as an array.
    - it allow you to specify that a function can take an unlimited number of arguments and all those arguments will be gathered into an array that you can access within the function.
```javascript
function sum(...numbers) {
  let result = 0;
  for (const number of numbers) {
    result += number;
  }
  return result;
}
console.log(sum(1, 2, 3)); // outputs 6
console.log(sum(1, 2, 3, 4, 5)); // outputs 15
```

- String.includes()
    - In JavaScript, the `includes()` method determines  whether a string contains the characters of a specified string.
    - It returns a Boolean value indicating whether the string was found or not.
```javascript
const str = 'The quick brown fox jumps over the lazy dog.';

console.log(str.includes('fox')); // outputs true
console.log(str.includes('cat')); // outputs false
```

- String.startsWith()
    - In JavaScript, the `startsWith()` method determines whether a string begins with the characters of a specified string.
    - It returns a Boolean value indicating whether the string was found or not.
```javascript
const str = 'The quick brown fox jumps over the lazy dog.';

console.log(str.startsWith('The')); // outputs true
console.log(str.startsWith('the')); // outputs false

// specified the search start
console.log(str.startsWith('the', 3)); // outputs true

```
- String.endsWith()
    - In Javascript, the endsWith() method determines whether a string ends with the characters of a specified string.
    - It returns a Boolean value indicating whether the string was found or not.
```javascript
const str = 'The quick brown fox jumps over the lazy dog.';

console.log(str.endsWith('dog.')); // outputs true
console.log(str.endsWith('cat.')); // outputs false

// specific search start with the provided index value.
console.log(str.endsWith('the', 37)); // outputs true

```
- Array.from()
    - In JavaScript, array.from() is use to create a new, shallow-copied Array instance from an array like or iterable object
```javascript
let arrayLike = {0: 'a', 1: 'b', 2: 'c', length: 3};
let myArray = Array.from(arrayLike);

console.log(myArray);  // Output: ['a', 'b', 'c']

```
- Array keys()
    - In JavaScript, the Array.keys method returns a new Array Iterator object that contains the keys for each index in the array.
    - The keys are returned in the same order as the values in the original array.
```javascript
let myArray = ['a', 'b', 'c'];

let keys = myArray.keys();

for (let key of keys) {
  console.log(key);  // Output: 0 1 2
}
```

- Array find()
    - In JavaScript, the Array.prototype.find method returns the value of the first element in the array that satisfies the provided testing function.
    -  It returns undefined if no element passes the test.
```javascript
let myArray = [1, 4, 6, 8, 10];

let result = myArray.find(element => element > 5);

console.log(result);  // Output: 6

```

- Array findIndex()
    - In JavaScript, the Array.prototype.findIndex method returns the index of the first element in the array that satisfies the provided testing function
    - It returns -1 if no element passes the test.
```javascript
let myArray = [1, 4, 6, 8, 10];

let result = myArray.findIndex(element => element > 5);

console.log(result);  // Output: 2
```

- New Math methods
    - In JavaScript, the Math object is a built-in object that provides mathematical constants and functions.
    - Some of the math methods are as follows -
        - `Maths.abs(x)` returns the absolute value of x or number
        - `Math.ceil(x)` returns smallest integer that is equal or greater to a number.
        - `Math.floor(x)` return the largest integer that is less than or equal to a number
        - `Math.max(x, y ..)` returns the largest zero or more number
        - `Math.min(x, y, ..)` returns the smallest zero or more number.
        - `Math.random()` return random number between 0 inclusive and 1 exclusive
        - `Math.round()` rounds the number to the nearest integer.
        - `Math.trunc()` returns integer part of the number x
        - `Math.sign(x)` returns if x is negative, null or positive (-1, 0, 1)
        - `Math.pow(x,y)` returns the value of x to the power of y
        - `Math.sqrt(x)` returns the square root of x
        - `Math.sin(x)` returns the sine of x (x is in radians)
        - `Math.cos(x)` Returns the cosine of x (x is in radians) 
        - `Math.log(x)` 	returns the natural logarithm (base E) of x
```javascript
console.log(Math.abs(-5));  // Output: 5
console.log(Math.ceil(5.3));  // Output: 6
console.log(Math.floor(5.3));  // Output: 5
console.log(Math.max(1, 3, 5, 2, 4));  // Output: 5
console.log(Math.min(1, 3, 5, 2, 4));  // Output: 1
console.log(Math.random());  // Output: a random number between 0 and 1
console.log(Math.round(5.5));  // Output: 6

console.log(Math.trunc(5.3));  // Output: 5
console.log(Math.trunc(-5.3));  // Output: -5
console.log(Math.sign(5));  // Output: 1
console.log(Math.sign(-5));  // Output: -1
console.log(Math.sign(0));  // Output: 0
console.log(Math.sign(NaN));  // Output: NaN

console.log(Math.pow(2, 3));  // Output: 8
console.log(Math.pow(4, 0.5));  // Output: 2

console.log(Math.sqrt(4));  // Output: 2
console.log(Math.sqrt(9));  // Output: 3


```

- New Number Properties
    - Som of the Number Properties are -
        - `Number.EPSILON` the difference between 1 and the smallest JS number.
        - `Number.MAX_VALUE` is the maximum positive value that a number can have in JavaScript (approximately 1.79E+308).
        - `Number.MIN_VALUE` is the smallest positive value that a number can have in JavaScript (approximately 5E-324).
        - `Number.MAX_SAFE_INTEGER` is the maximum safe integer in JavaScript (2^53 - 1) 
        - `Number.MIN_SAFE_INTEGER`is the minimum safe integer in JavaScript (-2^53 - 1).
        - `Number.POSITIVE_INFINITY` is a value that represents negative infinity.
        - `Number.NEGATIVE_INFINITY` is a value that represents positive infinity.
        - `Number.NaN`  is a value that represents "Not-a-Number" (NaN).
```javascript
console.log(Number.EPSILON);  // Output: 2.220446049250313e-16
console.log(Number.MAX_SAFE_INTEGER);  // Output: 9007199254740991
console.log(Number.MAX_VALUE);  // Output: 1.7976931348623157e+308
console.log(Number.MIN_SAFE_INTEGER);  // Output: -9007199254740991
console.log(Number.MIN_VALUE);  // Output: 5e-324
console.log(Number.NaN);  // Output: NaN
console.log(Number.NEGATIVE_INFINITY);  // Output: -Infinity
console.log(Number.POSITIVE_INFINITY);  // Output: Infinity

```

- New Number Methods
    - Some of the Number methods are -
        - `toString()` returns a number as a string
        - `toExponential()` returns a number written in exponential notation 
        - `toFixed()` returns a number written with a number of decimals
        - `toPrecision()` returns a number written with a specified length
        - `ValueOf()` returns a number as a number
        - `isFinite(value)`returns true if the value is a finite number, and false if the value is Infinity or NaN.
        - `isInteger(value)`returns true if the value is an integer, and false if the value is a float or NaN.
        - `isNaN(value)` returns true if the value is NaN, and false if the value is a number.
        - `isSafeInteger(value)`returns true if the value is a safe integer (an integer between -2^53 and 2^53), and false if the value is not a safe integer or NaN.
        - `parseFloat(string)` parses a string and returns a floating-point number.
        - `parseInt(string, radix)` parses a string and returns an integer. The radix parameter specifies the base of the number being parsed (for example, 2 for binary, 10 for decimal, and 16 for hexadecimal).
```javascript
console.log(Number.isFinite(5));  // Output: true
console.log(Number.isFinite(Infinity));  // Output: false
console.log(Number.isInteger(5.5));  // Output: false
console.log(Number.isNaN(NaN));  // Output: true
console.log(Number.isSafeInteger(9007199254740991));  // Output: true
console.log(Number.parseFloat('3.14'));  // Output: 3.14
console.log(Number.parseInt('1010', 2));  // Output: 10
let num = 123.456;

console.log(num.toString()); // "123.456"
console.log(num.toFixed(2)); // "123.46"
console.log(num.toPrecision(4)); // "123.5"
console.log(num.toExponential(2)); // "1.23e+2"
console.log(num.valueOf()); // 123.456

let str = "123.456";

console.log(parseInt(str)); // 123
console.log(parseFloat(str)); // 123.456


```
- Object entries
    - In JavaScript, the Object.entries method returns an array of key-value pairs for an object.
```javascript
let obj = {a: 1, b: 2, c: 3};

let entries = Object.entries(obj);

console.log(entries);  // Output: [['a', 1], ['b', 2], ['c', 3]]

```

- Javascript Modules
    - In JavaScript, modules are a way to organize and reuse code by encapsulating it in a single unit
    - There are several ways to create and use modules in JavaScript, including: ES6 modules and CommonJS modules

```javascript
// ES6 modules
// math.js
export const PI = 3.14;
export function calculateCircumference(radius) {
  return 2 * PI * radius;
}

// main.js
import { PI, calculateCircumference } from './math';
console.log(PI); // 3.14
console.log(calculateCircumference(5)); // 31.4

// COMMONJS modules
// math.js
exports.PI = 3.14;
exports.calculateCircumference = function(radius) {
  return 2 * this.PI * radius;
};

// main.js
const math = require('./math');
console.log(math.PI); // 3.14
console.log(math.calculateCircumference(5)); // 31.4

```
- Some of few best practices for writing JavaScript code:
    - `use Semicolons`
    - `Use Strict mode`
    - `Use the modern syntax` which is the latest syntax
    - `Use const and let instead of var`
    - `Use arrow function`
    - `Use template literals`
    - `Use destructuring`
    - `Use the spread operator`
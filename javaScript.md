### Must to Know JavaScript Interview Question
----
#### Q1. What is the nature of JavaScript ?
- JavaScript is a lightweight, interpreted, object-oriented language with [first class function](https://developer.mozilla.org/en-US/docs/Glossary/First-class_Function#:~:text=A%20programming%20language%20is%20said,a%20value%20to%20a%20variable.)
- best know as scripting languages for web-pages
- It is a [prototype-base](https://developer.mozilla.org/en-US/docs/Glossary/First-class_Function#:~:text=A%20programming%20language%20is%20said,a%20value%20to%20a%20variable.), multi-paradigm scripting language
- it support object-oriented, imperative and functional programming styles.
- it is [single threaded](https://dev.to/bbarbour/if-javascript-is-single-threaded-how-is-it-asynchronous-56gd) and synchronous, Hence blocking in nature

#### Q2. What are function scope and block scope ? 
- **In function scope**: when a variable is declared inside a function, it is only accessible within that function and cannot be used outside that function.
```javascript
// function scope 
function funScope(){
    let str = "function scope" 
    console.log(str) // function scope
}
console.log(str) // reference error: str is not defined
```
- **block Scope**: A variable when declare inside the if or switch condition or inside for or while loops, are accessible within that particular condition or loop. To be consise the variable declared inside the curly braces.
```javascript
// block scope --
if(true){
    let str = "block scope"
    console.log(str) // block scope
}
console.log(str) // Reference error: str is not define
```

- **Global Scope**:
    - Variables declared globally outside any function have Global scope.
    - Global variable can be accessed from anywhere in a javaScript program.
    - Variables declared with var, let and const are quite similar when declared out side a block. They all have global scope.
```javascript
let text = "Global scope"
function printName(){
console.log(text) 
}
printName() // Global scope
```
- **Lexical Scope**:
    - Lexical scope is the definition area of an expression.
    - In other word, an item's lexical scope is the place in which item got created.
    - Another name for lexical scope is static scope.
    - The place an item got invoked (or called) is not necessarily the item's lexical scope. Instead an item's definition space of its lexical scope.
```javascript
function getName(){
const myName= "Touthang"
return myName;
}

// In the above function - 
// we declare myName variable inside the function getName(),Therefore, MyName's lexical scope is getName()'s local environment because getName() is myName's definition space.
```
#### Q3. What is Synchronous and aSynchronous in javascript ?
- **Synchronous** : Synchronous means to be in a sequence, i.e every statement has to wait for the earlier statement to get executed.  
***stop execution of further code until it is done***
```javascript
// the following will be printed in sequence
console.log("JavaScript is")
console.log("Synchronous in")
console.log("nature")
/* 
    
    output - JavaScript is 
             synchronous in
             nature
 */
```
- **Asynchronous** : it enables your program to start a potentially long-running task and still be able to be responsive to other events while that tasks runs, rather than having to wait unitil that task has finished.    
*Asynchronous code executio is often preferable in situation where execution can be blocked indefinitely. Some examples of this are network api request, long running calcuations, file system operations etc. Using asynchronous code in the browser ensures the page remains responsive and the user experience is mostly unaffected.*
```javascript
console.log("one")
setTimeout(() => console.log("Two"), 100);
console.log("three") 
/*
output - 
one 
two
three
*/

```
#### Q4. Is JavaScript a statically typed or dynamically typed language? 
- JavaScript is dynamically typed language as the interpreter assigns variables a type at runtime base on the variables value at the time.    
*TypeScript comes into picture to statically assign the type of data structure that is require for the variable*

#### Q5. What is Hoisting in JavaScript?
- In JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables or clasess to the top of their scope, prior to execution of the code.
```javascript

console.log(x) // undefined
getName() // My name is Touthang

let x = 10

function getName(){
console.log("My name is Touthang")
}

// the variable and function are hoisted in the above program
```

#### Q6. What is undeclared and undefined in javascript?
- undeclared -> give responsibility to unborn or non existing variable or function
- undefined -> giving responsibility to the born or existing variable or function.
```javascript
let massage = "hello world"
console.log(massage) // undefined
console.log(msg) // undeclared
```

#### Q7. What is 'This'  in JavaScript ?
- "This" keyword refers to an object that is executing the current piece of code. 
- It references the object that is executing the current function
- If the function being referenced is a regular function, "this" references the global object.
- If the function that is being reference is a method in an object, "this" references the object itself.
- it references undefined in strict mode
- it reference window object in browser environment
- it reference empty curly braces in node environment.

#### Q8. When was Arrow function introduced?
- ES6 -> Ecma script 2015 

#### Q9. Difference between let, var and const ?
- In JavaScript, let var and const are three reserved keyword for storing variable.
- **var** 
    - The scope of a var variable is global scope or functional scope.
    - It can be updated and re-declared into the scope
    - It can be declared without initialization.
    - It can be accessed without initialization as its default value is "undefined".
    - Hoisting done, with initializing as default value
```javascript
console.log(greet) // undefined
var greet = "hello I'm var"  
console.log(greet) // hello I'm var
```
- **let** 
    - The scope of a let variable is block scope.
    - It can be updated but cannot be redeclared into scope
    - It can be declared without initialization.
    - It cannot be accessed without initialization otherwise it will give 'referenceError'.
    - Hoisting done, but not initialized (this is the reason for error when we access the let variable before declaration/initialization)
```javascript
console.log(name) // reference Error
let name = "I'm let"
console.log(name) // I'm let
```

- **const** 
    - The scope of a var variable is block scope.
    - It can be updated and re-declared into the scope
    - It cannot be declared without initialization.
    - It cannot be accessed without initialization as it cannot be declared without initialization
    - Hoisting done, but not initialized (this is the reason for error when we access the let variable before declaration/initialization)
```javascript
const PI = 22/7
console.log(PI)  // 3.142857142857143
const PI = 2.15 // SyntaxError: Identifier 'PI' has already been declared  
```

#### Q10. What is DOM and Virtual DOM ?
- DOM : 
    - The Document Object Model(DOM) is a programming interface for web documents. 
    - It represents the page so that programs can change the document structure, style and content. 
    - The DOM represents the document as nodes and objects, that way, programming languages can interact with the page.
    - Representation of all the elements in a tree structure.
    !["dom"](https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/DOM-model.svg/1200px-DOM-model.svg.png)
- VDOM: 
    - The virtual DOM (VDOM) is a programming concept where an ideal or virtual representation of a UI is kept in memory and synced with the "real" DOM by a library such as ReactDOM.
    - This process is called reconciliation.

#### Q11. Explain Closures in JavaScript
- A Closure is the combination of a function bundled together (enclosed) with reference to its surrounding state (the lexical environment).
- In other words, a closure gives you access to an outer function's scope from an inner function.
- In javaScript closures are created every time a function is created at function creation time.

```javascript
function a() {
  const c = 09;
  function b() {
    console.log(c);
  }
  return b;
}

let result = a();
result();
// output - 9 
```
- Uses of Closure
    - Module Design Pattern
    - Currying (transform function of multiple arguments to multiple function with single function)
    - functions like which only runs once
    - maintaining state in async world
    - setTimeouts
    - iterators
    - and many more
#### Q12. Explain rest and spread operators ?
- Rest parameter 
    - The rest parameter syntax allows a function to accept indefinite numbers of arguments as an array, providing a way to represent variadic(function which can except indefinite arguments) function in javascript
```javascript
function sum(...args) {
  let total = 0;
  for (let i of args) {
    total += i;
  }
  return total;
}

console.log(sum(2, 2, 2));
// output - 6
```
- Spread operators
    - Spread syntax operators(...) allows an iterable, such as an array or string, to be expanded in places where zero or more arguments (for function calls ) or elements (for array literal)
    - In object literals Spread syntax enumerates the properties of an object and adds the key value pairs to the object being created.
```javascript
function sum(x, y, z) {
  return x + y + z;
}
const arr = [1, 2, 3];

console.log(sum(...arr));

// output - 6
```
#### Q13 What are promises in javascript and How to use of promises in JavaScript ?
- A Promise is an object representing the eventual completion (or failure) of an asynchronous operation and its resulting value.
- A Promise is in one of these states: 
    - **pending**: initial state, neither fulfilled nor rejected
    - **fulfilled**: meaning that the operation was completed successfully.
    - **rejected**: meaning that the operation failed.
- While a Promise object is "pending" (working), the result is undefinded.
- When a Promise object is "fulfilled", the result is a value.
- When a Promise object is "rejected", the result is an error object.
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

```
#### 14. what is __proto__ in javascript
-The __proto__ property of Object.prototype is an accessor property (a getter function and a setter function) that exposess the internal [[Prototype]] (either an object or null) of the object through which it is accessed.
-  __proto__ is a way to inherit properties from an object in javascript.
- __proto__ a property of Object.prototype is an accessor property that exposes the [[Prototype]] of the object throught which it is accessed.
- This __proto__ sets alll properties of the obect set in its [[Prototype]] to the target object.
```javascript
var animal = {
  name: "blacky",
  age: 3,
  sound() {
    console.log(`${this.name} say bou2`);
  },
};
var Dog = {
  owner: "me",
  canRun: true,
};
Dog.__proto__ = animal;
Dog.sound();

```

#### 15. Prototype vs __proto__
#### 14. What are single Threaded and Multi-Threaded programming language.
#### 15. Is JavaScript statically or Dynamically type language?
#### 16. Scope Chaining ?
#### 17. What is arrow function ?
#### 18.  What is DOM and Virtual DOM ? DOM explaination in Details ? 
#### 19. What are different type of Functions we have and how all fuctions works ?
#### 20. Different types of Error?
#### 21. What is BOM(browser object model)?
#### what is currying in javascript
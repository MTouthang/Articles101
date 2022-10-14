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

```
- **let** 
    - The scope of a let variable is block scope.
    - It can be updated but cannot be redeclared into scope
    - It can be declared without initialization.
    - It cannot be accessed without initialization otherwise it will give 'referenceError'.
    - Hoisting done, but not initialized (this is the reason for error when we access the let variable before declaration/initialization)
```javascript

```

- **const** 
    - The scope of a var variable is block scope.
    - It can be updated and re-declared into the scope
    - It cannot be declared without initialization.
    - It cannot be accessed without initialization as it cannot be declared without initialization
    - Hoisting done, but not initialized (this is the reason for error when we access the let variable before declaration/initialization)
```javascript
//todo - manipulation of const
```
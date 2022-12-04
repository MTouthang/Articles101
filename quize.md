### JavaScript: A Brief Introduction
- **What does it mean when we say JavaScript is an "Object-oriented" languague**
    - *JavaScript is modeled around objects with properties and methods which can be handled in a modular fashion.*
- **What happens to the website and the code when you write code in the browser console?**
    - *Code in the browser console impacts the current browser instance only. It exists in the console for as long as the window is open*
- **What is an indicator of someone being a good JavaScript developer**
    - *They follow standards, invest in learning, use formatting and linting tools for consistency and write accessible code.*
- **What is the natural environment for JavaScript**
    - *The browser, server environments and your computer*
- **What is ECMAScript**
    - *The specification describing  how browsers should implement and interpret JavaScript*
- **Where should you develop and test your JavaScript code?**
    - *Develop in a code editor, test in as many browsers as you can get your hands on.*
- **Why have command line and automation tools become popular in Javascript Development**
    - *They simplify complex process and introduce features to help developers write better code*

### Up and Running with JavaScript
- **When does the browser execute Javascript?**
    - *By default: When the script is encountered. if the script is set to "async", when  the script is fully loaded. if the script is set to "defer", the entire HTML page is rendered.*
- **What is the correct markup for adding an external JavaScript file to an HTML document?**
    - *```<script src="javascript.js" async></script>```*
- **What happens when you defer JavaScript?**
    - The browser loads the javaScript asynchronously  when it is encountered, then waits until all HTML is rendered before executing the script. 
- **JavaScript modules are heavily used in frameworks like React and Vue. What is the advantage of using modules?**
    - *Modules enable modularization of code where inidividual functions, components, data objects and other parts can be separated into individual files.*
### Objects
- **Given the code below, how do you access the property named in ```let propName```? ```let propName="color", const myObject={ID =3, color = "pink", propLength=4, use=false```**
    - Using bracket notation: ```myObject[propName]```   
- **In the following object, what is the code in the second line called?**      
```
 const myObject = {
color: "pink"
}
```
    - An object property with a property name and a property value.
- **Why si the best-practice to place objects inside constants?**
    - so the object isnt accidentally altered or overwrittern.
- **How do yo access an object in JavaScript**
    - Call the object by naming its container
- **Can an object created from a class be given the same names as the class?**
    - No, if the class is a constant, this will cause an error. If the class is not a constant, the new object will overwrite the class.
- **How do yo define an object in JavaScript**
    - Create a variable, give it a name, and assign it an object using curly brackets:
```
const myObject = {
// Properties and methods go here.
}
```
- **What does the ```this``` keyword refer to in a class**
    - ```this``` refers to the current object created from the class

- **How do you create a new object fro a class?**
    - Using the ```new``` keyword, naming the class and passing the properties as parameters.
- **What is one advantage to using a class over an object constructor method?**
    - Classes can be extended
- **What is the difference between a function and a method?**
    - A function is a stand-alone function. A method is a function within an object.
- **Can you use arrow functions to create object methods**
    - No, object methods must be declared using function expression or the method definition shorthand.
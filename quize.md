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
### String output
- **How do you declare a javaScript expression inside a template literals?**
    - Using a dollar symbol followed by curly brackets:
```javascript
const myString = `Some texta and an ${expression}`
```
### DOM - Document Object Model
- **What method(s) would you use to check if an element has a specific ID and if so replace it with a different ID?**
    - the ```element.hasAttribute()``` and ```element.setattribute()``` methods.
- **What is the difference in the return from the ```element.className``` and ```element.classList``` properties?**
    - ```element.className``` returns a string containing all classes appended to the element, ```element.classList``` returns a DOMTokenList with each class appended to the element.
- **What does the HTML markup of this image element look like after the following script has executed?**
```javascript
const newImage = document.createElment("imag")
newImage.classList.add("feat-img")
newImage.setAttribute("src", "logo.svg")
newImage.setAttribute("alt", "The company logo")
newImage.style.cssText = "display: block"
```
```html
    <img class="feat-img src="logo.svg" alt="The company logo" style="display: block">    
```
- **What is the value of ```const target``` after this code has executed?**
```javascript
const target = document.querySelectorAll('a');
```
    - A node list containing each element object matching the query.

- **What is the value of const target after this code has executed (assuming there are elements in the DOM with the class "note")?**
```javascript
const target = document.getElementByClassName(".note");
```
    - An empty array-like HTML collection object.(The getElementByClassName() method receives a string of classnames to be found as its parameter Adding the . in front of the classname invalidates the query and no match is produced.)

- The querySelector() and querySelectorAll() methods use what kind of selectors as thier parameter?
    - A CSS selector string.
- **What happen if you run this code:**
```javascript
const target = document.querySelector(".first-paragraph")
target.style.font-family = "sans-serif"
```
    - "Uncaught SyntaxError: Invalid left-hand side in assignment". JavaScript does not allow for hyphens in property names. When targetting CSS properties, use camelCase, so the "font-family" property becomes "fontFamily".
- **What does the ```element.classList.toggle()``` method do?**
    - Adds the specified class if it is not appended to the element, removes the specified class if it is appended to the element.
- **Where in the HTML document does the new element appear when you use the document.createElement() methods?**
    - Nowhere: The element is created, but has not been added to the DOM.
- **What is the DOM**
    - DOM is short for "Document Object Model", the document object browser creates when it renders an HTML document.
- **How do you add an element created using createElement() to the DOM**
    - Using insertAdjacentElement(), prepend(), append() or appendChild methods


### Variables: Container for everything.
- **What does a single equals in JavaScript indicate?**
    - A value is assigned to the named variable
- **What happens if you use a named variable without first declaring it  using the var, let or cont keywords**
    - A global var is created with the name and value assignment.
- **What is the value of defaultColor when it is logged in the console?**
```javascript
var defaultColor = "purple"
function setColor(){
if(defaultColor === "purple"){
    
    let defaultColor = "orange"

}}
setColor()
console.log(defaultColor)
//output - "purple" 
```
- **How do you capture the result of a math equation like 42 * 38 in javaScript?**
    - create a variable and set it equal to the math equation
- **In what scenario should you use var instead of let to define a variable?**
    - When you need a globally scoped reassignable variable availabel to all function and statements
- **Which statement is true?**
    - Object properties within a constant can be changed
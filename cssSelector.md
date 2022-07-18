### What is CSS Selectors?
In simple word, Cascading Style Sheet selectors refer to selecting of a particular HTML element that needs to be styled.
![poster](https://hashnode.com/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1658137581258%2Fsix_J8CeA.jpg%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=1920&q=75)

### Different types of CSS Selectors -
CSS selectors are divided into 5 categories:

1.  Simple selectors
2. Combinator selectors
3. Pseudo-class selectors
4. Pseudo-elements selectors
5. Attribute selectors


#### Simple selectors includes -
- element selector - select the element base on the HTML element name
```
p {
color: red
}
``` 
*output -- Change all the paragraph element text colours in HTML to red*

- id selector - select the HTML element base on the element id attribute name,  the  hash ("#") symbol with the id attribute name is used to select the HTML element.

```
#para1 { 
color: red;
}
``` 
*output -- Change the paragraph element colour with "para1" id attribute to red*

- class selector - select the HTML element base on the class name attribute,  the full stop (".") symbol with the class name attribute is used to select the HTML element.

```
.para2 {
color: red
}
``` 
*output -- Change the paragraph element with "para2" class name attribute to red*

- Universal selector - select all the elements of the HTML, The asterisk ("*") symbol is used to select all the elements in HTML.

```
* {
  text-align: center;
  color: blue;
}
``` 
*output -- Change every HTML elements to align centre with the colour blue*

- Group selector - select multiple elements of the HTML which required to have a common style.

```
h1, h2, p {
  text-align: center;
  color: red;
}
``` 
*output - Change the h1, h2 and p elements of HTML  to align centre with colour red*

#### Combinators selector 
 Selector combines other selectors in a way that gives them a useful relationship with each other and the location of content in the document. There are four different types of Combinator selectors - 1. Descendant Combinator, 2. Child Combinator, 3. Adjacent sibling combinator and 4. General sibling combinator.


- Descendant Combinator - selector which selects all elements that are children of a specified element. Typically represented by a single space ("  ") characters - combines two selectors.

```
.box p {
color: red;
}
``` 
*output - change the colour of the p tag element which is inside an element with a class of .box.*


- Child selector - selector which selects all elements that are the children of a specified element, symbol (">") is placed between two CSS selectors. It matches only those elements matched by the second selector that are direct children of the element matched.

```
div > p {
background-color: yellow;
}
```
*output- change the background colour of the p tag which is children of the div tag*

- Adjacent sibling combinators - selector which selects an element that is directly after another specified element. The  ("+") symbol is placed between the two CSS selectors. It matches only those elements matched by the second selector that is the next sibling element of the first selector


 ```
div + p {
  background-color: yellow;
}
``` 
*output- change the background colour of the first p tag element after the div tag to yellow.*

- General sibling combinator - selector which selects all elements that are next siblings of a specified element. The ("~") symbol is placed between the two CSS selectors to select all the second selector element that comes anywhere after the first selector elements

```
div ~ p {
background-color: yellow;
}
```
*output - change the background colour of all the p tag elements after the div tag to yellow*


#### Pseudo-class selector
It is a keyword added to a selector that specifies a special state of the selected elements. The colon symbol (":") is placed between the selectors and the special defined state. Some uses are - 
It can be used to:
- Style an element when a user mouses over it.
- Style visited and invested links differently.
- Style an element when it gets focus.

```
button:hover{
color:blue;
}
```
*output: change the colour of any button over which the user's pointer is hovering*

#### Pseudo-elements selector
It is also a keyword added to a selector that enables styling a specific part of the selected elements. The double colon symbol "::" is placed between the selectors and the special defined state. Some of the uses can be - 

- It can be used to style the first letter or line of an element
- Insert content before or after the content of an element.

```
p::first-line{
color: red;
}
```
*output- change the colour of the first line of the p tag into red*

#### Attribute selector 
Select elements based on the presence or value of a given attribute.

```
a[target="_blank"] {
background-color:yellow;
}
```
*output - change the background colour of an anchor tag with a target attribute value of "_black"*

#### Summary -
Selectors in CSS are one most important concepts in CSS. Mastering these different ways of selecting HTML elements will take you to a further level in your developer life. 
Reference and more reading onhttps://www.w3schools.com/css/css_selectors.asp and https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors.
Thank you for Reading...

#### Articles source - [my blog](https://ngtouthang.hashnode.dev/quick-overview-on-css-selectors)

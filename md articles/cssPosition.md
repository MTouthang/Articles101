#### CSS position -
CSS Position is simply a CSS property which sets how an element will be positioned in a document. When it comes to positioning, there are four keywords i.e top, bottom left and right, with respect to these keywords and values, the elements can be placed.
![poster_emage](https://ngtouthang.hashnode.dev/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Funsplash%2F6JVlSdgMacE%2Fupload%2Fv1658178225819%2FDtS7HVJPZ.jpeg%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=1920&q=75)
#### There are five different types of position values:-
1. static
2. relative
3. absolute
4. fixed
5. sticky


- position: static - 
By default elements are positioned with static as a default value according to the normal flow of the document. The top, right, bottom, left and z-index properties have no effect.

```
.box {
  position: static
}
``` 
*Result - Assume element with .box class name element, the above code will always positioned the element according to the normal flow of the page*

- position: relative - 
In relative position, elements are positioned according to itself i.e their original position (normal position), and then position itself based on the values of top, right, bottom and left.
>Elements are not removed from the document flow ( does not affect the position of any other elements)

```
.box {
  position: relative;
  top: 100px;
}
``` 
*Result- Assume element with .box class element, the above code will move the .box class name element down by 100px*

- position: absolute - 
In absolute position, the element which is the child element is positioned to the nearest containing element which is the parent element with a  position
> Elements are removed from the document flow ( effect the position of any other elements)
> Always working with two elements child and parent

```
.parent {
    position: relative;
}
.box {
    position: absolute;
    top: 100px;
}
``` 
*Result -  Assume two elements with class name element .parent(parent) and .box(child), according to the above code the .box class name element will move 100px down from the top of the .parent class name element*

- position: fixed - 
In fixed position, the element is positioned always relative to the viewport, which means it always stays in the same place even if the page is scrolled. The top, right, bottom and left properties have an effect and are placed according to it. It is the same as the relative position except for the parent element is always the viewport or browser window.
> Elements are removed from the document flow.

```
.box {
    position: fixed;
    top: 100px;
    right: 100px;
}
``` 
*Result- Assume .box  class name element, the above code will move 100px to top and right with respect to the viewport or browser window and stay fix and move along with size of the browser window*

- position sticky -
In sticky position,  It is treated as relatively positioned until its containing block crosses a specified value within its flow root, at which point it is treated as stuck until meeting the opposite edge of its containing block.
> Behave like Relative, until they are 'stuck then like fix

```
.box {
  position:sticky;
  top: 0px;
}
``` 
*Result - Assume .box class name element, according to the above code the  .box class name element will get stuck and stick at the top when the top space between the .box class name element and the container equals zero*

**Demo**
codepen -> %[https://codepen.io/mtouthang/pen/bGvqwvM?editors=1100]

**Reference and further reading** -

- https://developer.mozilla.org/en-US/docs/Web/CSS/position#try_it

- https://www.w3schools.com/css/css_positioning.asp

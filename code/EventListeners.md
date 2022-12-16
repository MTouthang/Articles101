### Event 
- In JavaScript, the `event` object is an object that represent an event in the browser. 
- It is passed as an argument to event listeners and contains information about the event, such as the type of event, the target element that triggered the event and any additional data related to the event.

### Adding Event
- Events can be added using the `addEventListener()` function.
- In JavaScript, an event listener is a function that is executed in response to a specific event occurring on a webpage.
- It  is used to add interactivity to a webpage by allowing the webpage to respond to user actions such as clicking on a button, hovering over an element or typing in a text field.

```javascript
let button = document.getElementById("myButton");

button.addEventListener('click', function(){
    console.log("button was clicked")
})
```

### Some of the mouseEvent:
- `oncontextmenu`: The event occurs when the user right-clicks on an element to open a context menu.
- `onclick`: The event occurs when the user clicks on an element
- `ondblclick`: The event occurs when the user double-clikcs on an element.
- `onmousedown`: The event occurs when the user presses a mouse button over an element.
- `onmouseenter`: The event occurs when the pointer is moved onto an element.
- `onmouseleave`: The event occurs when the pointer is moved out of an element.
- `onmousemove`: The event occurs when the pointer is moving while it is over an element
- `onmouseout`: The event occurs when a user moves the mouse pointer out of an element, or  out of one of its children.
- `onmouseover`: The event occurs when the pointer is moved onto an element,or onto one of its children.
- `onmouseup`: The event occurs when a user releases a mouse button over an element.
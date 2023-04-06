### Async/Await in JavaScript -

- In JavaScript, the `async` keyword is used to define an asynchronous function which is a function that is capable of returning a promise
- and can be use with `await` keyword.
- The `await` keyword is used inside an asynchronous function to pause its execution until a promise is resolved.
- This allows us to write asynchronous code that reads like synchronous code, making it easier to understand and use.

- Examples

```javascript
// with arrow function
const fetchData = async () => {
  try {
    const response = await fetch("https://api.github.com/users/MTouthang");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};
fetchData();
// output - user github profile details ---

// non arrow functions
async function getData() {
  try {
    const response = await fetch("https://api.github.com/users/MTouthang");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
    return error;
  }
}

getData();

```
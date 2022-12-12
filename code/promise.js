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

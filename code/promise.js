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

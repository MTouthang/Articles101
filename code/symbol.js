// create a symbol using the symbol() function

const uniqueId = Symbol();
console.log(typeof uniqueId);

// use the symbol as a property of an object
const object = {
  uniqueId: "hello, world",
};

// access the property using the symbol as the key
console.log(typeof object.uniqueId);

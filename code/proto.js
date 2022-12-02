var animal = {
  name: "blacky",
  age: 3,
  sound() {
    console.log(`${this.name} say bou2`);
  },
};
var Dog = {
  owner: "me",
  canRun: true,
};
Dog.__proto__ = animal;
Dog.sound();

console.log(Dog);

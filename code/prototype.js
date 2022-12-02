function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyecolor = eyecolor;
}

Person.prototype.nationality = "india";

const john = new Person("John", "doe", 33, "blue");
console.log(john.nationality);

Person.prototype.name = function () {
  return this.firstName + this.lastName;
};

console.log(john.name());

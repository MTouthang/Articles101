const myArray = [1, 2, 3, 4];
myArray.forEach((item, index) => {
  myArray[index] = ++item;
});

console.log(myArray);

// ### Arrays  Methods

/** Firstly what is array is javascript -
 * In Javascript, arrays aren't primitives but are instead Array objects with the following core characteristic:
 * - JavaScript arrays are resizable an can contain a mix of different data types.
 * - Javascript arrays are not associative arrays and so array elements cannot be acessed using arbitary strings as indexes, but must be accessed using nonnegative intergers as indexes
 * - Javascirpt arrays are zero-indexed, the first element of an array is at index 0, the second is at index 1 and son on - and the last element of an array's length property minus 1.
 *
 */

// Declaration -
let array = new Array();
let arr = [];

// NoTe -
/**
 * - the start index is always inclusive which means it will be included and the end index will be always exclusive which means it will be excluded.
 * - array.length is use to find the length of the array
 */

// ### Array methods -
/**
 * Arrays provide a lots of methods which make things easier while handling the array. The methods can be split into groups
 * they are  -
 * 1. To add/remove elements
 * 2. To search among elements
 * 3. To iterate over elements
 * 4. TO transform the array
 */

// ### 1. TO add or remove elements

// push() - The push() methods adds one or more elements to the end of an array and returns the new length of the array.
const fruits = ["mang", "banana", "apple"];
fruits.push("Watermelon");
console.log(fruits);

// pop() - The pop() method removes the last elemnent from an array and returns that element.
fruits.pop();
console.log(fruits);

//shift() method removes the first element from an array and returns that removed element.
const num = [1, 2, 3];
const numOne = num.shift();

console.log("The change wala:-", num);
console.log("The not change wala:-", numOne);
// unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
num.unshift(4, 5);
console.log(num);

// The splice() method changes the content of an array by removing or replacing existing elements and/or adding new elements in place.

//syntac - array.splice(pos, deleteCount, ...newItems) - at index pos deleteCount elements and insets newItems
const week = ["monday", "tuesday", "wednesday", "sunday"];
week.splice(3, 1, "Thursday", "friday", "saturday", "sunday");
console.log(week);

// The slice() method returns a shallow copy of a portion of an array into a new array object selected from start(inclusive) to end(exclusive). The original array will not be be modified
// syntax - array.slice(start, end(optional))
const birds = ["parrot", "crow", "Hummy bird", "Peacock"];
const sliceArray = birds.slice(2);
console.log(sliceArray);

// The concate() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

const arr1 = [1, 2, 4, 6, 8];
const arr2 = [10, 12, 14, 16];

const arr3 = arr1.concat(arr2);
console.log(arr3);

/**
 * The Array.from() static method creates a new, shallow-copied Array instances from an iterable or array-like object
 * syntax - Array.from(arraylike, function)
 */
console.log(Array.from("hello"));

// To search among elements
// indexOf - syntax indexOf(searchElement, fromIndex(optional))
/**
 * The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present
 *
 */
const names = ["rahul", "john", "preety", "samuel"];
console.log(names.indexOf("john"));

/**
 * The at() method takes an integer value and returns the item at that index, allowing for positive and negative integers, Negative integers count back from the last
 * item in the array
 * syntax - Array.at(index)
 */

const myPets = ["dog", "cat", "fish"];
const mycat = myPets.at(1);
console.log(mycat);

/**
 * The lastindexOf() method returns the last index at which a given element can be found in the array, or -1 if its is not present. The array is searched backwards, starting at fromIndex
 *
 */
console.log(names.indexOf("rahul"));

/**
 * Includes - The includes() method determines wheter an array includes a certain value among its entries, returning true or false as appropriate
 * syntax - arr.includes(searchElement, fromIndex)
 */

const pet = ["cat", "dog", "bat"];
console.log(pet.includes("dog"));

/**
 * find - the find() method returns the first element in the provided array that satisfies the provided testing function. if no values satisfy the testing function, undefined is returned.
 * syntax - find(func)
 */

const numbers = [5, 12, 8, 130, 44];
const found = numbers.find((e) => e > 10);
console.log("find found:- ", found);

/**
 * The filter() method creates a shallow copy of a portion of a given array, filtered down to just the element from the given array that pass the test implemented by the provided function
 * syntax = filter(func)
 */
const course = ["science", "eco", "Math", "GK"];
const abr_course = course.filter((c) => c.length < 4);
console.log(abr_course);

/**
 * findIndex - The findIndex() method returns the index of the first element in an array that satisfies the provide testing function. If no elements satisfy the testing function, -1 is returned
 * findIndex(func)
 */

const ranNum = [8, 10, 12, 190, 6];
console.log(
  "findIndex:-",
  ranNum.findIndex((e) => e > 10)
);

// TO iterate over elements -
/**
 * The forEach() method executes a provided function once for each array element.
 * syntax - forEach(func)
 */

const evenNum = [2, 4, 6, 8];
evenNum.forEach((e) => console.log(e * 2));
console.log("forEach-", evenNum);

/**
 * The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
 * syntax - Array.every(func)
 */
const ages = [20, 18, 32, 40];
const ageCheck = ages.every((e) => e >= 18);
console.log(`Age check:- ${ageCheck}`);

// To Tranform the array -

/**
 * The map() method creates a new array populated with the results of calling a provided function on every element in the calling array
 * syntax - arr.map(func)
 */

const oddNum = [3, 6, 9, 12];
const oddMulti = oddNum.map((e) => e * 3);

console.log(oddMulti);

/**
 * The sort() method sorts the elements of an array in place and returns the reference to the same array, now sorted. The default sort order is ascending, built upon converting the elements
 * into strings, then comparing their sequences of UTF-16 code units values.
 * arr.sort(func)
 *
 */

const randNum = [4, 8, 1, 4, 7, 10, 20];
const sortedNum = randNum.sort((a, b) => {
  return a - b;
});
console.log(sortedNum);

/**
 * The reverse() method reverses an array in place and returns the reference to the same array, the first array element now becoming the last and the last array element becoming the first.
 * syntax - arr.reverse()
 */
const stArray = ["one", "two", "three"];
const revArr = stArray.reverse();
console.log(revArr);

/**
 * split() convert a string to an array-
 * syntax - arr.split() or arr.split(separator) or arr.split(separator, limit)
 */

const str = "Hello Good Morning";
const strArr = str.split(" ");
console.log("split-", strArr);

/**
 *The join() method creates and returns a new string by concatenating all of the elements in an array, separated by commas by commas or a specified separator string. if the array has only one item, then 
 that item will be returned without using the separator.
 syntax - arr.join() or arr.join(separator)
 */

const item = ["Hello", "world", "Welcome"];
const str1 = item.join("");
console.log(str1);

/**
 * The reduce() methods executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element.
 * The final result of running the reducer across all elements of the array is a single value.
 * syntax- arr.reduce((preValue, curValue) => {}, initialValue)
 */

const arrNumbers = [1, 2, 3, 4, 5];
const initValue = 0;
const sumArr = arrNumbers.reduce(
  (preValue, curValue) => preValue + curValue,
  initValue
);
console.log(sumArr);

/**
 * The Array.isArray() method determines whether the passed value is an Array.return true if it is array else false.
 * syntax - Array.isArray(value)
 */

const myAr = ["big", "small", "large"];
const chekAr = Array.isArray(myAr);
console.log(chekAr);

/**
 * The copyWithin() method shallow copies part of an array to another location in the same array and returns it without modifying its length.
 * syntax -Array.copyWithin(target) or Array.copyWithin(target, start) or Array.copyWithin(target, start, end)
 *
 */

const arr5 = [1, 2, 3, 4, 5];
console.log(arr5.copyWithin(0, 1, 4));

/**
 * The fill() method changes all elements in an array to a static value, from a start index (default 0) to an end index(default array.length). It returns the modified array.
 * syntax - Array.fill(value)or Array.fill(value, start) or Array.fill(value, start, end)
 */
const arrr = [1, 2, 3, 4];
console.log(arrr.fill(8, 2, 4));

/**
 * The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
 * flat() method also removes empty slots in arrays
 * syntax -flat() or flat(depth) depth: the depth level specifying how deep a nested array structure should be flattened. Defaults to 1.
 */

const nesArray = [1, 2, 3, [4, 5]];
const fltArr = nesArray.flat();
console.log(fltArr);

// **The toString()** metho returns a string representing the specified array and its elements.
// `syntax- Array.toString()`

// ```javascript
const arrEle = [100, "BC", "ago"];
console.log(typeof arrEle.toString());

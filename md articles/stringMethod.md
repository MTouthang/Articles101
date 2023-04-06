### String in JavaScript 
- In JavaScript String is a sequence of characters enclosed in single or double quotes
- A string is used to represent and manipulate text, and it is one of the most commonly used datatypes in javascript.
- Example: `let hello = "hello world"`

**Properties of String in JavaScript**
- `length`: Return number of characters in string.(length is the most commonly use property in string)
```javascript
// example 
let str = "helloworld"
let len = str.length
console.log(len)
// output - 10
```   
- `constructor`: Returns reference to the fucntion that created the string object.
- `Prototype`: allow you to add new methods to the string object

**String methods**
- `slice()`
    - The `slice()` method extracts a section of a string and returns it as new string and returns it as a new  string, without modifying the original string.
```javascript
/**
 * slice()
 * syntax - str.slice(startIndex, endIndex) 
 * endIndex - is always exclusive
 */
const str =
  "The slice() method extracts a section of a string and return it as a new string";
console.log(str.slice(43, 50));
// Output - string
```

- `substring()`
    - The `substring()` method returns the part of the `string` from the start index up to and  excluding the end index, or to the end of the string if no end index is supplied.
```javascript
/**
 * substring()
 */
const str1 = "Mozilla";
console.log(str1.substring(0, 1));
// output - "M"
```

- `substr()`
    - **deprecated**
    - The `substr()` method returns a portion of the string

- `replace()`
    - The `replace()` method returns a new string with one, some, or all matches of a `pattern` replaced by a replacement.
    - The pattern can be a string or a `RegExp`, and the replacement can be a string or a function called for each match.
    - If pattern is a string, only the first occurence will be replaced.
    - The original string is left unchanged.
```javascript
/**
 * replace()
 */
const p = "The quick brown fox jumps";
console.log(p.replace("fox", "cat"));
// Output - "The quick brown cat jumps"
```
    - if the pattern  is an empty string, the replacement is prepended to the start of the string
```javascript
const userId = "id"
console.log(userId.replace("", "_"))
// output - "_id"
```

- `replaceAll()`
    - The `replaceAll()` method returns a new string with all match of a pattern replaced by a `replacement`. The `pattern` can be a string or a `RegExp`.
```javascript
/**
 * replaceAll()
 */
const word = "the quick brown fox jumps up the windows";
console.log(word.replaceAll("the", "a"));
// output - "a quick brown fox jumps up the windows"
```
- `toUpperCase()`
- `toLowerCase()`
- `concat()`
- `trim()`
- `trimStart()`
- `trimEnd()`
- `padStart()`
- `padEnd()`
- `charAt()`
- `charCodeAt()`
- `split()`
- `@iterator()`
- `at()`
- `codePointAt()`
- `endsWith()`
- `fromCharCode()`
- `fromCharCodePoint()`
- `includes()`
- `indexOf()`
- `lastIndexOf()`
- `localeCompare()`
- `match()`
- `matchAll()`
- `normalize()`
- `raw()`
- `repeat()`
- `search()`
- `startsWith()`
- `toLocaleUpperCase()`
- `toLocaleLowerCase()`
- `valueOf()`
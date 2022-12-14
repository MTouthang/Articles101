/**
 * slice()
 * syntax - str.slice(startIndex, endIndex)
 * endIndex - is always exclusive
 */
const str =
  "The slice() method extracts a section of a string and return it as a new string";

console.log(str.slice(43, 50));

/**
 * substring()
 */
const str1 = "Mozilla";
console.log(str1.substring(0, 1));

/**
 * replace()
 */
const p = "The quick brown fox jumps";
console.log(p.replace("fox", "cat"));
// Output - "The quick brown cat jumps"

const userId = "id";
console.log(userId.replace("", "_"));

/**
 * replaceAll()
 */
const word = "the quick brown fox jumps up the windows";
console.log(word.replaceAll("the", "a"));

/**
 * toUpperCase()
 */
const lowerStr = "hello";
console.log(lowerStr.toUpperCase());
// output - HELLO

/**
 * toLowerCase()
 */
const uppCase = "HELLO";
console.log(uppCase.toLowerCase());
// output - hello

/**
 * concat()
 */
const s1 = "hello";
const s2 = "World";
console.log(s1.concat(s2));
// output - hello world

/**
 * trim()
 */
const para = " This is a paragraph  ";
console.log(para.trim());
//output - "This is a paragraph"

/**
 * trimStart()
 */
const s = " This is a paragraph  ";
console.log(s.trimStart());
//output - "This is a paragraph "

/**
 * trimEnd()
 */
const trimStr = " This is a paragraph  ";
console.log(s.trimEnd());
//output - " This is a paragraph"

/**
 * padStart()
 */
const egPad = "5";
console.log(egPad.padStart(2, "0"));
// output - "05"

const account = "2384775994872892";
const lastFourDigit = account.slice(-4);
const maskedAccountNum = lastFourDigit.padStart(account.length, "*");
console.log(maskedAccountNum);

/**
 * padEnd()
 */
const title = "The Earth ";
console.log(title.padEnd(16, "."));
// output - "The Earth ......"

/**
 * charAt()
 */
const sentence = "Hello world";
console.log(sentence.charAt(6));
// output - "w"

/**
 * charCodeAt()
 */
const sen = "hello world";
console.log(sen.charCodeAt(6));
// output - 119 (which is the UTF_16 code of "w")

/**
 * split()
 */
const sp = "This is a sentence";
console.log(sp.split(" "));
// ouput - [ 'This', 'is', 'a', 'sentence' ] (divide where there is empty space)

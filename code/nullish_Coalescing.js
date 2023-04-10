// The Nullish operator is written as two question marks ??

/**
 * The result of a ?? b is:
 * - if a is defined, then a
 * - if a isn`t defined, then b
 *
 * In simplest word, ?? returns the first argument if it's not null/undefine. Otherwise, the second one.
 * It return the defined value of the two.
 */

let user = "john";
let user1 = null;

console.log(user ?? "anonymouse"); // john

console.log(user1 ?? user); // john

/**
 * The optional Chaining ?. is a safe way to access nested object properties, even if an intermediate property doesn't exist.
 */

let user = {
  name: "username",

  role: {
    tile: "admin",
  },
};

console.log(user.role.category?.caption);
// console.log(user.role.category.age);

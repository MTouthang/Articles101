const map = new Map();

map.set("one", "valueOne");
map.set("two", "valueTwo");
map.set("three", "valueThree");

console.log(map.get("three")); // valueThree

console.log(map.has("one")); // true

map.forEach((value, key) => {
  console.log(`key: ${key}, value: ${value}`);
});
// output -
// key: one, value: valueOne
// key: two, value: valueTwo
// key: three, value: valueThree

// or
for (const [key, value] of map) {
  console.log(`key: ${key}, value: ${value}`);
}

for (const [key, value] of map.entries()) {
  console.log(`key: ${key}, value: ${value}`);
}

for (const key of map.keys()) {
  console.log(key);
}
for (const value of map.values()) {
  console.log(value);
}

console.log(map.delete("three")); // true
console.log(map); // Map(2) { 'one' => 'valueOne', 'two' => 'valueTwo' }

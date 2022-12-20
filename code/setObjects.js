// new Set()
const set = new Set();

// add()
set.add("value1");
set.add("value2");
set.add("value3");

// has()
set.has("value1");

// forEah()
set.forEach((value) => {
  console.log(value);
});

// keys()
for (const item of set.keys()) {
  console.log(item);
}

// delete()
console.log(set.delete("value1"));

// use Set to extract unique item
const arr = ["one", "two", "three", "one", "two", "three"];
const uniqArr = new Set(arr);
console.log(uniqArr);
// output Set(3) { 'one', 'two', 'three' }

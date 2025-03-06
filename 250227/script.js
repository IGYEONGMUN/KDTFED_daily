const bag = new Map();
bag.set("color", "red").set("price", "30000");
bag.delete("price");
bag.clear();

const myCup = new Map([
  ["color", "white"],
  ["material", "ceramic"],
  ["capacity", "300ml"],
]);

// console.log(myCup.keys());

const myCupIte = myCup.keys();

console.log(myCupIte);

const myCupIte02 = myCup.values();
console.log(myCupIte02);

const myCupIte03 = myCup.entries();
console.log(myCupIte03);

myCupIte.forEach((item) => {
  // console.log(item, typeof item);
});
myCupIte03.forEach((item) => {
  console.log(item, typeof item);
});

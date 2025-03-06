// const addNum = (...numbers) => {
//   console.log(numbers);
//   let sum = 0;
//   numbers.forEach((number) => {
//     sum += number;
//   });
//   return console.log(sum);
// };
// addNum(1, 2, 3, 4, 5);

// const animal = ["bird", "cat"];
// const fruits = ["apple", "banana", "cherry"];

// const mine = [...fruits];

// // console.log(mine);
// // console.log(fruits);
// // mine[1] = "orange";
// // console.log(mine);
// // console.log(fruits);

// console.log(mine);
// console.log(fruits);
// mine[1] = "orange";
// console.log(mine);
// console.log(fruits);

// const book = {
//   title: "Javascript",
//   pages: 500,
// };

// console.log(book);

// book.published = "2025-03";

// console.log(book);

// book["author"] = "David";
// console.log(book);

// const fn = () => {
//   return "result";
// };

// const add = (a, b) => {
//   return a + b;
// };

// const obj = {
//   [fn()]: "함수 키 ",
//   [`${add(10, 20)} key`]: "계산식 키",
// };

// console.log(obj);

// const user = {
//   name: "ddd",
// };

// user.age = 20;
// console.log(user);

// const makeUser = (name, age) => {
//   return {
//     name,
//     age,
//   };
// };

// const user1 = makeUser("Sophia", 30);
// console.log(user1);

const mySymbol1 = Symbol();
const mySymbol2 = Symbol("something");

console.log(mySymbol1 === mySymbol2);
console.log(mySymbol1);
console.log(mySymbol2);

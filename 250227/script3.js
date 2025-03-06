// const hi = "hello";
// Array.from(hi).forEach((ch) => {
//   console.log(ch);
// });

// const chTest = [...hi];
// console.log(chTest);

// const [ch1, ch2, ...ch3] = hi;
// console.log(ch1, ch2, ch3);

// const arr = [1, 2, 3, 4, 5];

// function fnc() {
//   console.log("1");
//   console.log("2");
//   console.log("3");
// }
// fnc();

function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

const g1 = gen();
console.log(g1);

g1.forEach((item) => {
  console.log(item);
});

// for (let item of g1) {
//   console.log(item);
// }

// const season = [];
// season[0] = "spring";
// season[1] = "summer";

// const pets = ["dog", "cat", "mouse"];

// const fruits = new Array("사과", "복숭아", "포도");

// console.log(fruits);

// pets[2] = "hamster";
// console.log(pets);

// const colors = ["red", "green", "blue", "white", "black"];

// for (let i = 0; i < colors.length; i++) {
//   console.log(colors[i]);
// }

// const animals = ["lion", "bear", "bird"];

// animals.forEach((animal, index, array) => {
//   console.log(`[${array}] [${index}] : ${animal}`);
// });

// const vegetable = ["양상추", "토마토", "피클"];
// const meat = ["불고기"];

// const meatBurger = vegetable.concat(meat);
// const meatBurger = vegetable.concat(meat, "빵");
// const meatBurger = [...vegetable, ...meat, "빵"];
// console.log(meatBurger);

// const numbers = [6, 9, 3, 21, 18];
// console.log(numbers);
// console.log(numbers.reverse());

// const week = ["sun", "mon", "tue"];
// console.log(week.sort());

// const values = [5, 20, 3, 11, 4, 15];
// console.log(
//   values.sort((a, b) => {
//     // if (a > b) return 1;
//     // if (a < b) return -1;
//     // if (a === 0) return 0;
//     return b - a;
//   })
// );

// const animals = ["lion", "bear", "bird"];
// // console.log(animals.pop());
// animals.pop();
// console.log(animals);
// animals.push("tiger");
// console.log(animals);

// animals.shift();
// console.log(animals);
// animals.unshift("dog");
// console.log(animals);

const subjects = ["html", "css", "js", "ts", "react"];
// console.log(subjects.splice(2));
const test = subjects.splice(2, 2);

console.log(test);
console.log(subjects);

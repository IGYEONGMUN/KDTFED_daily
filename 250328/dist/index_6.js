"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let a = () => 10;
let b = () => 10;
a = b;
let c = (value) => { };
let d = (value) => { };
let animalFunc = (animal) => {
    console.log(animal.name);
};
let dogFunc = (dog) => {
    console.log(dog.name);
    console.log(dog.color);
};
// 만들어낼수있는 경우의수가 dogFunc가 더 많음-슈퍼타입
// animalFunc = dogFunc;오류
dogFunc = animalFunc;
// func1이 만들어낼수있는 경우의수가 더많음-슈퍼타입
let func1 = (a, b) => { };
let func2 = (a) => { };
func1 = func2;
function func7(a, b, c) {
    if (typeof b === "number" && typeof c === "number") {
        console.log(a + b + c);
    }
    else {
        console.log(a * 20);
    }
}
func7(1);
// func7(1, 2);오류
func7(1, 2, 3);

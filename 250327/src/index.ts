// number타입
let num1: number = 10;
// literal타입
let num2: 10 = 10;
// num1-슈퍼타입 num2-서브타입
num1 = num2;
// num2 = num1;오류

let a: unknown = 1;
let b: unknown = "hello";
let c: unknown = true;
let d: unknown = undefined;

let unknownVar: unknown;

// let num: number = unknownVar;오류/ 다운캐스팅
// let str: string = unknownVar;오류/ 다운캐스팅
let num01: number;
// let test01: never = 10;오류/다운캐스팅
// let test03: never = true;오류/다운캐스팅

interface IAnimal {
  // name: string;
  // color: string;
  [key: string]: string;
}

type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: "기린",
  color: "yellow",
};

let dog: Dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
};

let cat = {
  name: "야옹이",
  color: "white",
  country: "일본",
};

// 상대적으로  animal-슈퍼타입
// dog = animal;오류
animal = dog;
animal = cat;

type Book = {
  name: string;
  price: number;
};

type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
};

let book: Book = {
  name: "ts",
  price: 30000,
  // skill = "react",타입별칭으로 지정하지 않은요소 - 오류 - 객체의 초과 프로퍼티(속성)검사
};
let programmingBook: ProgrammingBook = {
  name: "typescript",
  price: 30000,
  skill: "reactjs",
};

book = programmingBook;

let book3: Book = programmingBook;
// 우회해서 skill값 추가가능

const func = (book: Book) => {};
// func({ name: "리액트", price: 3000 });
func(programmingBook);

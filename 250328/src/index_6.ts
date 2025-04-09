type A = () => number;
type B = () => 10;

let a: A = () => 10;
let b: B = () => 10;
a = b;
// b = a; 오류-다운캐스팅
// 반환값 타입에 대한 호환
// 슈퍼타입-갈수있는곳이 많냐라는 개념으로 이해

type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {};
let d: D = (value) => {};
// c=d;오류

// 함수의 매개변수 개수가 동일하면서, 반환값이 없는 경우

type Animal = {
  name: string;
};
type Dog = {
  name: string;
  color: string;
};

let animalFunc = (animal: Animal) => {
  console.log(animal.name);
};
let dogFunc = (dog: Dog) => {
  console.log(dog.name);
  console.log(dog.color);
};

// 만들어낼수있는 경우의수가 dogFunc가 더 많음-슈퍼타입
// animalFunc = dogFunc;오류
dogFunc = animalFunc;

// 함수의 매개변수 개수가 다른경우
type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

// func1이 만들어낼수있는 경우의수가 더많음-슈퍼타입
let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2;
// func2 = func1;오류

//함수 오버로딩- 절대적인 1개의 조건값을 설정해놓고, 그외의 값을 처리하고자 하는경우, 특정 경우 외에는 작동하지 못하도록 할때
function func7(a: number): void;
function func7(a: number, b: number, c: number): void;

function func7(a: number, b?: number, c?: number) {
  if (typeof b === "number" && typeof c === "number") {
    console.log(a + b + c);
  } else {
    console.log(a * 20);
  }
}

func7(1);
// func7(1, 2);오류
func7(1, 2, 3);

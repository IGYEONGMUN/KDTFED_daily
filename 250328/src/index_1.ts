// 리터럴타입
// let a: 1 = 1;

// let a: number | string | boolean;
// a = 1;
// a = "hello";

// let arr: (number | string | boolean)[] = [1, "hello", true];

type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

type Union1 = Dog | Person;
type Intersection = Dog & Person;

let intersection: Intersection = {
  name: "",
  color: "",
  language: "",
};

let union1: Union1 = {
  name: "",
  color: "",
};

let union2: Union1 = {
  name: "",
  language: "",
};

let union3: Union1 = {
  name: "",
  color: "",
  language: "",
};
type Union2 = {
  name: string;
};
let union4: Union2 = {
  name: "",
};
union4 = union3;
// union3 = union4; 다운캐스팅-오류

// 가장아래의 서브타입 -never - 어떤값도 다운캐스팅 받을수없다
let variable: number & string;

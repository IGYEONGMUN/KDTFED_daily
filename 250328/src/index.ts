// 인터페이스는 객체전용타입
interface Person {
  readonly name: string;
  age?: number;
  // 메서드정의할수잇다는게 인터페이스 장점
  // sayHi?: (a:number,b:number) => void;
  // 호출시그니처형식으로 정의가능
  // 타입별칭과 동일하게 객체 타입을 정의할 수 있는데, 객체 내 속성값을 선택적 프로퍼티로 설정할 수 있고, 읽기전용 프로퍼티로 설정도 할 수 있음
  // 객체 내 메서드 함수에 대한 타입 정의도 가능함 그런데 만약 메서드 함수 내 인자값이 존재하는 경우, 호출시그니처 형식으로 타입을 정의해야함
  // 하이브리드 타입 지정이 가능
  sayHi?(a: number, b: number): void;
}

let person: Person = {
  name: "dddd",
  age: 20,
};
let person1: Person = {
  name: "dddd",
  // 펄슨에 선택적프로퍼티 주면 가능
  // age: 20,
  // sayHi: (1,2) => {},
};
let person2: Person = {
  name: "Romeo",
  age: 20,
};

// person2.name = "Jane"; 오류 -리드온리

interface Func2 {
  (a: number): string;
  b?: boolean;
}

let func2: Func2 = (a) => "Hello";
func2.b = true;

// 타입별칭과의 강력한 차이점
type Type1 = number | string;
type Type2 = number & string;

// interface Person3 {
//   name: string;
//   age: number;
// } | number |string 안됨

interface Person3 {
  name: string;
  age: number;
}

type Type3 = number | string | Person3;
type Type4 = number & string & Person3; //never타입

// 결론 인터페이스는 거의 타입별칭 안에서 쓰는일밖에 없을듯

// 인터페이스만의 고유기능
// 타입별칭에서는 존재할 수 없는 확장의 개념이 존재함

// interface Animal {
//   name: string;
//   age: number;
// }

// 인터페이스는 이것도가능
type Animal = {
  name: string;
  age: number;
};

interface Dog extends Animal {
  // name: string;
  isBark: boolean;
}
interface Cat extends Animal {
  isScratch: boolean;
}
interface DogCat extends Dog, Cat {}

// 다중확장
const dogCat: DogCat = {
  name: "",
  age: 1,
  isBark: true,
  isScratch: true,
};

interface Chicken extends Animal {
  isFly: boolean;
}

const dog: Dog = {
  name: "바둑이",
  age: 1,
  isBark: true,
};
// interface Dog {
//   name: string;
//   age: number;
//   isBark: boolean;
// }
// interface Cat {
//   name: string;
//   age: number;
//   isScratch: boolean;
// }
// interface Chicken {
//   name: string;
//   age: number;
//   isFly: boolean;
// }

// type Person7 = {
//   name: string;
// };
// // 타입별칭은 하나의 문서상에서 여러번 못씀
// type Person7 = {
//   name: string;
// };

// 인터페이스병합
interface Person10 {
  name: string;
}
interface Person10 {
  // 오버라이드는 불가능
  // name: number; 오류
  age: number;
}

const person10: Person10 = {
  name: "Ronaldo",
  age: 20,
};

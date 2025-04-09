type Person = {
  name: string;
  age: number;
};

// 타입단언 - 지금은 빈깡통이지만 나중에 펄슨타입하고 일치할거임 약속함
let person: Person = {} as Person;
person.name = "";
person.age = 20;

type Dog = {
  name: string;
  color: string;
};

type DogNew = {
  name: string;
  color: string;
  breed: string;
};

let dog: Dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
} as Dog;

let dogAI: DogNew = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
};

let dogNew: Dog = dogAI;

// 타입단언규칙 : 단언하고자 하는 자료의 타입과 단언받고자 하는 자료의 타입이 반드시 서로 슈퍼 및 서브타입이어야함

let num1 = 10 as never;
// num1 = 20;오류- 다운캐스팅
let num2 = 10 as unknown;
num2 = "hello";

// let num3 = 10 as string;오류 - 형제타입이니까

// 다중단언 - 비추
let num3 = 10 as unknown as string;
// const 단언
let num4 = 10 as const;

// Non Null단언
type Post = {
  title: string;
  // 선택적 프로퍼티
  author?: string;
};

let post: Post = {
  title: "게시글1",
};
// 언디파인인경우도 정의해줘라
const len: number = post.author!.length;

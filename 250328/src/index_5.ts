// const func = (a: number, b: number): number => {
//   return a + b;
// };

// 다중패러다임 선언실행같이가능 - 리턴생략가능 -중괄호제거
const func = (a: number, b: number) => a + b;

// 선택적 매개변수
// 선택적 매개변수는 반드시 뒤에와야함 tall?number,name:string 에러
const introduce = (name: string, tall?: number) => {
  // console.log(`tall: ${tall + 10}`);에러 - 있을수도있고 없을수도있어서- 타입가드줘야함
  if (typeof tall === "number") {
    console.log(`tall : ${tall + 10}`);
  }
};

introduce("ㅇㅇㅇ", 180);
introduce("ㅇㅇㅇ");

const getSum = (...rest: [number, number, number]) => {
  let sum = 0;
  rest.forEach((it) => (sum += it));
  console.log(sum);
  return sum;
};

getSum(1, 2, 3);

// TypeAlias타입별칭을 활용해서 함수의 타입을 지정하는경우 재활용이뛰어나다
type Add = (a: number, b: number) => number;
// type Call = (a:number,b:number):number;에러
// 타입별칭은 함수,객체 다 받을수잇음
type Call = { (a: number, b: number): number };

const add: Add = (a, b) => a + b;
const add1: Call = (a, b) => a + b;
const sub: Add = (a, b) => a - b;
const multiply: Add = (a, b) => a * b;
const divid: Add = (a, b) => a / b;
// 고차함수
const test: (a: number, b: number) => number = (a, b) => a + b;

// 타입별칭을 활용해서 호출 시그니처(객체타입으로 타입별칭 만들어놓고 함수의 타입으로 지정)라는 것을 생성가능

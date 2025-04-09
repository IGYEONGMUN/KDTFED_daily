// 타입변수가 2개 필요한경우
// 들어가는값은 원시타입
// const swap = <T, O>(a: T, b: O): (T | O)[] => {
//   // 반환값은 참조타입
//   return [b, a];
// };

// const [a, b] = swap("1", 2);
// console.log(a, b);

// const returnFirstValue = <T>(data: T[]) => {
//   return data[0];
// };

// let num = returnFirstValue([0, 1, 2]);
// // str은 넘버이거나 문자일수있다
// let str = returnFirstValue([1, "hello", "world"]);

// 뒤쪽에 어떤값이 들어오든간에 앞쪽엔 T타입 변수들어옴
// const returnFirstValue = <T>(data: [T, ...unknown[]]) => {
//   return data[0];
// };

// // 전개연산자구문으로 쪼개면 이렇게 str이 넘버만 리턴할수있게 가능
// let str = returnFirstValue([1, "Hello", "world"]);

// 이터러블한 객체의 length메소드를 상속받음

// const getLength = <T extends { length: number }>(data: T) => {
//   return data.length;
// };

// getLength("Hello");
// getLength([1, 2, 3]);
// getLength({ length: 1 });

// getLength(null);
// getLength(undefined);

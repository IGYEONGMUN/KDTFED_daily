// const arr = [1, 2, 3];
// const newArr = arr.map((it) => {
//   it * 2;
// });

// 선언형 프로그래밍방식임 - 커스터마이징가능, 디버깅용이
// const map = <T>(arr: T[], callback: (item: T) => T): T[] => {
//   let result = [];

//   for (let i = 0; i < arr.length; i++) {
//     result.push(callback(arr[i]));
//   }
//   return result;
// };

// const arr = [1, 2, 3];

// const arrN = map(arr, (it) => it * 2);
// console.log(arrN);

const arr2 = [1, 2, 3];
// 명령형방식
arr2.forEach((it) => console.log(it));

// 선언형방식
const forEach = <T>(arr: T[], callback: (item: T) => void) => {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
};

forEach(arr2, (item) => console.log(item));

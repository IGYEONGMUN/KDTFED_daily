// 필드값생략가능
// 넘버도 가능하고 문자도 가능하고 -> 제네릭
class List<T> {
  constructor(private list: T[]) {}
  push(data: T) {
    this.list.push(data);
  }
  pop() {
    return this.list.pop();
  }
  print() {
    console.log(this.list);
  }
}

// class NumberList {
//   constructor(private list: number[]) {}
//   push(data: number) {
//     this.list.push(data);
//   }
//   pop() {
//     return this.list.pop();
//   }
//   print() {
//     console.log(this.list);
//   }
// }

// class StringList {
//   constructor(private list: string[]) {}
//   push(data: string) {
//     this.list.push(data);
//   }
//   pop() {
//     return this.list.pop();
//   }
//   print() {
//     console.log(this.list);
//   }
// }

const numberList = new List([1, 2, 3]);
console.log(numberList);

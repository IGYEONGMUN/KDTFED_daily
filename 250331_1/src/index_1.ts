// let str = "Hello World!";

// console.log(str);

// 자바스크립트와 다르게 그냥 쓰면 타입오류- 타입정의 & 초기값까지줘야함
class Employee {
  //Field
  // name: string = "";
  // age: number = 0;
  // position: string = "";
  // private name: string;
  // protected name: string;
  // position: string;
  // age?: number;

  //constructor
  // 여기서 타입정의 해주면 초기 클래스에서 초기값 안써도됨
  // 접근제어자를 여기서 주면 필드값 따로 생성안해도됨
  constructor(
    protected name: string,
    public position: string,
    public age?: number
  ) {
    // 디스객체도 생략가능
    // name = name;
    // age = age;
    // position = position;
  }

  //Method
  work() {
    console.log(`Hello ${this.name}입니다`);
  }
}
// const employee1 = new Employee();
// console.log(employee1);
// employee1.work();

// const employee2 = new Employee("ddd", 21, "Striker");
// console.log(employee2);

// employee2.work();

// 옵셔널프로퍼티는 항상 맨 뒤에
const employee3 = new Employee("Rooney", "Striker");

// 프라이빗으로 정의하면 불가능
// 프로텍티드에서도 불가능
// employee3.name = "Son";

console.log(employee3);

// 클래스도 하나의 타입이 될 수 있음
// const employee4: Employee = {
//   name: "",
//   position: "",
//   age: 20,
//   work: () => {},
// };

class ExecutiveOfficer extends Employee {
  officeNumber: number;
  constructor(
    name: string,
    position: string,
    officeNumber: number,
    age: number
  ) {
    super(name, position, age);
    this.officeNumber = officeNumber;
  }
  work2() {
    // 프로텍티드에선 상속받은거까진 가능
    console.log(`ㅎㅇ${this.name}임`);
  }
}
// const employee5 = new ExecutiveOfficer("Messi", "FW", 1, 20);
// console.log(employee5);

// -----------------접근제어자:클래스를 통해서 생성된 인스턴스 객체 내 속성값을 제어할 수 있는 범위를 설정하고자 만들어진 기능

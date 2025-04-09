interface User {
  id: number;
  name: string;
  age: number;
}

const fetchUser = (): User => {
  return {
    id: 1,
    name: "ddd",
    age: 20,
  };
};

type PartialUser = {
  // id?: number;
  // name?: string;
  // age?: number;
  // Mapped타입
  // 값에따라 키가 변경 + 옵셔널프로퍼티형식으로
  // [key in "id" | "name" | "age"]?: User[key];
  // keyof로 키값만 뽑아옴
  readonly [key in keyof User]?: User[key];
};

const updateUser = (user: PartialUser) => {};
updateUser({ age: 25 });

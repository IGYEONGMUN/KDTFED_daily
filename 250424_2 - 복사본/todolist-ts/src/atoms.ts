import { atom, selector } from "recoil";

// 타입요소를 인덱스로 식별할 수 있음- TODO 0 DOING 1 DONE 2 이런식으로 가능
// 숫자로만 인식한거를 문자열로 인식하게끔 해준거임
export enum Categories {
  "TODO" = "TODO",
  "DOING" = "DOING",
  "DONE" = "DONE",
}

// type categories = "TODO" | "DOING" | "DONE";

export interface ITodo {
  id: number;
  text: string;
  category: Categories;
}

// 객체형태 인자값
// 전달해줄때 3개 값중 하나를 유니온타입으로 전달해야하기 때문에 타입 정의 이렇게 해줌
export const categoryState = atom<Categories>({
  key: "category",
  default: Categories.TODO,
});

export const toDoState = atom<ITodo[]>({
  key: "toDo",
  default: [],
});

// 셀렉터 - 스테이트값을 변경시키는 역할
export const todoSelector = selector({
  key: "todoSelector",
  // 문법임
  // { get }이건 함수임 구조분해할당으로 들어온거/ selector에서 나온거임
  get: ({ get }) => {
    const todos = get(toDoState);
    const category = get(categoryState);
    // 이프문으로 여기서 나눈이유 - 코드간소화를 위해서
    // if (category === "TODO") {
    //   return todos.filter((todo) => todo.category === "TODO");
    // }
    // if (category === "DOING") {
    //   return todos.filter((todo) => todo.category === "DOING");
    // }
    // if (category === "DONE") {
    //   return todos.filter((todo) => todo.category === "DONE");
    // }
    // 투두,두잉,던들만의 새로운 배열로 만들겟음
    // return [
    //   todos.filter((todo) => todo.category === "TODO"),
    //   todos.filter((todo) => todo.category === "DOING"),
    //   todos.filter((todo) => todo.category === "DONE"),
    // ];
    //  더 간소화
    return todos.filter((todo) => todo.category === category);
  },
});

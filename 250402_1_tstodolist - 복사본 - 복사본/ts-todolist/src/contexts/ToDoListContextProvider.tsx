// 결국 타입스크립트도 JSX언어의 슈퍼셋언어 -  JSX에 타입지정한 언어
// 값을 데이타뷰쪽에도 보내고, 인풋컨테이너쪽에도 보내고 앱.jsx에도 보낼수있는 방법
import { JSX, useState, createContext } from "react";

interface Context {
  readonly toDoList: string[];
  readonly onAdd: (toDo: string) => void;
  readonly onDelete: (toDo: string) => void;
}

//createcontext이용해서 어떤값을 받아서 전달할역할할거임

// 초기값으로 생각해도됨 위쪽에서 타입지정
const ToDoListContext = createContext<Context>({
  toDoList: [],
  onAdd: (): void => {},
  onDelete: (): void => {},
});

interface Props {
  children: JSX.Element | JSX.Element[];
}

const mockData = ["리액트공부", "운동", "책"];
// 제이엑스jsx 문법상에서 칠드런이란걸 받아왔ㅇ므 자식요소 타입정의 필요
const ToDoListContextProvider = ({ children }: Props) => {
  const [toDoList, setToDoList] = useState(mockData);

  const onDelete = (todo: string) => {
    setToDoList(toDoList.filter((item) => item !== todo));
  };

  const onAdd = (toDo: string) => {
    setToDoList([...toDoList, toDo]);
  };

  return (
    // 초기값으로 생각했던 세개의 값을 전달
    <ToDoListContext.Provider
      value={{
        toDoList,
        onAdd,
        onDelete,
      }}
    >
      {children}
    </ToDoListContext.Provider>
  );
};

export { ToDoListContext, ToDoListContextProvider };

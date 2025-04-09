import { useContext } from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";
import { ToDoListContext } from "../contexts/ToDoListContextProvider";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

// interface Props {
//   readonly toDoList: Array<string>;
//   readonly onDelete?: (todo: string) => void;
// }

// 값 대체가 됏음 컨텍스트로
const TodoList = () => {
  const { toDoList, onDelete } = useContext(ToDoListContext);
  return (
    <Container>
      {/* 클릭했을 때 함수도 같이 전달해야함 */}
      {/* <TodoItem label="React공부하기" />
      <TodoItem label="운" />
      <TodoItem label="책" /> */}
      {/* 키값을 항상 줘라 */}
      {toDoList.map((todo) => (
        <TodoItem
          key={todo}
          label={todo}
          onDelete={() => {
            // 타입가드-유니온타입은 고려해야함 여기선 언디파인드일수도있으니까
            if (typeof onDelete === "function") onDelete(todo);
          }}
        />
      ))}
    </Container>
  );
};

export default TodoList;

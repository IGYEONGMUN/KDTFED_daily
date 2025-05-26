import { useForm } from "react-hook-form";
import { Droppable } from "@hello-pangea/dnd";
import styled from "styled-components";
import { useSetRecoilState } from "recoil";
import DragableCard from "./DragableCard";
import { ITodo, todoState } from "../atoms";

const Container = styled.div`
  background: ${({ theme }) => theme.boardColor};
  width: 100%;
  height: 100%;
  min-height: 400px;
  padding: 20px;
  padding-top: 40px;
  border-radius: 10px;
`;

interface IBoardProps {
  // 이 객체형태로 타입바꿔줌
  toDos: ITodo[];
  boardId: string;
}

const Title = styled.h2`
  text-align: center;
  text-transform: uppercase;
  font-size: 1.8rem;
  margin-bottom: 10px;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  margin-bottom: 10px;
  gap: 10px;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  border: none;
  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  padding: 10px;
  border: none;
  border-bottom: 1px solid var(--border-color);
  background: transparent;
  cursor: pointer;
`;

const Area = styled.div<IAreaProps>`
  width: 100%;
  border-radius: 8px;
  padding: 6px;
  background: ${(props) =>
    props.isDraggingOver
      ? "pink"
      : props.isDraggingFromThis
      ? "crimson"
      : "dodgerblue"};
  transition: background 0.3s;
`;

interface IAreaProps {
  isDraggingOver: boolean;
  isDraggingFromThis: boolean;
}

interface IForm {
  toDo: string;
}

const Board = ({ toDos, boardId }: IBoardProps) => {
  const setTodos = useSetRecoilState(todoState);
  const { register, setValue, handleSubmit } = useForm<IForm>();

  // 가상돔이라 원래는 커렌트.value값을 찾아서 돔요소를 제어해야하는데 리액트훅폼 이용하면 이렇게 함수 이용해서 돔요소 제어가능
  const onValid = ({ toDo }: IForm) => {
    const newTodo = {
      id: Date.now(),
      text: toDo,
    };
    setTodos((allBoards) => {
      return {
        // 객체끼리 합쳐서 보드아이디에 넣고 변한것만 넣은거임 변하지 않은것은 그대로
        ...allBoards,
        [boardId]: [...allBoards[boardId], newTodo],
      };
    });
    setValue("toDo", "");
  };

  return (
    <Container>
      <Title>{boardId}</Title>
      <Form onSubmit={handleSubmit(onValid)}>
        <Input
          {...register("toDo", { required: true })}
          type="text"
          placeholder="Write Here"
        />
        <Button>Click</Button>
      </Form>
      <Droppable droppableId={boardId}>
        {
          // 문법임 /  자식요소에 반드시 함수 형태가 있어야함 dropable,draggable 둘다 이 함수로 움직이는 요소 감지함
          (magic, snapshot) => (
            <Area
              isDraggingOver={snapshot.isDraggingOver}
              isDraggingFromThis={Boolean(snapshot.draggingFromThisWith)}
              ref={magic.innerRef}
              {...magic.droppableProps}
            >
              {toDos.map((todo, index) => (
                // 리팩토링 한거임
                // 투두안의 값이 객체니까 각각 아이디 값과 텍스트를 줌
                <DragableCard
                  key={todo.id}
                  index={index}
                  todo={todo.text}
                  todoId={todo.id}
                />
                // <Draggable key={todo} draggableId={todo} index={index}>
                //   {(magic) => (
                //     <Card
                //       ref={magic.innerRef}
                //       {...magic.draggableProps}
                //       {...magic.dragHandleProps}
                //     >
                //       {/* 핸들프랍스 - 실제 이동할 요소의 대상으로 선택하고자 할때 사용가능 */}
                //       {todo}
                //     </Card>
                //   )}
                // </Draggable>
              ))}
              {/* 요소가 움직이는동안 비어있는공간 채워주기 위해서 플레이스홀더 넣어놓는거임 */}
              {magic.placeholder}
            </Area>
          )
        }
      </Droppable>
    </Container>
  );
};

export default Board;

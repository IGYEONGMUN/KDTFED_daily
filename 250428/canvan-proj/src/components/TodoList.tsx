import {
  DragDropContext,
  // Droppable,
  // Draggable,
  DropResult,
} from "@hello-pangea/dnd";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { todoState } from "../atoms";
// import DragableCard from "./DragableCard";
import Board from "./Board";

const Container = styled.div`
  width: 1200px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Boards = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;

const TodoList = () => {
  const [toDos, setTodos] = useRecoilState(todoState);
  // 온드래그앤드 안의 숨겨진 매개변수 - args가 있는데 그건 객체임 이벤트객체같이 뭐가 따라붙는게 있음
  // 구조분해할당으로 값 가져옴 - 데스티네이션 도착지점, 소스 - 출발지점
  // draggableId이동하려는대상
  const onDragEnd = ({ destination, source, draggableId }: DropResult) => {
    // 데스티네이션이 null일수도 있으니까 이 예외조항처리도 줘야함
    if (!destination) return;
    // 예외조항처리
    if (destination?.droppableId === source.droppableId) {
      // 객체안에있는 각각 배열요소들을 카피한거임
      setTodos((oldTodos) => {
        const boardCopy = [...oldTodos[source.droppableId]];
        // 이제 객체로 바뀌었으니까 객체데이터 다루는거로 바꿔줘야됨
        const taskObj = boardCopy[source.index];
        boardCopy.splice(source.index, 1);
        boardCopy.splice(destination.index, 0, taskObj);
        return {
          // 변함없으면 그냥 그대로, 변함있으면 보드카피값으로 변경 즉 내부안에서 변경하는 부분
          ...oldTodos,
          [source.droppableId]: boardCopy,
        };
      });
    }

    if (destination?.droppableId !== source.droppableId) {
      setTodos((oldTodos) => {
        // 출발할때의 배열
        const sourceBoard = [...oldTodos[source.droppableId]];
        // 도착할때의 배열
        const destinationBoard = [...oldTodos[destination?.droppableId]];
        const taskObj = sourceBoard[source.index];

        sourceBoard.splice(source.index, 1);
        destinationBoard.splice(destination?.index, 0, taskObj);

        return {
          ...oldTodos,
          [source.droppableId]: sourceBoard,
          [destination?.droppableId]: destinationBoard,
        };
      });
    }
    // 도착지점이 없다면 그냥 리턴
    // if (!destination) return;
    // 리턴줘야됨
    // setTodos((oldTodos) => {
    //   const copyTodos = [...oldTodos];
    //   copyTodos.splice(source.index, 1);
    //   copyTodos.splice(destination.index, 0, draggableId);
    //   return copyTodos;
    // });
  };

  return (
    //  드래그 끝난 시점에서 연산처리 드래그엔드 함수가 할거임
    <DragDropContext onDragEnd={onDragEnd}>
      <Container>
        <Boards>
          {Object.keys(toDos).map((boardId) => (
            <Board key={boardId} boardId={boardId} toDos={toDos[boardId]} />
          ))}
          {/* <Droppable droppableId="one">
            {
              // 문법임 /  자식요소에 반드시 함수 형태가 있어야함 dropable,draggable 둘다
              (magic) => (
                <Board ref={magic.innerRef} {...magic.droppableProps}>
                  {toDos.map((todo, index) => (
                    // 리팩토링 한거임
                    <DragableCard key={todo} index={index} todo={todo} />
                    // <Draggable key={todo} draggableId={todo} index={index}>
                    //   {(magic) => (
                    //     <Card
                    //       ref={magic.innerRef}
                    //       {...magic.draggableProps}
                    //       {...magic.dragHandleProps}
                    //     >
                    //       {/* 핸들프랍스 - 실제 이동할 요소의 대상으로 선택하고자 할때 사용가능 */}
          {/* //       {todo} */}
          {/* //     </Card> */}
          {/* //   )} */}
          {/* // </Draggable> */}
          {/* ))} */}
          {/* 요소가 움직이는동안 비어있는공간 채워주기 위해서 플레이스홀더 넣어놓는거임 */}
          {/* {magic.placeholder} */}
          {/* </Board> */}
          {/* ) */}
          {/* } */}
          {/* </Droppable> */} */
        </Boards>
      </Container>
    </DragDropContext>
  );
};

export default TodoList;

import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { todoState } from "../atoms";

const Board = styled.div`
  background: ${({ theme }) => theme.boardColor};
  width: 100%;
  height: 100%;
  min-height: 400px;
  padding: 20px;
  padding-top: 40px;
  border-radius: 10px;
`;

const Card = styled.div`
  margin-bottom: 10px;
  padding: 10px;
  background: ${({ theme }) => theme.cardColor};
  border-radius: 10px;
`;

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
    // 도착지점이 없다면 그냥 리턴
    if (!destination) return;
    // 리턴줘야됨
    setTodos((oldTodos) => {
      const copyTodos = [...oldTodos];
      copyTodos.splice(source.index, 1);
      copyTodos.splice(destination.index, 0, draggableId);
      return copyTodos;
    });
  };

  return (
    //  드래그 끝난 시점에서 연산처리 드래그엔드 함수가 할거임
    <DragDropContext onDragEnd={onDragEnd}>
      <Container>
        <Boards>
          <Droppable droppableId="one">
            {
              // 문법임 /  자식요소에 반드시 함수 형태가 있어야함 dropable,draggable 둘다
              (magic) => (
                <Board ref={magic.innerRef} {...magic.droppableProps}>
                  {toDos.map((todo, index) => (
                    <Draggable key={todo} draggableId={todo} index={index}>
                      {(magic) => (
                        <Card
                          ref={magic.innerRef}
                          {...magic.draggableProps}
                          {...magic.dragHandleProps}
                        >
                          {/* 핸들프랍스 - 실제 이동할 요소의 대상으로 선택하고자 할때 사용가능 */}
                          {todo}
                        </Card>
                      )}
                    </Draggable>
                  ))}
                </Board>
              )
            }
          </Droppable>
        </Boards>
      </Container>
    </DragDropContext>
  );
};

export default TodoList;

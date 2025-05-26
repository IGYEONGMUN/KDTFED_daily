import { Draggable } from "@hello-pangea/dnd";
import styled from "styled-components";
import React from "react";

interface DraggingProps {
  isDragging: boolean;
}

const Card = styled.div<DraggingProps>`
  margin-bottom: 10px;
  padding: 10px;
  background: ${({ theme, isDragging }) =>
    isDragging ? "tomato" : theme.cardColor};
  border-radius: 10px;
  box-shadow: ${({ isDragging }) =>
    isDragging ? "0 2px 5px rgba(0,0,0,0.5)" : "none"};
`;

interface IDragableCardProps {
  todo: string;
  index: number;
  todoId: number;
}

// 요소 하나가 변경될때 마다 전체 요소들이 리렌더링됨 문제해결해야함- memoization필요
const DragableCard = ({ todo, index, todoId }: IDragableCardProps) => {
  return (
    <Draggable key={todoId} draggableId={todoId + ""} index={index}>
      {(magic, snapshot) => (
        <Card
          isDragging={snapshot.isDragging}
          ref={magic.innerRef}
          {...magic.draggableProps}
          {...magic.dragHandleProps}
        >
          {/* 핸들프랍스 - 실제 이동할 요소의 대상으로 선택하고자 할때 사용가능 */}
          {todo}
        </Card>
      )}
    </Draggable>
  );
};

// 컴포넌트강화 즉 형제요소끼리의 렌더링에 전체 요소가 영향을 받지 않겠음
export default React.memo(DragableCard);

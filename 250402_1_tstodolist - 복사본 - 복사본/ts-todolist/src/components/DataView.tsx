import styled from "styled-components";
import Title from "./Title";
import TodoList from "./TodoList";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--light-color);
  padding: 32px 48px;
  border-radius: 8px;
`;

const DataView = () => {
  return (
    <Container>
      <Title label="할 일 목록" />
      <TodoList />
    </Container>
  );
};

export default DataView;

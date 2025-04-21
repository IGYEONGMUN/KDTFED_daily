import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 10px;
`;

const Input = styled.input`
  /* 함수의 반환값은 변수 */
  background: ${({ required }) => (required ? "tomato" : "#fff")};
`;

function App() {
  return (
    <Container>
      <Input required="true" />
      <Input />
      <Input />
      <Input />
    </Container>
  );
}

export default App;

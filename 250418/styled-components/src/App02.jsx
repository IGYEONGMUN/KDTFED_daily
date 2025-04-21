import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  background: tomato;
  color: #fff;
  border: none;
  border-radius: 14px;
`;

function App() {
  return (
    <Container>
      <Button>로그인</Button>
      <Button as="a" href="/">
        로그아웃
      </Button>
    </Container>
  );
}

export default App;

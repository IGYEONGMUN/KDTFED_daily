import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 10px;
`;

const Box = styled.div`
  /* 구조분해 할당으로 비지컬러 키값을 받음 - 프랍스는 객체니까 */
  background: ${({ bgColor }) => bgColor};
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Circle = styled(Box)`
  border-radius: 50%;
`;

const Text = styled.span`
  color: #fff;
`;

function App() {
  return (
    <Container>
      <Box bgColor="teal">
        <Text>hello</Text>
      </Box>
      <Circle bgColor="tomato" />
    </Container>
  );
}

export default App;

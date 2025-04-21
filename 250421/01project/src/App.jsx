import styled, { keyframes } from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.background};
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.textColor};
  background: ${({ theme }) => theme.background};
`;

const rotationAnimation = keyframes`
from{
  transform:rotate(0deg);
  border-radius: 0%;
}
50%{
  transform:rotate(360deg);
}
100%{
 transform:rotate(360deg);
 border-radius:50%;
}
`;
const Emoji = styled.span``;

const Box = styled.div`
  width: 200px;
  height: 200px;
  background: tomato;
  animation: ${rotationAnimation} 1s linear infinite;
  display: flex;
  justify-content: center;
  align-items: center;

  ${Emoji} {
    font-size: 40px;
    &:hover {
      font-size: 80px;
    }
    &:active {
      opacity: 0;
    }
  }
`;

function App() {
  return (
    <Container>
      <Title>hello</Title>
      <Box>
        <Emoji>🚕</Emoji>
      </Box>
    </Container>
  );
}

export default App;

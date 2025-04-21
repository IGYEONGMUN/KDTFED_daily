import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 10px;
`;

const Box = styled.div`
  width: 100px;
  height: 100px;
  /* 변수취급 달러중괄호 */
  /* background: ${(props) => props.bgColor}; */
  background: ${({ bgColor }) => bgColor};
`;

const BoxTwo = styled.div`
  width: 100px;
  height: 100px;
  /* background: ${(props) => props.bgColor}; */
  background: ${({ bgColor }) => bgColor};
`;

// const Text = styled.span`
//   color: #fff;
//   height: 100%;
//   width: 100%;
//   display: inline-block;
//   text-align: center;
//   line-height: 100px;
// `;

// 박스투 속성값 상속받음
const Circle = styled(BoxTwo)`
  border-radius: 50%;
`;

function App() {
  return (
    <Container>
      <Box bgColor="teal" />
      {/* <BoxTwo bgColor="tomato" /> */}
      <Circle bgColor="tomato" />
    </Container>
  );
}

export default App;

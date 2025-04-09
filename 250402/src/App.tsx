import GlobalStyles from "./styles/GlobalStyles.styles";
import styled from "styled-components";
import { useState } from "react";
import Button from "./components/Button";
import Label from "./components/Label";

const Title = styled.h1`
  font-size: 3.2rem;
  font-weight: bold;
  margin-bottom: 32px;
`;

const Contents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  const [counter, setCounter] = useState(0);

  const add = () => {
    setCounter(counter + 1);
  };

  const sub = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <GlobalStyles />
      <Title>Conuter App</Title>
      <Contents>
        {/* <Button onClick={sub}>-</Button> */}
        {/* <Button onClick={add}>+</Button> */}
        {/* 플마 설정을 위해 라벨이라는 키값으로 프롭스로 전달 */}
        <Button label="-" onClick={sub} />
        {/* 데이터라는 키안에 카운터 객체전달 */}
        <Label data={counter} />
        <Button label="+" onClick={add} />
      </Contents>
    </>
  );
}

export default App;

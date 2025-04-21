import React, { useState } from "react";
import { createGlobalStyle, styled } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }

  body{
    background: ${({ theme }) => theme.bgColor};
  }
`;

const Container = styled.div``;

function App() {
  const [value, setValue] = useState("");
  // 함수의 인자값 타입정의 필요 - React안에 있음FormEvent
  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  // 인풋 타입정의, 폼태그 타입정의가 다름HTMLFormElement
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <form onSubmit={onSubmit}>
          <input
            value={value}
            onChange={onChange}
            type="text"
            placeholder="username"
          />
          <input type="submit" value="Login" />
        </form>
      </Container>
    </>
  );
}

export default App;

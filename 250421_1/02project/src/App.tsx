import React from "react";
import styled from "styled-components";

const Container = styled.div``;

const Title = styled.h1``;

interface DummyProps {
  text: string;
  active?: boolean;
}

const Dummy = ({ text, active = false }: DummyProps) => {
  return <Title>{text}</Title>;
};

const App = () => {
  const onclick = (e: React.FormEvent<HTMLButtonElement>) => {
    alert("hello");
  };

  return (
    <Container>
      <Dummy text="Hello" />
      <Dummy text="World" active={true} />
      <button onClick={onclick}>Click</button>
    </Container>
  );
};

export default App;

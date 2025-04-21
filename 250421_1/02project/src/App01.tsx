import Circle from "./Circle";

// const Title = styled.h1`
//   color: ${({ theme }) => theme.accentColor};
// `;

function App() {
  return (
    <>
      <Circle borderColor="yellow" bgColor="teal" />
      <Circle text="Hello" bgColor="tomato" />
    </>
  );
}

export default App;

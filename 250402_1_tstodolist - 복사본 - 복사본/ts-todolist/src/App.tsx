import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles.styles";
import DataView from "./components/DataView";
import InputContainer from "./components/InputContainer";
import { ToDoListContextProvider } from "./contexts/ToDoListContextProvider";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// const mockData = ["리액트공부", "운동", "책"];

function App() {
  // 투두리스트컨텍스트프로바이더로 이동
  // const [toDoList, setToDoList] = useState(mockData);
  // const onDelete = (todo: string) => {
  //   setToDoList(toDoList.filter((item) => item !== todo));
  // };

  // //최종적인 투두리스트트는 여기서 관리하기때문에 리팩토링하면안됨
  // const onAdd = (toDo: string) => {
  //   setToDoList([...toDoList, toDo]);
  // };

  return (
    <>
      <GlobalStyles />
      <Container>
        <ToDoListContextProvider>
          {/* <DataView toDoList={toDoList} onDelete={onDelete} /> */}
          <DataView />
          {/* onAdd라는 키값안에 프랍스전달 */}
          {/* <InputContainer onAdd={onAdd} /> */}
          <InputContainer />
        </ToDoListContextProvider>
      </Container>
    </>
  );
}

export default App;

import Button from "./components/UI/Button";
import GlobalStyles from "./styles/GlobalStyles.styles";
import CommentList from "./components/UI/LIST/CommentList";
import TextInput from "./components/UI/TextInput";
import PostList from "./components/UI/LIST/PostList";
import CommentListitem from "./components/UI/LIST/CommentListitem";
// npm i styled-components
// npm i react-router-dom
// npm run dev

function App() {
  return (
    <>
      {/* 형제요소로 들어가있으면 적용 */}
      <GlobalStyles />
      <CommentList />
    </>
  );
}

export default App;

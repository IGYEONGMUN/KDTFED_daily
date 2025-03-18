import GlobalStyles from "./styles/GlobalStyles.styles";
import CommentList from "./components/LIST/CommentList";
import MainPage from "./components/PAGES/MainPage";
import styled from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// Routes- 경로설정
import PostWritePage from "./components/PAGES/PostWritePage";
import PostViewPage from "./components/PAGES/PostViewPage";

const MainTitleText = styled.h2`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-top: 40px;
`;

function App() {
  return (
    <BrowserRouter>
      {/* 페이지분기대상 */}
      <MainTitleText>미니블로그</MainTitleText>
      <Routes>
        /* 어디경로로갈거냐 */
        <Route path="/" element={<MainPage />} />
        <Route path="/post-write" element={<PostWritePage />} />
        <Route path="/post/:postId" element={<PostViewPage />} />
        {/* 가변적으로 바뀔수있음 -> : */}
      </Routes>
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;

import GlobalStyles from "./styles/Globalstyles.styles";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import MovieDetail from "./pages/MovieDetail";

const router = createBrowserRouter([
  // 라우팅 요소들은 객체로 시작
  {
    // 동적 파라미터값이 없는 상태에서는 홈 컴포넌트로 해주겠다->  index:true
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      // 무비라는 경로가 되면 무비스 컴포넌트
      { path: "movies", element: <Movies /> },
      { path: "movie/:id", element: <MovieDetail /> },
    ],
  },
]);

function App() {
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  );
}

export default App;

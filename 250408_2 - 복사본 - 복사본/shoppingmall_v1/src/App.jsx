// 안쓰는 임포트 정리해야함
import { useState } from "react";
import GlobalStyles from "./styles/Globalstyles.styles";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout";
import ProductAll from "./pages/ProductAll";
import Login from "./pages/Login";
import PrivateRoute from "./pages/PrivateRoute";
import { AuthProvider } from "./AuthContext";
function App() {
  // const [authenticate, setAuthenticate] = useState(false);
  // 의존성배열안에 값이 있을대는 마운트, 업데이트 시점 둘다

  const router = createBrowserRouter([
    {
      // path최상위로 선언했으니까 이게 최상위컴포넌트가 되어버림
      path: "/",
      element: <Layout />,
      children: [
        {
          // 이렇게 하면  indextrue인 엘리먼트가 상속받아서 나옴
          index: true,
          element: <ProductAll />,
        },
        {
          path: "login",
          element: <Login />,
        },
        // PrivateRoute를 한번 거치게 함
        {
          path: "products/:id",
          element: <PrivateRoute />,
        },
      ],
    },
  ]);
  return (
    <AuthProvider>
      <GlobalStyles />
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;

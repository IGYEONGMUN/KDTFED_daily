import { useState, useEffect } from "react";
import GlobalStyles from "./styles/Globalstyles.styles";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout";
import ProductAll from "./pages/ProductAll";
import Login from "./pages/Login";
import ProductDetail from "./pages/ProductDetail";
import PrivateRoute from "./pages/PrivateRoute";

function App() {
  const [authenticate, setAuthenticate] = useState(false);
  // 의존성배열안에 값이 있을대는 마운트, 업데이트 시점 둘다
  useEffect(() => {}, [authenticate]);

  const router = createBrowserRouter([
    {
      // path최상위로 선언했으니까 이게 최상위컴포넌트가 되어버림
      path: "/",
      element: (
        <Layout authenticate={authenticate} setAuthenticate={setAuthenticate} />
      ),
      children: [
        {
          // 이렇게 하면  indextrue인 엘리먼트가 상속받아서 나옴
          index: true,
          element: <ProductAll />,
        },
        {
          path: "login",
          element: <Login setAuthenticate={setAuthenticate} />,
        },
        // PrivateRoute를 한번 거치게 함
        {
          path: "products/:id",
          element: <PrivateRoute authenticate={authenticate} />,
        },
      ],
    },
  ]);
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  );
}

export default App;

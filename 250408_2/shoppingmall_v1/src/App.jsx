import { useState } from "react";
import GlobalStyles from "./styles/Globalstyles.styles";
import styled from "styled-components";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout";
import ProductAll from "./pages/ProductAll";
import Login from "./pages/Login";
import ProductDetail from "./pages/ProductDetail";
import PrivateRoute from "./pages/PrivateRoute";

function App() {
  const [authenticate, setAuthenticate] = useState(false);
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

import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home.jsx";
import Root from "./components/Root.jsx";
import About from "./components/About.jsx";

const router = createBrowserRouter([
  {
    // 최초페이지정의
    path: "/",
    element: <Root />,
    children: [
      {
        path: "home",
        // 별도의 outlet컴포넌트를 사용해야한다 그냥 하면안된다
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

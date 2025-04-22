import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
// 공식문서 보니까 이거 찾아오라고 하더라
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import router from "./Router.tsx";

const queryClient = new QueryClient();

// 여기선 리액트 훅을 쓸수없음(상태관리를하는) -  프로바이더를 루트로 이사시켜줌
createRoot(document.getElementById("root")!).render(
  // 이렇게 정의 해주면 된다고 공식문서에 나와있음
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
);

import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
// 라우터 프로바이더의 속성값으로 라우터 전달할거임
import router from "./Router";

const queryClient = new QueryClient();

// 공식문서 보고 문법대로 쓴거임
createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    {/* 라우터 프로바이더 이용함 */}
    <RouterProvider router={router} />
    <ReactQueryDevtools initialIsOpen={true} buttonPosition="bottom-right" />
  </QueryClientProvider>
);

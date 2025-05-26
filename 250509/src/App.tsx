import GlobalStyles from "./styles/GlobalStyles.styles";
import { RouterProvider } from "react-router-dom";
import router from "./Router";
import { useState, useEffect } from "react";
import { auth } from "./Firebase";

// 로딩 상태관리해야하는데 메인한테 컴포넌트가 따로 필요하기 때문에(유즈스테이트는 컴포넌트 안에서만 사용가능하니까) 이 앱 컴포넌트를 따로 만들어서 관리
const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  // 개발자가 누구냐 초기화
  // 파이어베이스 초기화 단계 및 과정
  const init = async () => {
    // 인증상태 완료여부 반환
    await auth.authStateReady();
    setIsLoading(false);
  };

  useEffect(() => {
    init();
  }, []);

  // 초기화 되기 전까지 페이지라우팅 안할거임 완료된 후에 페이지 라우팅할거임
  return (
    <>
      <GlobalStyles />
      {isLoading ? <div>Loading...</div> : <RouterProvider router={router} />}
    </>
  );
};

export default App;

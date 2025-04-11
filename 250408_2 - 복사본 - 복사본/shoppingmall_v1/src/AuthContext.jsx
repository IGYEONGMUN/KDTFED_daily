import { useState, useContext, createContext } from "react";

const AuthContext = createContext();

// 칠드런 - 어스프로바이더 상위에서 무엇을 받는다+자식을 품기 위한 프롭스 - 이벤트 객체처럼 꼭 누군가로부터 받는게 아니라
export const AuthProvider = ({ children }) => {
  const [authenticate, setAuthenticate] = useState(false);
  return (
    <AuthContext.Provider value={(authenticate, setAuthenticate)}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

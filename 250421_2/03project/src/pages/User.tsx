// useOutletContext - 아웃렛으로 전달받은 프롭스값 받아오기 위한 훅함수
import { useParams, Outlet, Link, useOutletContext } from "react-router-dom";
import { users } from "../db";

interface IdarkMode {
  darkMode: boolean;
}

const User = () => {
  const { userId } = useParams();
  const { darkMode } = useOutletContext<IdarkMode>();
  return (
    <>
      <h1>
        {/* 유즈파람스로 가져온값-> string임-  -1하려고 하면 오류남- 숫자로 형변환 */}
        User with {userId} {users[Number(userId) - 1].name}
      </h1>
      <hr />
      <Link to={"followers"}>See Followers</Link>
      {/* 아웃렛 통해서 연결되어진 페이지간에 프롭스 전달가능 */}
      <Outlet
        context={{
          nameOfMyUsers: users[Number(userId) - 1].name,
        }}
      />
    </>
  );
};

export default User;

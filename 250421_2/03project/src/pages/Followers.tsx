// 아웃렛으로 전달받은 프롭스를 받기위한 훅함수
import { useOutletContext } from "react-router-dom";

interface IFollowersContext {
  nameOfMyUsers: string;
}

const Followers = () => {
  // 처음에는 언노운이었지만 버튼 눌럿을때 스트링 타입으로 변환해서 받을 수 있게 제네릭 타입 지정
  const { nameOfMyUsers } = useOutletContext<IFollowersContext>();
  return <h1>{nameOfMyUsers}</h1>;
};

export default Followers;

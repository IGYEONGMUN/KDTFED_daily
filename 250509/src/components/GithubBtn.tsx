// 안에 살펴보면 signwith 팝업,.. 등등 여러가지 방법이 있는데 비동기로 작동하나봄
import { GithubAuthProvider, signInWithPopup } from "firebase/auth";
import styled from "styled-components";
// 사인인팝업 살펴보면 어스 필요한가봄
import { auth } from "../Firebase";
import { useNavigate } from "react-router-dom";

const Button = styled.button`
  width: 300px;
  background: var(--light-color);
  padding: 10px 20px;
  border-radius: 10px;
  cursor: pointer;
`;

const Logo = styled.img`
  height: 25px;
`;

const GithubBtn = () => {
  const navigate = useNavigate();
  const onClick = async () => {
    try {
      const provider = new GithubAuthProvider();
      await signInWithPopup(auth, provider);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Button onClick={onClick}>
      <Logo src="/github-mark.svg" />
      Continue with Github
    </Button>
  );
};

export default GithubBtn;

import { useState } from "react";
import styled from "styled-components";
// 링크는  단순 앵커태그처럼 쓰임 유즈네비게이트는 함수, 즉 기능을 구현하기위한 - 어떤 조건값에 따라서 유저를 보내기위한 목적
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faUser,
  faBars,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../AuthContext";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.div`
  width: 200px;
  margin-bottom: 20px;
  & img {
    width: 100%;
  }
`;

const MenuArea = styled.ul`
  display: flex;
  gap: 30px;
`;

const HeaderTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  position: absolute;
  top: 60px;
  right: 20px;
`;

const SearchBox = styled.div`
  & > input {
    width: 140px;
    border: none;
    border-bottom: 1px solid var(--dark-color);
    padding: 4px 10px;
    &::placeholder {
      opacity: 1;
      transition: opacity 0.3s;
    }
    &:focus {
      outline: none;
      &::placeholder {
        opacity: 0;
      }
    }
  }
`;

const LoginAuth = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
`;

const ToggleButton = styled.div`
  position: absolute;
  top: 50px;
  left: 40px;
  cursor: pointer;
`;

const SideMenu = styled.div`
  width: ${({ width }) => `${width}px`};
  /* width: 250px; */
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: var(--dark-color);
  color: var(--light-color);
  z-index: 1;
  overflow: hidden;
  transition: all 0.3s;
  & > svg {
    position: absolute;
    top: 30px;
    right: 30px;
    font-size: 19px;
    cursor: pointer;
  }
  & > ul {
    display: flex;
    flex-direction: column;
    gap: 40px;
    font-size: 1.6rem;
    padding: 70px 40px;
    & > li {
      cursor: pointer;
    }
  }
`;

const menuList = [
  "여성",
  "남성",
  "추천",
  "브랜드",
  "베스트",
  "신제품",
  "이벤트",
  "슈퍼세일",
];

const Navbar = () => {
  const { authenticate, setAuthenticate } = useAuth();
  console.log(authenticate);
  const [width, setWidth] = useState(0);
  const navigate = useNavigate();

  const onCheckEnter = (e) => {
    console.log(e);
    if (e.key === "Enter") navigate(`?q=${e.target.value}`);
  };

  const goToLogin = () => {
    navigate("/login");
  };

  return (
    <Container>
      <Logo>
        <Link to={"/"}>
          <img
            src="https://cdn.newsworker.co.kr/news/photo/202407/338393_345577_181.jpg"
            alt="musinsa"
          />
        </Link>
      </Logo>
      <MenuArea className="menu">
        {/* 맵함수쓰면 키값줘라 */}
        {menuList.map((menu, index) => (
          <li key={index}>
            <a href="#">{menu}</a>
          </li>
        ))}
      </MenuArea>
      <HeaderTop>
        {authenticate ? (
          <LoginAuth
            onClick={() => {
              setAuthenticate(false);
              navigate("/");
            }}
          >
            <FontAwesomeIcon icon={faUser} />
            <span>로그아웃</span>{" "}
          </LoginAuth>
        ) : (
          <LoginAuth onClick={goToLogin}>
            <FontAwesomeIcon icon={faUser} />
            <span>로그인</span>{" "}
          </LoginAuth>
        )}
        <SearchBox>
          <FontAwesomeIcon icon={faSearch} />
          {/* 검색기능구현방법 : 원피스입력 - 유즈네비게이트로 쿼리값에 보냄 - 제이슨에서 추출 */}
          {/* 인풋안에 타겟안의 value값을 쿼리값으로 보냄 */}
          <input type="text" placeholder="상품검색" onKeyUp={onCheckEnter} />
        </SearchBox>
      </HeaderTop>
      <SideMenu width={width}>
        <FontAwesomeIcon icon={faClose} onClick={() => setWidth(0)} />
        <ul className="side-menu-list">
          {/* 맵함수쓸때 키값줘라 */}
          {menuList.map((menu, index) => (
            <li key={index}>{menu}</li>
          ))}
        </ul>
      </SideMenu>
      <ToggleButton>
        <FontAwesomeIcon icon={faBars} onClick={() => setWidth(250)} />
      </ToggleButton>
    </Container>
  );
};

export default Navbar;

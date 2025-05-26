import { useState, useEffect } from "react";
import { Link, useMatch, useNavigate } from "react-router-dom";
import styled, { useTheme } from "styled-components";
import { motion, useAnimation, useScroll } from "framer-motion";
import { useForm } from "react-hook-form";

const Nav = styled(motion.div)`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  font-size: 1.8rem;
  position: fixed;
  top: 0;
  z-index: 1;
`;

const Col = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`;

const Logo = styled(motion.svg)`
  width: 95px;
  fill: ${({ theme }) => theme.red};
  path {
    stroke-width: 5px;
    stroke: ${({ theme }) => theme.white.lighter};
  }
  cursor: pointer;
`;

const Items = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Item = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    opacity: 0.3;
  }
`;

const Circle = styled(motion.span)`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  position: absolute;
  left: 0;
  right: 0;
  bottom: -8px;
  margin: 0 auto;
  background: ${({ theme }) => theme.red};
`;

const Search = styled.form`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const Magnifying = styled(motion.svg)`
  width: 18px;
  position: relative;
  cursor: pointer;
`;

const Input = styled(motion.input)`
  transform-origin: right center;
  &:focus {
    outline: none;
  }
`;

const LogoVariants = {
  // svg파일 채울때 쓰는속성
  normal: { fillOpacity: 1 },
  // 깜빡거리는 느낌-배열로
  active: {
    fillOpacity: [0, 0.5, 0, 0.7, 0, 0.2, 1, 0],
    scale: [1, 1.5, 1.2, 0, 1],
    transition: { repeat: Infinity },
  },
};

interface IForm {
  keyword: string;
}

const Header = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  // 맞으면 트루시한 객체반환 아니면 눌값반환
  const homeMatch = useMatch("/");
  const tvMatch = useMatch("/tv");
  // 뒤에 어떤아이디값이 오든지 간에 다 적용하겠음
  const modalMatch = useMatch("/movies/*");

  // 가상돔이기 때문에 실시간 스크롤값 반영 불가능 - useEffect 사용해야함
  const { scrollY } = useScroll();
  // theme프로바이더로 제공한 값들 객체로 받는 훅함수 구조분해 할당으로 theme값 받지 않아도 쓸 수 있음
  const theme = useTheme();

  const navVariants = {
    top: {
      background: theme.black.darker,
      color: theme.white.darker,
    },
    scroll: {
      background: theme.white.darker,
      color: theme.red,
    },
  };

  const navAnimation = useAnimation();

  const magnifyingAnimation = useAnimation();
  const inputAnimation = useAnimation();
  const main = useNavigate();

  const { register, handleSubmit, setValue } = useForm<IForm>();

  const onValid = (data: IForm) => {
    main(`/search?keyword=${data.keyword}`);
    setValue("keyword", "");
  };

  useEffect(() => {
    // 문법 이렇게 바뀌었나봄
    scrollY.on("change", () => {
      if (scrollY.get() > 80) {
        navAnimation.start("scroll");
        magnifyingAnimation.start({
          fill: theme.red,
        });
      } else {
        navAnimation.start("top");
        magnifyingAnimation.start({
          fill: theme.white.darker,
        });
      }
    });
  }, [scrollY]);

  const toggleSearch = () => {
    if (searchOpen) {
      inputAnimation.start({
        scaleX: 0,
      });
      magnifyingAnimation.start({
        x: 160,
      });
    } else {
      inputAnimation.start({
        scaleX: 1,
      });
      magnifyingAnimation.start({
        x: 0,
      });
    }
    // 기존의 스테이트 값을 받아서 토글처럼 변환하는 테크닉
    setSearchOpen((prev) => !prev);
  };

  const goToMain = () => {
    main("/");
  };

  return (
    <Nav
      variants={navVariants}
      animate={navAnimation}
      initial={{ background: "rgba(0,0,0,1)", color: theme.white.darker }}
    >
      <Col>
        <Logo
          onClick={goToMain}
          variants={LogoVariants}
          // svg속성변경하면서 조작
          initial="normal"
          whileHover="active"
          width="1024"
          height="276.742"
          viewBox="0 0 1024 276.742"
        >
          <path d="M140.803 258.904c-15.404 2.705-31.079 3.516-47.294 5.676l-49.458-144.856v151.073c-15.404 1.621-29.457 3.783-44.051 5.945v-276.742h41.08l56.212 157.021v-157.021h43.511v258.904zm85.131-157.558c16.757 0 42.431-.811 57.835-.811v43.24c-19.189 0-41.619 0-57.835.811v64.322c25.405-1.621 50.809-3.785 76.482-4.596v41.617l-119.724 9.461v-255.39h119.724v43.241h-76.482v58.105zm237.284-58.104h-44.862v198.908c-14.594 0-29.188 0-43.239.539v-199.447h-44.862v-43.242h132.965l-.002 43.242zm70.266 55.132h59.187v43.24h-59.187v98.104h-42.433v-239.718h120.808v43.241h-78.375v55.133zm148.641 103.507c24.594.539 49.456 2.434 73.51 3.783v42.701c-38.646-2.434-77.293-4.863-116.75-5.676v-242.689h43.24v201.881zm109.994 49.457c13.783.812 28.377 1.623 42.43 3.242v-254.58h-42.43v251.338zm231.881-251.338l-54.863 131.615 54.863 145.127c-16.217-2.162-32.432-5.135-48.648-7.838l-31.078-79.994-31.617 73.51c-15.678-2.705-30.812-3.516-46.484-5.678l55.672-126.75-50.269-129.992h46.482l28.377 72.699 30.27-72.699h47.295z" />
        </Logo>
        <Items>
          <Item>
            <Link to="/">Home</Link>
            {/* 홈매치가 트루시한 값이면 서클나타남 */}
            {/* 레이아웃아이디 같이 주면 연결되서 모션 적용됨 */}
            {homeMatch && <Circle layoutId="circle" />}
            {/* 영화 아이디값으로 이동했을때 즉 모달창 띄웠을때 서클이 사라지는 현상 있어서 이 구문 추가해줌 */}
            {modalMatch && <Circle layoutId="circle" />}
          </Item>
          <Item>
            <Link to="/tv">TV</Link>
            {/* 티비매치가 트루시한 값이면 서클나타남 */}

            {tvMatch && <Circle layoutId="circle" />}
          </Item>
        </Items>
      </Col>
      <Col>
        <Search onSubmit={handleSubmit(onValid)}>
          <Magnifying
            onClick={toggleSearch}
            // animate={{ x: searchOpen ? 0 : 160 }}
            animate={magnifyingAnimation}
            // 기본반동효과 없애기
            transition={{ type: "linear" }}
            initial={{ x: 160, fill: theme.white.darker }}
            viewBox="0 0 512 512"
          >
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
          </Magnifying>
          <Input
            {...register("keyword", { required: true, minLength: 1 })}
            type="text"
            //   animate={{ scaleX: searchOpen ? 1 : 0 }}이렇게 수동으로 주지 않고 함수로 만들어서 적용 / 요소가 많아질수도 있으니까
            animate={inputAnimation}
            initial={{ scaleX: 0 }}
            // 기본반동효과 없애기
            transition={{ type: "linear" }}
            placeholder="Search"
          />
        </Search>
      </Col>
    </Nav>
  );
};

export default Header;

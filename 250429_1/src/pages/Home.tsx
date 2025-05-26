import { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { getMovies, IGetMovieResult } from "../api";
import { makeImagePath } from "../utils";
import { useNavigate, useMatch } from "react-router-dom";

// https://image.tmdb.org/t/p/original/elv9BNtTrbtiyif8cE02AuK1nQi.jpg

const Container = styled.div`
  width: 100%;
  height: 200vh;
`;

const Loader = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface IBgPhoto {
  bgPhoto: string | undefined;
}

const Banner = styled.div<IBgPhoto>`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${({ theme }) => theme.white.darker};
  gap: 30px;
  padding: 0 30px;
  background: linear-gradient(to left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
    url(${({ bgPhoto }) => bgPhoto}) center/cover no-repeat;
`;

const Title = styled.h2`
  font-size: 4rem;
`;

const OverView = styled.p`
  font-size: 1.7rem;
  line-height: 1.6;
  width: 40%;
  /* 단어단위로 줄바꿈 */
  word-break: keep-all;
  /* 줄바꿈 허용 */
  white-space: normal;
`;

const Slider = styled.div`
  position: relative;
  width: 100%;
  top: -100px;
`;

const Row = styled(motion.div)`
  position: absolute;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
  margin-bottom: 10px;
`;

const Box = styled(motion.div)<IBgPhoto>`
  width: auto;
  height: 200px;
  background: url(${({ bgPhoto }) => bgPhoto}) center/cover no-repeat;
  cursor: pointer;
  &:first-child {
    transform-origin: left center;
  }
  &:last-child {
    transform-origin: right center;
  }
`;

const Info = styled(motion.div)`
  width: 100%;
  height: 100%;
  padding: 20px;
  background: rgba(0, 0, 0, 0.4);
  opacity: 0;
  h4 {
    color: ${({ theme }) => theme.white.darker};
    font-size: 1.6rem;
  }
`;

const ModalBox = styled(motion.div)`
  position: absolute;
  left: 0;
  right: 0;
  width: 40vw;
  height: 80vh;
  margin: 0 auto;
  background: ${({ theme }) => theme.black.lighter};
  color: ${({ theme }) => theme.white.darker};
  border-radius: 20px;
  overflow: hidden;
`;

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
`;

const MovieCover = styled.div<IBgPhoto>`
  width: 100%;
  height: 400px;

  background: linear-gradient(to top, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0)),
    url(${({ bgPhoto }) => bgPhoto}) center/cover no-repeat;
`;

const MovieTitle = styled.h3`
  font-size: 2.5rem;
  margin: 20px 20px;
`;

const MovieOverView = styled.p`
  margin: 20px 20px;
  font-size: 1.6rem;
  line-height: 1.3;
`;

const rowVariants = {
  hidden: {
    x: window.innerWidth + 10,
  },
  visible: {
    x: 0,
  },
  exit: {
    x: -window.innerWidth - 10,
  },
};

const boxVariants = {
  normal: { scale: 1 },
  hover: { scale: 1.3, y: -50, transition: { delay: 0.3 } },
  transition: { delay: 0.3, type: "tween" },
};

const infoVariants = {
  hover: {
    opacity: 1,
    transition: { delay: 0.3, type: "tween" },
  },
};

const offset = 6;

const Home = () => {
  const [index, setIndex] = useState(0);
  // 슬라이드 움직이고 있는지 상태관리
  const [leaving, setLeaving] = useState(false);
  const { data, isLoading } = useQuery<IGetMovieResult>({
    queryKey: ["nowPlaying"],
    // 반환값 데이터로 들어감
    queryFn: getMovies,
  });

  const history = useNavigate();

  const modalMatch = useMatch("movies/:movieId");

  const { scrollY } = useScroll();

  const toggleLeaving = () => setLeaving((prev) => !prev);

  const inCreaseIndex = () => {
    // 타입가드
    if (data) {
      if (leaving) return;
      toggleLeaving();
      const totalMovies = data?.results.length - 2;
      const maxIndex = Math.ceil(totalMovies / offset) - 1;
      setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
    }
  };

  // 이 경로값 이용해서 모달창 띄울거임
  const onBoxClicked = (movieId: number) => {
    history(`/movies/${movieId}`);
  };

  // 모달창 뒤쪽 오버레이 클릭시 홈으로 돌아가는
  const onOverlayClick = () => {
    history("/");
  };

  const clickedMovie =
    modalMatch?.params.movieId &&
    // +! - 숫자로 바꾸는거임
    data?.results.find((movie) => movie.id === +modalMatch?.params.movieId!);

  return (
    <Container>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <Banner
            onClick={inCreaseIndex}
            bgPhoto={makeImagePath(data?.results[0].backdrop_path || "")}
          >
            <Title>{data?.results[0].title}</Title>
            <OverView>{data?.results[0].overview}</OverView>
          </Banner>
          <Slider>
            {/* 슬라이드하면 가상돔에서 요소가 제거되는데 가상돔에서 요소가 제거되도 요소제어 가능하도록하기위해서 프리센스 컴포넌트 불러옴 */}
            {/* onExitComplete 연타방지 */}
            {/* initial false로 주면 초기&재렌더링할때 히든이었다가 나오는 현상 방지 */}
            <AnimatePresence initial={false} onExitComplete={toggleLeaving}>
              <Row
                key={index}
                variants={rowVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ type: "tween", duration: 1 }}
              >
                {data?.results
                  .slice(2)
                  .slice(offset * index, offset * index + offset)
                  .map((movie) => (
                    <Box
                      key={movie.id}
                      // 어떤영화를 클릭할지 모르니까 클릭한 영화의 아이디값을 인자값으로 주기 위해서 콜백으로 함수 부른거임
                      onClick={() => onBoxClicked(movie.id)}
                      variants={boxVariants}
                      initial="normal"
                      whileHover="hover"
                      transition={{ type: "tween" }}
                      // 문자로줘야함
                      layoutId={movie.id + ""}
                      bgPhoto={makeImagePath(movie.backdrop_path || "", "w500")}
                    >
                      <Info
                        variants={infoVariants}
                        whileHover="hover"
                        transition={{ type: "tween" }}
                      >
                        <h4>{movie.title}</h4>
                      </Info>
                    </Box>
                  ))}
              </Row>
            </AnimatePresence>
          </Slider>
          {/* 유즈매치 이용 모달창 띄우기 */}
          <AnimatePresence>
            {modalMatch ? (
              <>
                <Overlay
                  onClick={onOverlayClick}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />

                <ModalBox
                  layoutId={modalMatch.params.movieId}
                  // 모달창 현재 위치 기준으로 64px 떨어진 값에 위치시키려고 여기서 스타일을 스크롤와이 기준으로 줌
                  style={{ top: scrollY.get() + 90 }}
                >
                  {clickedMovie && (
                    <>
                      <MovieCover
                        bgPhoto={makeImagePath(
                          clickedMovie.backdrop_path || "",
                          "w500"
                        )}
                      />
                      <MovieTitle>{clickedMovie.title}</MovieTitle>
                      <MovieOverView>{clickedMovie.overview}</MovieOverView>
                    </>
                  )}
                </ModalBox>
              </>
            ) : null}
          </AnimatePresence>
        </>
      )}
    </Container>
  );
};

export default Home;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { movieAction } from "../redux/actions/movieAction";
import Banner from "../components/Banner";
import styled from "styled-components";
import MovieSlide from "../components/MovieSlide";
import { ClipLoader } from "react-spinners";

const Wrapper = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  width: 200px;
  border-radius: 10px;
  font-size: 2rem;
  text-align: center;
  margin: 50px 20px;
  padding: 20px;
  color: var(--accent-color);
  background: var(--light-color);
`;

const Home = () => {
  const dispatch = useDispatch();
  // 컴바인되어진요소를 거쳐서 찾아올거임
  // 컴포넌트 마운트 동시에 찾아오라고 하니까 바로는 못찾아옴 -> 조건부렌더링 필요함
  const {
    nowPlayingMovie,
    topRatedMovie,
    upComingMovie,
    genresMovie,
    loading,
  } = useSelector((state) => state.movie);

  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

  useEffect(() => {
    dispatch(movieAction.getMovies());
  }, []);

  if (loading) {
    return (
      <Wrapper>
        <ClipLoader color="#fff" cssOverride={override} size={150} />;
      </Wrapper>
    );
  } else {
    return (
      <>
        {nowPlayingMovie.results && (
          // 조건부렌더링, 엔드단락회로
          <Banner movie={nowPlayingMovie?.results[6]} />
        )}
        <Title>NowPlaying</Title>
        <MovieSlide movies={nowPlayingMovie} />
        <Title>TopRated</Title>
        <MovieSlide movies={topRatedMovie} />
        <Title>Upcoming</Title>
        <MovieSlide movies={upComingMovie} />
      </>
    );
  }
};

export default Home;

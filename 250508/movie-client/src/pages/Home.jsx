import { gql, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`;

const Header = styled.header`
  width: 100%;
  height: 45vh;
  background: linear-gradient(-45deg, #d754ab, #fd723a);
  color: var(--light-color);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1``;

const Loading = styled.div`
  font-size: 1.8rem;
  width: 100%;
  text-align: center;
  margin-top: 20vh;
`;

const MoviesGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-top: -50px;
  padding: 0 20px;
`;

const PosterContainer = styled.div`
  width: 100%;
  height: 400px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
`;

const PosterBg = styled.div`
  width: 100%;
  height: 100%;
  background: ${({ background }) =>
    `url(${background}) center/cover no-repeat`};
`;

// 컴포넌트 밖에서 gql활용해서 가져오는법
const ALL_MOVIES = gql`
  query getMovies {
    allMovies {
      id
      title
      medium_cover_image
    }
  }
`;

const Home = () => {
  // 훅함수는 컴포넌트 안에서만 쓸수있다
  // 리절트 확인해보면 로딩값이 처음에 트루였다가 폴스로 바뀜 - 이거 활용해서 로딩스피너같은거 만들수있음
  const { loading, data } = useQuery(ALL_MOVIES);
  return (
    <>
      {loading ? (
        <Loading>Loading...</Loading>
      ) : (
        <Container>
          <Header>
            <Title>MoviesList</Title>
          </Header>

          <MoviesGrid>
            {data.allMovies.map((movie) => (
              <PosterContainer key={movie.id}>
                <Link to={`/movie/${movie.id}`}>
                  <PosterBg background={movie.medium_cover_image} />
                </Link>
              </PosterContainer>
            ))}
          </MoviesGrid>
        </Container>
      )}
    </>
  );
};

export default Home;

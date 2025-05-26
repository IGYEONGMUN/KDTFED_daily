import React from "react";
import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const ItemGroup = styled.div``;

const Column = styled.div``;

const Loading = styled.div``;

const Title = styled.h1``;

const SubTitle = styled.h4``;

const Button = styled.button``;

const Description = styled.p``;

const Image = styled.div`
  width: 100px;
  height: 100px;
  background: url(${({ bg }) => bg}) center/cover no-repeat;
`;
// isLiked- 캐시값 이용해서 좋아요 싫어요 표시하려고 클라이언트 상에서 캐시값만 이용하겠다
const GET_MOVIE = gql`
  query getMovies($movieId: String!) {
    movie(id: $movieId) {
      id
      title
      rating
      medium_cover_image
      isLiked @client
    }
  }
`;

const Movie = () => {
  const { id } = useParams();
  const {
    data,
    loading,
    // 데이터값찍어보면 클라이언트 안에 캐쉬가 잇음
    client: { cache },
  } = useQuery(GET_MOVIE, {
    // 아폴로스튜디오상 객체로 변수값 줘서 객체로 정의
    variables: {
      movieId: id,
    },
  });

  const test = useQuery(GET_MOVIE);
  console.log(test);

  const onClick = () => {
    cache.writeFragment({
      id: `Movie:${id}`,
      // 문법임
      fragment: gql`
        fragment MovieFragment on Movie {
          isLiked
        }
      `,
      data: {
        isLiked: !data.movie.isLiked,
      },
    });
  };

  return (
    <>
      {loading ? (
        <Loading>Loading...</Loading>
      ) : (
        <Container>
          <ItemGroup>
            <Column>
              <Title>{data.movie.title}</Title>
              <SubTitle>{data.movie.rating}</SubTitle>
              <Button onClick={onClick}>
                {data.movie.isLiked ? "UnLike" : "Like"}
              </Button>
            </Column>
            <Image bg={data.movie.medium_cover_image} />
          </ItemGroup>
        </Container>
      )}
    </>
  );
};

export default Movie;

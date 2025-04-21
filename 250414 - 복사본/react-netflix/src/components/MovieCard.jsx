import React from "react";
import styleds, { styled } from "styled-components";

const Wrapper = styled.div`
  width: 300px;
  height: 200px;
  position: relative;
  cursor: pointer;
`;

const Overlay = styled.div``;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Title = styled.h1``;

const Genre = styled.div``;

const InfoGroup = styled.div``;

const Vote = styled.span``;

const Adult = styled.div``;

const MovieCard = ({ item }) => {
  return (
    <Wrapper>
      <Img
        src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
        alt="thumbnail"
      />
    </Wrapper>
  );
};

export default MovieCard;

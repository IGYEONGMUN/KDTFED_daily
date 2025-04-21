import React from "react";
import styleds, { styled } from "styled-components";
import { useSelector } from "react-redux";
import { Badge } from "react-bootstrap";

const Wrapper = styled.div`
  width: 300px;
  height: 200px;
  position: relative;
  cursor: pointer;
  &:hover .overlay {
    opacity: 1;
  }
`;

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  opacity: 0;
  transition: opacity 0.3s;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const BackDropFilter = styled.div`
  position: absolute;
  bottom: 0px;
  width: 100%;
  height: 50px;
  background: linear-gradient(to top, #0f0f0f, rgba(0, 0, 0, 0));
`;

const Title = styled.h1`
  position: absolute;
  width: 50%;
  bottom: 20px;
  left: 20px;
`;

const Genre = styled.div`
  position: absolute;
  left: 20px;
  top: 15px;
  display: flex;
  gap: 3px;
`;

const Vote = styled.span`
  position: absolute;
  bottom: 20px;
  right: 25px;
`;

const Adult = styled.div`
  width: 100%;
  position: absolute;
  top: 10px;
  right: 20px;
  background: var(--accent-color);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.8;
  font-size: 1.6rem;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.7);
  z-index: 1;
`;

const MovieCard = ({ item }) => {
  const { genresMovie } = useSelector((state) => state.movie);

  return (
    <Wrapper>
      <Overlay className="overlay"></Overlay>
      <Img
        src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
        alt="thumbnail"
      ></Img>
      <BackDropFilter>
        <Title>{item.title}</Title>
      </BackDropFilter>
      <Adult>{item.adult ? "성인" : "All"}</Adult>

      <Genre>
        {/* {item.genre_ids.map((id,index)=>({genresMovie.find((item)=>item.id===id).name}))}
         */}
        {/* 디브태그없이 즉 주는 개체없이 주려고 하니까 오류남 */}
        {item.genre_ids.map((id, index) => (
          <Badge key={index}>
            {genresMovie.find((item) => item.id === id).name}
          </Badge>
        ))}
      </Genre>
      <Vote>⭐ {item.vote_average.toFixed(2)}</Vote>
    </Wrapper>
  );
};

export default MovieCard;

import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 800px;
  position: relative;
  color: var(--light-color);
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const BannerInfo = styled.div`
  position: absolute;
  top: 50%;
  left: 20px;
`;

const MovieTitle = styled.h1`
  font-size: 3.2rem;
  font-weight: 600;
  margin-bottom: 50px;
`;

const MovieOverview = styled.p`
  width: 40%;
  font-size: 1.6rem;
  line-height: 26px;
`;

const Banner = ({ movie }) => {
  console.log(movie);
  return (
    <>
      <Wrapper>
        <Img
          src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}.jpg`}
          alt="bannerImg"
        />
        <BannerInfo>
          <MovieTitle>{movie.title}</MovieTitle>
          <MovieOverview>{movie.overview}</MovieOverview>
        </BannerInfo>
      </Wrapper>
    </>
  );
};

export default Banner;

import React from "react";
import styled from "styled-components";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MovieCard from "./MovieCard";

const Wrapper = styled.div`
  color: var(--light-color);
  padding: 0 14px;
`;

const MovieSlide = ({ movies }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 3000, min: 1850 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 1850, min: 1250 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1250, min: 940 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 940, min: 0 },
      items: 2,
    },
    mobile640: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
    },
  };

  return (
    <Wrapper>
      <Carousel responsive={responsive} infinite={true} autoPlay={true}>
        {movies.results.map((item, index) => (
          <MovieCard key={index} item={item} />
        ))}
      </Carousel>
    </Wrapper>
  );
};

export default MovieSlide;

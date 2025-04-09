import { Button } from "react-bootstrap";
import styled from "styled-components";
import React from "react";

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  & > button {
    font-size: 2rem;
  }
`;

const WeatherButton = ({ cities, handleCityChange, selectedCity, setCity }) => {
  return (
    <ButtonGroup>
      <Button
        variant={`${selectedCity === null ? "outline-warning" : "warning"}`}
        onClick={() => handleCityChange("current")}
      >
        Current Location
      </Button>
      {cities.map((city) => (
        // 맵함수쓸때 키값줘라
        <Button
          key={city}
          variant={`${selectedCity === city ? "warning" : "outline-warning"}`}
          onClick={() => handleCityChange(city)}
        >
          {city}
        </Button>
      ))}
    </ButtonGroup>
  );
};

export default WeatherButton;

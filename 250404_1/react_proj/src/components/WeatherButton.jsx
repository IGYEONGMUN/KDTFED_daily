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

const WeatherButton = ({ cities }) => {
  return (
    <ButtonGroup>
      <Button variant="warning">Current Location</Button>
      {cities.map((it) => (
        // 맵함수쓸때 키값줘라
        <Button key={it} variant="warning">
          {it}
        </Button>
      ))}
    </ButtonGroup>
  );
};

export default WeatherButton;

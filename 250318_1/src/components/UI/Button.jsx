import React from "react";
import styled from "styled-components";
//styled Components는 props를 받을수있다는장점있음
const StyledButton = styled.button`
  border: 1px solid var(--primary-light-color);
  border-radius: 8px;
  margin-bottom: 10px;
  padding: 8px 16px;
  font-size: 16px;
  cursor: pointer;
`;

const Button = ({ title, onClick }) => {
  return <StyledButton onClick={onClick}>{title || "button"}</StyledButton>;
};

export default Button;

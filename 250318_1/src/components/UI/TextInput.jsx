import React from "react";
import styled from "styled-components";

const StyledTextarea = styled.textarea`
  width: calc(100% - 32px);
  ${({ height }) => height && `height: ${height}px`}
  margin: 0 auto;
  padding: 16px;
  line-height: 20px;
`;

const TextInput = ({ height, value, onChange }) => {
  return (
    <StyledTextarea
      height={height}
      value={value}
      onChange={onChange}
    ></StyledTextarea>
  );
};

export default TextInput;

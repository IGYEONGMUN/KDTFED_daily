import React from "react";
import styled from "styled-components";

const Container = styled.span`
  margin: 0 16px;
  font-size: 1.4rem;
`;

interface Props {
  readonly data: number;
}

// 구조분해할당으로 데이터 값받고
const Label = ({ data }: Props) => {
  return <Container>{data}</Container>;
};

// 앱에서 중괄호없이 받으려면 디폴트
export default Label;

import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.button`
  border: none;
  border-radius: 4px;
  background: var(--button-color);
  color: var(--light-color);
  padding: 8px 16px;
  cursor: pointer;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.8;
  }
  &:active {
    box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.2);
  }
`;

// 객체->인터페이스로 타입정의
interface Props {
  readonly label: string;
  // 셋카운터만 실행하니까 반환값이 없는 함수-보이드
  readonly onClick?: () => void;
}

// 프랍스 ->객체니까 객체타입으로 선언
// const Button = ({ label, onClick }: Props) => {
//   return <Container onClick={onClick}>{label}</Container>;
// };

// 클래스형 컴포넌트 만드는법
// 리액트 라이브러리에서 슈퍼타입의 컴포넌트에서 받아옴 -> 프랍스의 값을 제네릭으로 받을수있음(어떤 값이 들어올지모르니까)
class Button extends Component<Props> {
  render() {
    const { label, onClick } = this.props;
    // 렌더라는함수는 리턴필요함
    return <Container onClick={onClick}>{label}</Container>;
  }
}

export default Button;

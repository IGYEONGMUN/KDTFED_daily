import styled from "styled-components";

const Container = styled.button`
  border: none;
  /* 구조분해할당으로 바로넣기 */
  background: ${({ color }) => color};
  color: var(--light-color);
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: opacity 0.3s;
  &:hover {
    opacity: 0.8;
  }
  &:active {
    box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.2);
  }
`;

interface Props {
  readonly label: string;
  readonly color?: string;
  // 셋스테이트로 값을 반환하지 않는 함수
  readonly onClick?: () => void;
}

const Button = ({ label, color = "#ff5722", onClick }: Props) => {
  return (
    <Container color={color} onClick={onClick}>
      {label}
    </Container>
  );
};

export default Button;

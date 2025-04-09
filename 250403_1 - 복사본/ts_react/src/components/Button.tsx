import styled from "styled-components";

const Container = styled.button`
  border: none;
  padding: 8px 16px;
  cursor: pointer;
  border-radius: 4px;
  background: ${({ color }) => color};
  color: var(--light-color);
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
  readonly onClick?: () => void;
}

const Button = ({ label, color = "#ff5722", onClick }: Props) => {
  // 여기서 컬러프롭스를 주면 위에서 쓸수있음
  return (
    <Container color={color} onClick={onClick}>
      {label}
    </Container>
  );
};

export default Button;

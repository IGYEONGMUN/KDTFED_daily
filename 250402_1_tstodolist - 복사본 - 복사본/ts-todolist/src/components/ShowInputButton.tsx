import styled from "styled-components";
import Button from "./Button";
const Container = styled.div`
  position: absolute;
  right: 40px;
  bottom: 40px;
  z-index: 1;
`;

interface Props {
  readonly show: boolean;
  readonly onClick: () => void;
}

const ShowInputButton = ({ show, onClick }: Props) => {
  return (
    <Container>
      <Button
        label={show ? "목록보기" : "할 일 추가"}
        // 트루일땐 기본색상으로변경
        color={show ? undefined : "#304ffe"}
        // 토글로 바꿔버리는 문법
        onClick={onClick}
      />
    </Container>
  );
};

export default ShowInputButton;

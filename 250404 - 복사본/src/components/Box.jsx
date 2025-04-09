import styled from "styled-components";

const Container = styled.div`
  width: 500px;
  height: 500px;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  &.win {
    border: 1px solid var(--accent-color);
    color: var(--accent-color);
  }
  &.lose {
    border: 1px solid var(--green-color);
    color: var(--green-color);
  }
  &.tie {
    border: 1px solid var(--border-color);
    color: var(--border-color);
  }
`;

const Title = styled.h1`
  font-size: 2.4rem;
`;

const Load = styled.div`
  font-size: 2.4rem;
  background: var(--border-color);
  padding: 8px 6px;
  border-radius: 8px;
`;

const Img = styled.img`
  width: 400px;
  height: 400px;
`;

const Result = styled.h2`
  font-size: 2.2rem;
  font-weight: 600;
`;

const Box = ({ title, item, result }) => {
  if (title === "Computer" && result !== "비겼음" && result !== "") {
    result = result === "이겼음" ? "졌음" : "이겼음";
  }

  let className = "";

  switch (result) {
    case "비겼음":
      className = "tie";
      break;
    case "이겼음":
      className = "win";
      break;
    case "졌음":
      className = "lose";
      break;
  }

  return (
    <Container className={className}>
      <Title>{title}</Title>
      {item === null ? (
        <Load>누가 이길까요</Load>
      ) : (
        <Img src={item?.img} alt={title} />
      )}
      {/* 초기에는 널값이었다가 있으면 찾아오셈-  앤드단락회로랑 비슷함 */}

      {/* <Img src={item && item.img} /> */}
      <Result>{result}</Result>
    </Container>
  );
};

export default Box;

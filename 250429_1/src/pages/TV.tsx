import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 200vh;
  background: ${({ theme }) => theme.black.darker};
`;

const TV = () => {
  return <Container>TV</Container>;
};

export default TV;

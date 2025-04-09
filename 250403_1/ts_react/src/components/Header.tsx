import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  background: var(--light-color);
  padding: 20px;
  margin-bottom: 20px;
`;

const Title = styled.div`
  font-size: 1.4rem;
  font-weight: bold;
`;

const Header = () => {
  return (
    <Container>
      <Title>블로그포스트</Title>
    </Container>
  );
};

export default Header;

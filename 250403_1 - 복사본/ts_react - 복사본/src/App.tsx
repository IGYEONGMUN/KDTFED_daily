import { useState, useEffect } from "react";
import GlobalStyles from "./styles/GlobalStyles.styles";
import styled from "styled-components";
import Header from "./components/Header";
import BlogPost from "./components/BlogPost";
// import mockPosts from "./mock/posts.json";
import Button from "./components/Button";
import Form from "./components/Form";

const Container = styled.div`
  width: 100%;
  /* height: 100vh; */
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--bg-color);
  overflow: scroll;
`;

const ButtonContainer = styled.div`
  position: absolute;
  right: 40px;
  bottom: 40px;
`;

// 제이슨데이터 객체
interface Post {
  readonly userId: number;
  readonly id: number;
  readonly title: string;
  readonly body: string;
}

function App() {
  const [posts, setPosts] = useState<Array<Post>>([]);

  const url = "https://jsonplaceholder.typicode.com/posts";
  // 마운트되는시점
  useEffect(() => {
    // setTimeout(() => {
    //   setPosts(mockPosts);
    // }, 1000);
    fetch(url)
      .then((response) => response.json())
      .then((json) => setPosts(json))
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      <GlobalStyles />
      <Container>
        <Header />
        {/* 맵쓰면 키값생각 */}
        {posts.map((post) => (
          <BlogPost key={post.id} title={post.title} body={post.body} />
        ))}
        <ButtonContainer>
          <Button label="등록" />
        </ButtonContainer>
        <Form />
      </Container>
    </>
  );
}

export default App;

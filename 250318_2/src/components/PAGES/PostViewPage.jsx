import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../UI/Button";
import TextInput from "../UI/TextInput";
import CommentList from "../LIST/CommentList";
import data from "../../data.json";

const Wrapper = styled.div`
  width: calc(100% - 32px);
  margin: 0 auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  max-width: 720px;
  & > * :not(:last-child) {
    margin-bottom: 16px;
  }
`;

const PostContainer = styled.div`
  border: 1px solid grey;
  padding: 8px 16px;
`;

const TitleText = styled.p`
  font-size: 28px;
  font-weight: 500;
  margin-bottom: 10px;
`;

const ContentText = styled.p`
  font-size: 20px;
  line-height: 32px;
`;

const CommentLabel = styled.p`
  font-size: 16px;
  font-weight: 500;
  margin: 10px;
`;

const PostViewPage = () => {
  const [comment, setComment] = useState("");
  const navigate = useNavigate();
  const { postId } = useParams();
  const post = data.find((item) => item.id == postId);
  return (
    <Wrapper>
      <Button
        title="뒤로가기"
        onClick={() => {
          navigate("../");
        }}
      />
      <Container>
        <PostContainer>
          <TitleText>{post.title}</TitleText>
          <ContentText>{post.content}</ContentText>
        </PostContainer>
      </Container>
      <CommentLabel>댓글</CommentLabel>
      <Container>
        <CommentList comments={post.comments} />
      </Container>
      <TextInput
        height={40}
        value={comment}
        onChange={(e) => {
          setComment(e.target.value);
        }}
      />
      <Button
        title="댓글작성하기"
        onClick={() => {
          navigate("/");
        }}
      />
    </Wrapper>
  );
};

export default PostViewPage;

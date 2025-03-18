import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: calc(100% - 32px);
  border: 1px solid gray;
  padding: 16px;
  border-radius: 8px;
  cursor: pointer;
  background: var(--primary-light-color);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s;
  &:hover {
    background: lightgray;
  }
`;

const TitleText = styled.p`
  font-size: 20px;
  font-weight: 500;
`;

const PostLlistItem = ({ post, onClick }) => {
  return (
    <Wrapper onClick={onclick}>
      <TitleText>{post.title}</TitleText>
    </Wrapper>
  );
};

export default PostLlistItem;

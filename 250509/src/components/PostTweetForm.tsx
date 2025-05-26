import React, { useState } from "react";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 20px;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 250px;
  border: 2px solid var(--light-color);
  background: var(--dark-color);
  color: var(--light-color);
  font-size: 1.6rem;
  padding: 20px;
  resize: none;
  &::placeholder {
    opacity: 1;
    transition: opacity 0.3s;
  }
  &:focus {
    outline: none;

    &::placeholder {
      opacity: 0;
    }
  }
`;

const AttachFileButton = styled.label`
  width: 200px;
  color: royalblue;
  border: 1px solid royalblue;
  padding: 10px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s;
  border-radius: 10px;
  &:hover {
    background: royalblue;
    color: var(--light-color);
  }
`;

const AttachFileInput = styled.input`
  display: none;
`;

const SubmitBtn = styled.input`
  width: 200px;
  padding: 10px;
  cursor: pointer;
  background: var(--light-color);
  color: royalblue;
  border: none;
  border-radius: 10px;
  transition: all 0.3s;
  &:hover {
    opacity: 0.8;
    background: royalblue;
    color: var(--light-color);
  }
`;
const PostTweetForm = () => {
  const [isLoading, setisLoading] = useState(false);
  const [tweet, setTweet] = useState("");
  // 파일이 null일수도 있고 파일일수도 있다 정의해줌
  const [file, setFile] = useState<File | null>(null);

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTweet(e.target.value);
  };

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files && files.length === 1) setFile(files[0]);
  };

  return (
    <Form>
      <TextArea
        rows={5}
        maxLength={180}
        value={tweet}
        onChange={onChange}
        placeholder="What is Happening?"
      />
      <AttachFileButton htmlFor="file">
        {file ? "Photo Added" : "Add Photo"}
      </AttachFileButton>
      {/* 이미지파일만 받아오겠다 */}
      <AttachFileInput
        onChange={onFileChange}
        type="file"
        id="file"
        accept="image/*"
      />
      <SubmitBtn
        type="submit"
        value={isLoading ? "Posting..." : "Post Tweet"}
      />
    </Form>
  );
};

export default PostTweetForm;

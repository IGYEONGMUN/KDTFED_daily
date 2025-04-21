import { useState } from "react";
import styled from "styled-components";
import { ProgressBar, Button } from "react-bootstrap";
import { questionData } from "../assets/questiondata";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: url("https://i.pinimg.com/originals/5a/15/ab/5a15ab85705915ebb0a0d8e1ba21db01.gif")
    center/cover no-repeat;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 99%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  font-size: 3rem;
  background: var(--accent-color);
  color: var(--light-color);
  padding: 8px 14px;
  border-radius: 10px;
  margin-bottom: 80px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 30px;
  & > button[type="button"] {
    width: 400px;
    height: 200px;
    font-size: 2rem;
    border-radius: 8px;
  }
`;

const Question = () => {
  const [questionNo, setQuestionNo] = useState(0);
  const handleClickButtonA = () => {
    setQuestionNo(questionNo + 1);
  };
  const handleClickButtonB = () => {
    setQuestionNo(questionNo + 1);
  };

  return (
    <Container>
      <ProgressBar
        variant="info"
        now={(questionNo / questionData.length) * 100}
      />
      <Wrapper>
        <Title>{questionData[questionNo].title}</Title>
        <ButtonGroup>
          <Button variant="info" onClick={() => handleClickButtonA()}>
            {questionData[questionNo].answera}
          </Button>
          <Button variant="info" onClick={() => handleClickButtonB()}>
            {questionData[questionNo].answerb}
          </Button>
        </ButtonGroup>
      </Wrapper>
    </Container>
  );
};

export default Question;

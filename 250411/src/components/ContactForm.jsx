import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import styled from "styled-components";
import { useDispatch } from "react-redux";

const Container = styled.div`
  & input[type="text"] {
    margin-bottom: 20px;
    padding: 8px;
    font-size: 1.6rem;
    &::placeholder {
      font-size: 1.6rem;
    }
  }
  & button[type="submit"] {
    width: 100%;
    padding: 8px;
    font-size: 1.6rem;
  }
`;

const formNameChange = () => {};

const ContactForm = () => {
  const [name, setName] = useState();
  const [phoneNumber, setPhoneNumber] = useState();

  const dispatch = useDispatch();

  const addContact = (e) => {
    e.preventDefault();
    // 액션객체안에 타입부터정의하고
    dispatch({
      type: "ADD_CONTACT",
      // 페이로드 안에도 객체형태로보냄 네임과 전화번호는 형제요소라 프랍스로 못보냄
      payload: {
        name,
        phoneNumber,
      },
    });
  };

  return (
    <Container>
      <Form onSubmit={addContact}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>이름</Form.Label>
          <Form.Control
            type="text"
            placeholder="이름을 입력해주세요"
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicContact">
          <Form.Label>전화번호</Form.Label>
          <Form.Control
            type="text"
            placeholder="전화번호를 입력해주세요"
            onChange={(e) => {
              setPhoneNumber(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
        <Button variant="primary" type="submit">
          추가
        </Button>
      </Form>
    </Container>
  );
};

export default ContactForm;

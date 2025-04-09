import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Form, Button } from "react-bootstrap";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 30%;
  margin: 50px auto;
  font-size: 2rem;
  & input[type="email"],
  & input[type="password"] {
    margin: 5px 0 20px 0;
    padding: 10px;
  }
  & button[type="submit"] {
    width: 30%;
    font-size: 1.8rem;
    border-radius: 10px;
    margin-top: 20px;
  }
`;

const Login = ({ setAuthenticate }) => {
  const navigate = useNavigate();
  const loginUser = (e) => {
    e.preventDefault();
    setAuthenticate(true);
    navigate("/");
  };

  return (
    <Container>
      <Wrapper>
        <Form onSubmit={loginUser}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="formBasicCheckbox"
          ></Form.Group>
          <Button variant="info" type="submit">
            LOGIN
          </Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;

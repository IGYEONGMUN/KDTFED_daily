// 공통으로쓴다 - 레이아웃 컴포넌트에 ㄱㄱ
import React from "react";
import { Container, Button, Form, Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";

const Wrapper = styled.div`
  & .inner-item {
    padding: 7px 20px;
  }

  & .me-auto {
    font-size: 1.7rem;
    margin-left: 30px;
    gap: 40px;
  }

  & .me-2 {
    padding: 5px 14px;
    font-size: 1.4rem;
    position: relative;
  }

  & button[type="button"] {
    font-size: 1.5rem;
    padding: 2px 10px;
    position: relative;
    margin: 0px 20px;
  }
`;

const Logo = styled.img`
  width: 130px;
`;

const BtnItem = styled.span`
  color: var(--light-color);
  transition: color 0.3s;
  &:hover {
    color: var(--accent-color);
  }
`;

const Navigation = () => {
  return (
    <Wrapper>
      <Navbar variant="dark" bg="dark">
        <Container fluid className="inner-item">
          <Navbar.Brand href="/">
            <Logo
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
              alt="logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/">
                <BtnItem>Home</BtnItem>
              </Nav.Link>
              <Nav.Link href="/movies">
                <BtnItem>Movie</BtnItem>
              </Nav.Link>
              <Nav.Link href="/">
                <BtnItem>드라마</BtnItem>
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-danger">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Wrapper>
  );
};

export default Navigation;

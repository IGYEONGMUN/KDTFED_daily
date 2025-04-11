import React, { useState } from "react";
import { Row, Col, Button, Form } from "react-bootstrap";
import styled from "styled-components";
import { useDispatch } from "react-redux";

const Contaier = styled.div`
  & input[type="text"] {
    margin-bottom: 10px;
    padding: 8px;
    width: 250px;
    font-size: 1.6rem;
    &::placeholder {
      font-size: 1.6rem;
    }
  }
  & button[type="submit"] {
    width: 100%;
    padding: 5px;
    font-size: 1.6rem;
  }
`;

const SearchBox = () => {
  const [keyword, setKeyword] = useState("");
  const dispatch = useDispatch();

  const searchByName = (e) => {
    e.preventDefault();
    dispatch({
      type: "SEARCH_BY_USERNAME",
      // keyword 키에 keyword값 보냄 -이름 같음- 생략가능
      payload: { keyword },
    });
  };
  return (
    <Contaier>
      <Form onSubmit={searchByName}>
        <Form.Group>
          <Row>
            <Col xs={5}>
              <Form.Control
                type="text"
                placeholder="검색어를 입력해주세요"
                onChange={(e) => setKeyword(e.target.value)}
              />
            </Col>
            <Col xs={2}>
              <Button type="submit">찾기</Button>
            </Col>
          </Row>
        </Form.Group>
      </Form>
    </Contaier>
  );
};

export default SearchBox;

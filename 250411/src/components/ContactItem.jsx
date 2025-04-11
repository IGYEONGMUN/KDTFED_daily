import React from "react";
import { Row, Col } from "react-bootstrap";
import styled from "styled-components";

const Img = styled.img`
  width: 100%;
  border-radius: 10px;
`;

const Name = styled.div`
  width: 20%;
  font-size: 1.8rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 8px;
  padding: 6px 12px;
  background: var(--border-color);
  color: var(--light-color);
  border-radius: 10px;
`;

const Number = styled.div`
  font-size: 1.8rem;
`;

const ContactItem = ({ item }) => {
  return (
    <Row>
      <Col xs={3}>
        <Img
          src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg"
          alt="unknownImg"
        />
      </Col>
      <Col xs={9}>
        <Name>{item?.name}</Name>
        <Number>{item?.phoneNumber}</Number>
      </Col>
    </Row>
  );
};

export default ContactItem;

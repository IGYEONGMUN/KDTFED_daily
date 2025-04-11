import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import {
  Container,
  Row,
  Col,
  Dropdown,
  Button,
  DropdownToggle,
} from "react-bootstrap";
import { faL } from "@fortawesome/free-solid-svg-icons";

const Wrapper = styled.div`
  margin-top: 80px;
  & .dropdown {
    width: 200px;
  }
  & button {
    border-radius: 10px;
    font-size: 1.6rem;
    width: 60%;
    padding: 10px;
  }
  & .dropdown-item {
    font-size: 1.6rem;
  }
`;

const Img = styled.img`
  width: 100%;
  border-radius: 10px;
`;

const ProductDesc = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ProductTitle = styled.div`
  font-size: 1.8rem;
`;

const ProductPrice = styled.div`
  font-size: 1.8rem;
`;

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedSize, setSelectedSize] = useState("사이즈선택");
  const { id } = useParams();

  const getProductDetail = async () => {
    setLoading(true);
    const url = `http://localhost:3000/products/${id}`;
    const response = await fetch(url);
    const data = await response.json();
    setLoading(false);
    setProduct(data);
  };

  const formattedPrice = new Intl.NumberFormat("ko-KR", {
    style: "currency",
    currency: "KRW",
  }).format(product?.price);

  useEffect(() => {
    getProductDetail();
  }, []);

  if (loading || product === null) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <Container>
        <Wrapper>
          <Row>
            <Col className="me-4 d-flex justify-content-end">
              {/* 앤드단락회로 필요없음 - 로딩이 끝난뒤에 실행될테니까 */}
              <Img src={product?.img} alt={product?.id} />
            </Col>
            <Col>
              <ProductDesc>
                <ProductTitle>상품명 : {product?.title}</ProductTitle>
                <ProductPrice>상품가격 : {formattedPrice}</ProductPrice>
                <Dropdown>
                  <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
                    {selectedSize}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {product &&
                      product?.size.length > 0 &&
                      product?.size.map((item, index) => (
                        <Dropdown.Item
                          key={index}
                          onClick={() => setSelectedSize(item)}
                          href="#"
                        >
                          {item}
                        </Dropdown.Item>
                      ))}
                  </Dropdown.Menu>
                </Dropdown>
                <Button variant="dark">장바구니</Button>
                <Button variant="danger">상품결제</Button>
              </ProductDesc>
            </Col>
          </Row>
        </Wrapper>
      </Container>
    );
  }
};

export default ProductDetail;

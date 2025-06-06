import React from "react";
import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { Container, Row, Col } from "react-bootstrap";

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const getProducts = async () => {
    const url = "http://localhost:3000/products";
    const response = await fetch(url);
    // 객체로 바꾸는함수json()
    const data = await response.json();
    setProductList(data);
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <Container>
      <Row>
        {productList.map((menu, index) => (
          <Col key={index} lg={3}>
            <ProductCard item={menu} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductAll;

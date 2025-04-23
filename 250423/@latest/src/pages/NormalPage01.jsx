import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 40vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

const NormalPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  const fetchPost = async () => {
    const url = "http://localhost:3000/posts";
    const res = await fetch(url);
    const data = await res.json();

    setIsLoading(false);
    setData(data);
  };

  useEffect(() => {
    fetchPost();
  }, []);

  if (isLoading) {
    return <h1>Loading ...</h1>;
  } else {
    return (
      <Container>
        {data?.map((it) => (
          <div key={it.id}>{it.title}</div>
        ))}
      </Container>
    );
  }
};

export default NormalPage;

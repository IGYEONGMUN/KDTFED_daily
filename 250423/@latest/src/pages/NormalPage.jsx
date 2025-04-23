import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { usePostQuery } from "../usePost";

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
  const { data, isLoading, error, isError } = usePostQuery();

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

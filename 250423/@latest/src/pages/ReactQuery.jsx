import React from "react";
// import { useQuery } from "@tanstack/react-query";
// 이거 활용해서 데이터 찾아올거임
// import axios from "axios";
// 커스텀훅 찾아온거임
import { usePostQuery } from "../usePost";
import styled from "styled-components";
import { useQueries } from "@tanstack/react-query";

const Container = styled.div`
  width: 100%;
  height: 40vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

const Reactquery = () => {
  // 커스텀훅으로 변환
  // const { data, isLoading, error, isError, refetch } = usePostQuery();
  // if (isLoading) {
  //   return <h1>Loading...</h1>;
  // }
  // if (isError) {
  //   return <h1>{error.message}</h1>;
  // }

  const ids = [1, 2, 3, 4];
  const fetchPostDetail = (id) => {
    return axios.get(`http://localhost:3000/posts/${id}`);
  };

  // 복수의 값을 가져오고 싶을때
  const results = useQueries({
    queries: ids.map((id) => {
      return {
        queryKey: ["posts", id],
        queryFn: () => fetchPostDetail(id),
      };
    }),
    combine: (results) => {
      return {
        data: results.map((result) => result.data),
      };
    },
  });

  console.log(results);
  return (
    <>
      {/* <Container>
        {data?.map((it) => (
          <div key={it.id}>{it.title}</div>
        ))}
        <button onClick={refetch}>Posts 리스트 새로고침</button>
      </Container> */}
      <div></div>
    </>
  );
};

export default Reactquery;

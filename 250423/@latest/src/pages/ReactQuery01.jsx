import React from "react";
// import { useQuery } from "@tanstack/react-query";
// 이거 활용해서 데이터 찾아올거임
// import axios from "axios";
// 커스텀훅 찾아온거임
import { usePostQuery } from "../usePost";
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

const Reactquery = () => {
  // 공식문서에 구조분해 할당으로 받으라고하고잇음
  // 유즈쿼리 안의 객체도 공식문서 참조
  // 로딩 불리언값으로 판별하는거 셋스테이트 만들어서 할 필요없음 유즈쿼리의 이즈로딩 콘솔로 찍어보면 처음에 트루였다가 false로 자동으로 바꿔줘서 여기서 판별해줌
  // 또한 에러가 발생한 요소도 알려줌 언디파인드와 널값으로 판단함
  // const { data, isLoading, error, isError, refetch } = useQuery({
  //   // 유즈쿼리는 포스트라는 외부 에이피아이 끌기 위한 함수
  //   queryKey: ["posts", 1],
  //   queryFn: (queryData) => {
  //     // 쿼리값 이용해서 첫번째 데이터 가져오려고
  //     const id = queryData.queryKey[1];
  //     // 제이슨서버 주소 넣어줌
  //     return axios.get(`http://localhost:3000/posts/${id}`);
  //   },
  //   // 호출시도 몇번할거임 / 디폴트는 3번이었음
  //   retry: 1,

  //   select: (data) => {
  //     return data.data;
  //   },
  //   // 가비지컬렉터설정 즉 캐시값 유효기간 설정 - 리액트쿼리상에서 inactive 가 된 시점부터 gcTime 카운트함 즉 캐시값이 있는 페이지를 떠났을때(inactive)
  //   // gcTime: 5000,
  //   // // 스테일(오염)까지 진입하기까지의 시간을 정해줄 수 있음 즉 프레시 시간을 늘려주는거임
  //   // // gc타임이 stale타임보다 더빠르면 모순이 발생함 -> 자동으로 호출 다시함-논리적으로 비추 - 스테일 타임이 가비지타임보다 큰 논리로 짜는게 좋음
  //   // staleTime: 10000,
  //   // // 주기적으로 api호출 왜냐하면 비트코인처럼 값이 계속 변하는 일이 있기 때문에 대신 서버 트래픽은 증가할거임
  //   // refetchInterval: 3000,
  //   // 호출 다시 할거냐 안할거냐, 은행이나 관공서 같은거는 데이터가 주기적으로 바뀌면 안되니까
  //   // refetchOnMount: false,
  //   // 여러개의 탭을 왔다갔다 할때 최신데이터를 가져오기 위한 설정
  //   // refetchOnWindowFocus: true,
  //   // 최초에 api 호출하지 않음-  버튼누르면 그때서야 나옴 - 검색기능같은거에 쓰면 좋을듯
  //   enabled: false,
  // });

  // 커스텀훅으로 변환
  const { data, isLoading, error, isError, refetch } = usePostQuery();
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <Container>
      {data?.map((it) => (
        <div key={it.id}>{it.title}</div>
      ))}
      <button onClick={refetch}>Posts 리스트 새로고침</button>
    </Container>
  );
};

export default Reactquery;

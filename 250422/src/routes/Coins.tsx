// 처음 마운트될때, 코인 업데이트될때 상태관리 필요함
// import { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchCoins } from "../api";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
`;

const Header = styled.header`
  font-size: 3.2rem;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.accentColor};
`;

const Loader = styled.div`
  font-size: 22px;
  color: ${({ theme }) => theme.textColor};
`;

const CoinList = styled.ul`
  width: 760px;
  height: 500px;
`;

const Coin = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 20px;
  background: ${({ theme }) => theme.textColor};
  margin-bottom: 15px;
  color: ${({ theme }) => theme.bgColor};
  padding: 25px;
  border-radius: 8px;
  font-size: 2rem;
  transition: color 0.3s;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.accentColor};
  }
`;

const Img = styled.img`
  width: 25px;
  height: 25px;
`;

interface CoinInterface {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

const Coins = () => {
  // 코인즈 네버타입임
  // 최초에는 빈배열이나 값이 들어오면 코인인터페이스타입으로 코인즈에 값이 들어갈거임
  // const [coins, setCoins] = useState<CoinInterface[]>([]);
  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   // 고차함수/ 선언부 호출부 따로 쓰지 않고 같이씀
  //   (async () => {
  //     const response = await fetch(
  //       "https://my-json-server.typicode.com/Divjason/coinlist/coins"
  //     );
  //     const json = await response.json();
  //     // 데이터 많으면 슬라이스써야하는데 이건 가상데이터라 사실 필요없긴함
  //     setCoins(json.slice(0, 30));
  //     setLoading(false);
  //   })();
  // }, []);

  // 유즈쿼리에 쿼리키값, 쿼리함수 필요
  const { isLoading, data } = useQuery<CoinInterface[]>({
    queryKey: ["allCoins"],
    queryFn: fetchCoins,
  });

  return (
    <Container>
      <Header>
        <Title>Coins</Title>
      </Header>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <CoinList>
          {data?.map((coin) => (
            // 이렇게 링크에 값을 넣어서 보낼수있다-  프랍스는 아님 즉 여기선 파라미터 값으로도 값을 보내기 링크에 스테이트 두가지 방식으로 다 보낸거임
            <Link key={coin.id} to={`/${coin.id}`} state={`${coin.name}`}>
              <Coin>
                Rank : {coin.rank}
                <Img
                  // src={`https://cryptoicon-api.pages.dev/api/icon/${coin.symbol.toLowerCase()}`}
                  src={`https://cryptocurrencyliveprices.com/img/${coin.id}.png`}
                  alt={coin.id}
                />
                {coin.name} &rarr; {coin.name} Detail Information
              </Coin>
            </Link>
          ))}
        </CoinList>
      )}
    </Container>
  );
};

export default Coins;

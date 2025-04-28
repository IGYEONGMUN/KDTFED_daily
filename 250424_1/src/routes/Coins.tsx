import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { fetchCoins } from "../api";
import { Helmet } from "react-helmet";

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

const Loader = styled.div`
  font-size: 22px;
  color: ${({ theme }) => theme.accentColor};
`;

const CoinList = styled.ul`
  width: 760px;
  height: 500px;
`;

const Coin = styled.li`
  width: 100%;
  background: ${({ theme }) => theme.textColor};
  margin-bottom: 10px;
  color: ${({ theme }) => theme.bgColor};
  padding: 20px;
  border-radius: 8px;
  font-size: 2rem;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  transition: color 0.3s;
  &:hover {
    color: ${({ theme }) => theme.accentColor};
  }
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.accentColor};
`;

const Img = styled.img`
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
  // const [coins, setCoins] = useState<CoinInterface[]>([]);
  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   (async () => {
  //     const response = await (
  //       await fetch(
  //         "https://my-json-server.typicode.com/Divjason/coinlist/coins"
  //       )
  //     ).json();
  //     setCoins(response.slice(0, 30));
  //     setLoading(false);
  //   })();
  // }, []);
  // console.log(coins);
  const { isLoading, data } = useQuery<CoinInterface[]>({
    queryKey: ["allCoins"],
    queryFn: fetchCoins,
  });
  return (
    <Container>
      <Helmet>
        <title>Coins List</title>
      </Helmet>
      <Header>
        <Title>Coins</Title>
      </Header>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <CoinList>
          {data?.map((coin) => (
            <Link key={coin.id} to={`/${coin.id}`} state={`${coin.name}`}>
              <Coin>
                🏅Now Rank🏅 : {coin.rank}
                <Img
                  src={`https://cryptocurrencyliveprices.com/img/${coin.id}.png`}
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

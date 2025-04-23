import {
  useParams,
  useLocation,
  Link,
  Outlet,
  useMatch,
} from "react-router-dom";
import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import { fetchCoinInfo, fetchCoinPrice } from "../api";

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

const Overview = styled.div`
  width: 600px;
  color: ${({ theme }) => theme.bgColor};
`;

const OverviewItem = styled.div`
  background: ${({ theme }) => theme.textColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin: 10px;
  padding: 10px 20px;
  border-radius: 10px;
  span:first-child {
    font-size: 2rem;
    font-weight: bold;
    color: ${({ theme }) => theme.accentColor};
    text-transform: uppercase;
    text-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  }
`;

const Description = styled.div`
  width: 600px;
  padding: 10px 20px;
  border-radius: 8px;
  background: ${({ theme }) => theme.accentColor};
  font-size: 1.8rem;
  line-height: 130%;
  color: ${({ theme }) => theme.textColor};
`;

const Tabs = styled.div`
  width: 600px;
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
`;

// 여기서 이즈액티브 타입선언해줌
const Tab = styled.span<IsActive>`
  flex: 1;
  text-align: center;
  font-size: 2.3rem;
  margin-top: 10px;
  /* 이즈액티브 프랍스 받음 */
  background: ${({ isActive, theme }) =>
    isActive ? theme.accentColor : theme.textColor};
  color: ${({ isActive, theme }) =>
    isActive ? theme.textColor : theme.accentColor};
  padding: 8px 0;
  border-radius: 10px;
  transition: all 0.3s;
`;

// 이즈액티브 받을 준비 안되어있어서 여기서 정의해주는거임 / 문법 / 프랍스 형식으로 줘야되니까 인터페이스로 정의
interface IsActive {
  isActive: boolean;
}

const Loader = styled.div`
  font-size: 22px;
  color: ${({ theme }) => theme.textColor};
`;

interface IRouteParams {
  coinId: string;
}

interface ILocationState {
  state: string;
}

interface InfoData {
  // 개발자도구에서Object.keys로 키값 찾아온다음에 조인으로 합친후 가져온거임 쉬프트 알트 i도 사용, 알트 d도 사용
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

interface PriceData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      ath_date: string;
      ath_price: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_1h: number;
      percent_change_1y: number;
      percent_change_6h: number;
      percent_change_7d: number;
      percent_change_12h: number;
      percent_change_15m: number;
      percent_change_24h: number;
      percent_change_30d: number;
      percent_change_30m: number;
      percent_from_price_ath: number;
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
    };
  };
}

const Coin = () => {
  // 현재 코인아이디 객체 안에 타입은 스트링이거나 언디파인드임 근데 둘다 적용해봐도 안됨 -> 오류메세지 확인해보니 애니타입도 넣어야 한다고함
  // const [loading, setLoading] = useState(true);
  const { coinId } = useParams<IRouteParams | any>();
  // 링크를 거치지 않고 유즈로케이션 값으로 타이틀을 설정하려고 하면 문제가생김 ex 각각 비트코인을 즐겨찾기 해놓고 그 사이트를 다시 들어가면 타이틀 오류나기때문
  const { state } = useLocation() as ILocationState;
  // const [info, setInfo] = useState<InfoData>();
  // const [priceInfo, setPriceInfo] = useState<PriceData>();
  // 유즈매치로 불러온 객체의 end값이 true면 그 페이지에 도착했구나 판단
  const priceMatch = useMatch("/:coinId/price");
  const chartMatch = useMatch("/:coinId/chart");
  // console.log(priceMatch, chartMatch);

  // useEffect(() => {
  //   // 고차함수/선언호출 같이씀
  //   (async () => {
  //     // 얘도 고차함수로 변환한거임
  //     const infoData = await (
  //       await fetch(
  //         `https://my-json-server.typicode.com/Divjason/coinlist/coins/${coinId}`
  //       )
  //     ).json();
  //     const priceData = await (
  //       await fetch(
  //         `https://my-json-server.typicode.com/Divjason/coinprice/coinprice/${coinId}`
  //       )
  //     ).json();
  //     setInfo(infoData);
  //     setPriceInfo(priceData);
  //     setLoading(false);
  //   })();
  // }, [coinId]);

  const { isLoading: infoLoading, data: infoData } = useQuery<InfoData>({
    queryKey: ["coinInfo", coinId],
    queryFn: () => fetchCoinInfo(coinId),
  });

  const { isLoading: priceLoading, data: priceData } = useQuery<PriceData>({
    queryKey: ["coinPrice", coinId],
    queryFn: () => fetchCoinPrice(coinId),
  });

  const loading = infoLoading || priceLoading;

  return (
    <Container>
      <Header>
        {/* 그래서 삼항조건 연산자로 */}
        <Link to={"/"}>
          <Title>{state ? state : loading ? "Loading..." : coinId}</Title>
        </Link>
      </Header>
      {loading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <Overview>
            <OverviewItem>
              <span>Rank</span>
              <span>{infoData?.rank}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Symbol</span>
              <span>{infoData?.symbol}</span>
            </OverviewItem>
            <OverviewItem>
              <span>isActive</span>
              <span>{infoData?.is_active ? "Yes" : "No"}</span>
            </OverviewItem>
          </Overview>
          <Description>
            Information of {infoData?.type} : Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Provident magni soluta at tempora
            magnam dolor fugiat adipisci veniam natus quam officia eligendi
            praesentium harum aperiam neque sequi incidunt, maxime
            suscipit!Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Provident magni soluta at tempora magnam dolor fugiat adipisci
            veniam natus quam officia eligendi praesentium harum aperiam neque
            sequi incidunt, maxime suscipit!Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Provident magni soluta at tempora
            magnam dolor fugiat adipisci veniam natus quam officia eligendi
            praesentium harum aperiam neque sequi incidunt, maxime
            suscipit!Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Provident magni soluta at tempora magnam dolor fugiat adipisci
            veniam natus quam officia eligendi praesentium harum aperiam neque
            sequi incidunt, maxime suscipit!
          </Description>
          <Overview>
            <OverviewItem>
              <span>Total Supply</span>
              <span>{priceData?.total_supply}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Max Supply</span>
              <span>{priceData?.max_supply}</span>
            </OverviewItem>
          </Overview>
          <Tabs>
            {/* 탭 컴포넌트는 이즈액티브 받을 준비 안돼있음 위에서 정의해주고 스타일컴포넌트에 선언해줌 */}
            <Tab isActive={chartMatch !== null}>
              <Link to={`/${coinId}/chart`}>Chart</Link>
            </Tab>
            <Tab isActive={priceMatch !== null}>
              <Link to={`/${coinId}/price`}>Price</Link>
            </Tab>
          </Tabs>
        </>
      )}
      {/* 위에있는 요소는 공통 / 아래쪽 아웃렛으로 자식요소취급해줌 */}
      <Outlet />
    </Container>
  );
};

export default Coin;

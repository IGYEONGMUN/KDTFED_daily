// 무언가 처리하기 위한 함수 모아놓는곳임

// function Example() {
//   const { isPending, error, data } = useQuery({
//     queryKey: ['repoData'],
//     queryFn: () =>
//       fetch('https://api.github.com/repos/TanStack/query').then((res) =>
//         res.json(),
//       ),
// 공식문서 보니까 이런게 있음queryFn

const BASE_URL = "https://my-json-server.typicode.com/Divjason";

export const fetchCoins = () => {
  return fetch(`${BASE_URL}/coinlist/coins`).then((res) => res.json());
};

export const fetchCoinInfo = (coinId: string | undefined) => {
  return fetch(`${BASE_URL}/coinlist/coins/${coinId}`).then((res) =>
    res.json()
  );
};
export const fetchCoinPrice = (coinId: string | undefined) => {
  return fetch(`${BASE_URL}/coinprice/coinprice/${coinId}`).then((res) =>
    res.json()
  );
};

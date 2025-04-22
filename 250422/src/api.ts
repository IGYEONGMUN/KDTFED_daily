// 무언가 처리하기 위한 함수 모아놓는곳임

// function Example() {
//   const { isPending, error, data } = useQuery({
//     queryKey: ['repoData'],
//     queryFn: () =>
//       fetch('https://api.github.com/repos/TanStack/query').then((res) =>
//         res.json(),
//       ),
// 공식문서 보니까 이런게 있음queryFn

export const fetchCoins = () => {
  return fetch(
    "https://my-json-server.typicode.com/Divjason/coinlist/coins"
  ).then((res) => res.json());
};

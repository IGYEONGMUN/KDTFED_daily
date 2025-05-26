import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4000/",
  // 받아온 값, 캐시값으로 사용함
  cache: new InMemoryCache(),
});

// client.query({
//   query: gql`
//     {
//       allMovies {
//         title
//       }
//     }
//   `,
// });

export default client;

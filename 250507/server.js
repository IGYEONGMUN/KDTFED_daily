import { ApolloServer, gql } from "apollo-server";

// gql문법임 타입정의하는거임 루트타입(Query) 먼저 정의해줘야함
// Query안에 바로 값들의 타입을 정의하는것이 아니라 타입을 따로 정의함
// GET /
// mutation - POST방식으로 데이터 처리하려고 함 / mutate-변화시키다
// !-필수값으로 씀
// 클라이언트 요청에 따라서 뭘 하겠다/ 타입에 매칭되어지는 값 - 리졸버즈 안에
const resolvers = {
  Query: {
    allMovies() {
      // restapi방식으로 가져온 값을 gql방식으로 값을 찾아오는 예시
      // 여기서는 필요없는 값까지 오버패칭해서 가져오는데 gql에서 필요한 값들만 찾아서 쓸 수 있음
      return fetch("https://yts.mx/api/v2/list_movies.json")
        .then((res) => res.json())
        .then((json) => json.data.movies);
    },
    movie(root, { id }) {
      return fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        .then((res) => res.json())
        .then((json) => json.data.movie);
    },

    allUsers() {
      return users;
    },
    allTweets() {
      return tweets;
    },

    // root첫번째 인자값 필요함 / 비워놓음
    tweet(root, { id }) {
      return tweets.find((tweet) => tweet.id === id);
    },
  },
  Mutation: {
    // 첫번째 인자값비워둠/ 나중에 사용할거임

    postTweet(root, { text, userId }) {
      // 이 객체를 tweets  배열안에 마지막값으로 넣어줌/ 즉 이값을 이용해서 값 변경
      const newTweet = {
        id: tweets.length + 1,
        text,
      };
      tweets.push(newTweet);
      return newTweet;
    },
    deleteTweet(root, { id }) {
      const tweet = tweets.find((tweet) => tweet.id === id);
      if (!tweet) return false;
      tweets = tweets.filter((tweet) => tweet.id !== id);
      return true;
    },
  },
  User: {
    // fullName(root) {
    //   console.log(root);
    //   return "hello";
    // },
    fullName({ firstName, lastName }) {
      return `${firstName}${lastName}`;
    },
  },
  Tweet: {
    // 루트이용해서 값 구조분해할당으로 가져오는거임
    author({ userId }) {
      const result = users.find((user) => user.id === userId);
      if (!result) {
        console.log("자료가없음");
        return null;
      }
      return result;
    },
  },
};
// 변경가능하게 let
let tweets = [
  {
    id: "1",
    text: "first",
    userId: "2",
  },
  {
    id: "2",
    text: "second",
    userId: "1",
  },
];

let users = [
  {
    id: "1",
    firstName: "dd",
    lastName: "ff",
  },
  {
    id: "2",
    firstName: "illl",
    lastName: "mmmmm",
  },
];

const typeDefs = gql`
  type User {
    id: ID!
    firstName: String!
    lastName: String!
    """
    Is the sum of firstName + lastName as a string
    """
    fullName: String!
  }

  """
  Tweet Object represent a resource for a Tweet
  """
  type Tweet {
    id: ID!
    text: String!
    author: User
  }

  type Query {
    allMovies: [Movie!]!
    movie(id: String!): Movie
    allUsers: [User!]!
    allTweets: [Tweet!]!
    tweet(id: ID!): Tweet
  }
  type Mutation {
    postTweet(text: String, userId: ID): Tweet
    """
    Delete a Tweet if found, else returns false
    """
    deleteTweet(id: ID): Boolean
  }

  type Movie {
    id: Int!
    url: String!
    imdb_code: String!
    title: String!
    title_english: String!
    title_long: String!
    slug: String!
    year: Int!
    rating: Float!
    runtime: Float!
    genres: [String]!
    summary: String
    description_full: String!
    synopsis: String
    yt_trailer_code: String!
    language: String!
    mpa_rating: String!
    background_image: String!
    background_image_original: String!
    small_cover_image: String!
    medium_cover_image: String!
    large_cover_image: String!
    state: String!
  }
`;

const server = new ApolloServer({ typeDefs, resolvers });
// 서버가 클라이언트의 요청을 듣는거임
server.listen().then(({ url }) => {
  console.log(`Running ${url}`);
});

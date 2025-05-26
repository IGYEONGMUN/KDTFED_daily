import React, { useState, useEffect } from "react";
// 이 훅을 이용해서 데이터 가져올거임 main.jsx에서 프로바이더로 전달한 값을
import { useApolloClient, gql } from "@apollo/client";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const client = useApolloClient();
  useEffect(() => {
    client
      .query({
        query: gql`
          {
            allMovies {
              id
              title
            }
          }
        `,
      })
      .then((res) => setMovies(res.data.allMovies));
  }, [client]);

  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>{movie.title}</li>
      ))}
    </ul>
  );
};

export default Home;

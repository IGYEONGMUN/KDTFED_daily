// 너무 번잡스러움 / 인기가져오고, 실시간 가져오고 .. -> axios
// const getMovies = () => {
//   // 리턴문안의 값이 미들웨어 거치고- 리듀서로
//   return async (dispatch) => {
//     // const url = "https://api.themoviedb.org/3/movie/now_playing?language=ko-KR&page=1"
//     const url =
//       "https://api.themoviedb.org/3/movie/now_playing?api_key=c076fbd5e040ac1228729fad1a17245f&language=ko-KR&page=1";
//     const response = await fetch(url);
//     const data = await response.json();
//     dispatch({ type: "nowPlaying", payload: data });
//   };
// };

// export const movies = { getMovies };

import api from "../api";
const API_KEY = import.meta.env.VITE_API_KEY;

const getMovies = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: "GET_MOVIES_REQUEST",
        loading: true,
      });

      const nowPlayingMovieApi = api.get(
        `now_playing?api_key=${API_KEY}&language=ko-KR&page=1`
      );
      const topRatedMovieApi = api.get(
        `top_rated?api_key=${API_KEY}&language=ko-KR&page=1`
      );
      const upComingMovieApi = api.get(
        `upcoming?api_key=${API_KEY}&language=ko-KR&page=1`
      );

      const [nowPlayingMovie, topRatedMovie, upComingMovie] = await Promise.all(
        [nowPlayingMovieApi, topRatedMovieApi, upComingMovieApi]
      );

      dispatch({
        type: "GET_MOVIES_SUCCESS",
        // 객체형태로 리듀서에 전달
        payload: {
          nowPlayingMovie: nowPlayingMovie.data,
          topRatedMovie: topRatedMovie.data,
          upComingMovie: upComingMovie.data,
          loading: false,
        },
      });
    } catch (error) {
      dispatch({
        type: "GET_MOVIES_FAIL",
        loading: false,
      });
    }
  };
};
// 반환값을 이용
export const movieAction = { getMovies };

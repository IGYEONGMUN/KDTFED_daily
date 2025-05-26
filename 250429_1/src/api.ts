const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_PATH = "https://api.themoviedb.org/3";

export interface IMovie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface IGetMovieResult {
  dates: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}

// 리액트쿼리 쓸때 queryFn 써야되니까 여기서 함수정의해줌
export const getMovies = () => {
  return fetch(
    `${BASE_PATH}/movie/now_playing?api_key=${API_KEY}&language=ko-KR&page=1&region=kr`
  ).then((res) => res.json());
};

// 키워드가 존재하지 않을수도 있기 때문에 - null
export const searchContents = (keyword: string | null) => {
  return fetch(
    `${BASE_PATH}/search/movie?api_key=${API_KEY}&query=${keyword}&include_adult=false&language=ko-KR&page=1`
  ).then((res) => res.json());
};

export const searchGenres = () => {
  return fetch(
    `${BASE_PATH}/genre/movie/list?api_key=${API_KEY}&language=ko-kr`
  ).then((res) => res.json());
};

export const getReviews = (movieId: number | undefined) => {
  return fetch(
    `${BASE_PATH}/movie/${movieId}/reviews?api_key=${API_KEY}&page=1`
  ).then((res) => res.json());
};

export const getVideos = (movieId: number | undefined) => {
  return fetch(
    `${BASE_PATH}/movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`
  ).then((res) => res.json());
};

import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import YouTube from "react-youtube";
import Pagination from "react-js-pagination";
import styled from "styled-components";
import {
  searchContents,
  IGetMovieResult,
  searchGenres,
  getReviews,
  getVideos,
  getMovies,
} from "../api";
import { makeImagePath } from "../utils";
import { style } from "framer-motion/client";

const Container = styled.div`
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.white.darker};
  padding: 60px 30px 0;
`;

const Loader = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SearchBox = styled.div`
  width: 100%;
  margin-bottom: 100px;
`;

const MovieSection = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
`;

const MovieImg = styled.img`
  width: 50%;
  height: auto;
  object-fit: cover;
  border-radius: 10px;
`;

const ReadyImg = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MovieInfo = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const MovieTitle = styled.h4`
  font-size: 3rem;
  color: ${({ theme }) => theme.red};
`;

const MovieOverView = styled.p`
  font-size: 1.7rem;
  line-height: 1.5;
`;

const MovieDate = styled.div``;

const MovieValue = styled.div``;

const MovieRate = styled.div``;

const RateNumbers = styled.div``;

const ReviewSection = styled.div`
  margin-top: 30px;
  padding: 20px;
  border-radius: 10px;
  background: ${({ theme }) => theme.white.lighter};
  color: ${({ theme }) => theme.black.darker};
  li {
    margin: 10px 0;
    padding: 10px;
  }
`;

const ReviewTitle = styled.span`
  display: inline-block;
  margin-top: 10px;
  font-size: 1.6rem;
  line-height: 1.3;
`;

const GenreSection = styled.div``;

const Tabs = styled.div``;

const Tab = styled.span``;

const StyledPagination = styled.div`
  width: 100%;
  ul {
    display: flex;
    justify-content: center;
    gap: 10px;
    li {
      a {
        display: inline-block;
        font-size: 2.2rem;
        padding: 20px 25px;
        border-radius: 50%;
        transition: all 0.3s;
        &:hover {
          background: ${({ theme }) => theme.white.darker};
          color: ${({ theme }) => theme.black.darker};
        }
      }
    }
  }
`;

const YoutubeContent = styled.div`
  margin-top: 40px;
`;

interface Obj {
  id: number;
  name: string;
}

interface ReviewContents {
  author: string;
  author_details: {
    name: string;
    username: string;
    avatar_path: string;
    rating: number;
  };
  content: string;
  created_at: string;
  id: string;
  updated_at: string;
  url: string;
}

interface ContentState {
  [key: number]: string[];
}

const Search = () => {
  const [videos, setVideos] = useState<ContentState>({});
  // search: "?keyword=범죄" 값 이렇게 들어옴
  const { search } = useLocation();
  // const keyword = search.split("=")[1]; 이렇게 안하고 유알엘서치파람스 쓰면됨
  const keyword = new URLSearchParams(search).get("keyword");

  const { data: movieData, isLoading: movieLoading } =
    useQuery<IGetMovieResult>({
      // 이게 정석문법임
      queryKey: ["searchContents", keyword],
      queryFn: () => searchContents(keyword),
    });

  const { data: genreData, isLoading: genreLoading } = useQuery({
    queryKey: ["genres"],
    queryFn: searchGenres,
  });

  const ids = movieData?.results.map((movie) => movie.id);

  const { data: reviewData, isLoading: reviewLoading } = useQuery({
    queryKey: ["reviews", ids],
    queryFn: () =>
      ids ? Promise.all(ids.map((id) => getReviews(id))) : Promise.resolve([]),
  });

  const { data: videoData, isLoading: videoLoading } = useQuery({
    queryKey: ["videos", ids],
    queryFn: () =>
      ids ? Promise.all(ids.map((id) => getVideos(id))) : Promise.resolve([]),
  });

  // 여기 값을 담아서 밑에서 뿌려줘야됨 - 유즈스테이트 필요함
  useEffect(() => {
    if (movieData && videoData) {
      // 검색창 안의 영화들의 result값들을 찾아야하니까 한번 더 파고 들어가는거임 겟 비디오는 에이피아이에서 가져온 데이터들임 그 값들을 셋비디오로 추가시켜준거임
      movieData.results.forEach((movie) => {
        getVideos(movie.id).then((data) => {
          if (data?.results) {
            const videoIds = data.results.map((video: any) => video.key);
            // 객체를 반환
            setVideos((prev) => ({
              ...prev,
              [movie.id]: videoIds,
            }));
          }
        });
      });
    }
  }, [movieData, videoData]);

  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage, setMoviesPerPage] = useState(4);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies =
    movieData?.results.slice(indexOfFirstMovie, indexOfLastMovie) || [];

  return (
    <Container>
      {movieLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          {currentMovies.map((movie, index) => (
            <SearchBox key={movie.id}>
              <MovieSection>
                {movie.backdrop_path ? (
                  <MovieImg src={makeImagePath(movie.backdrop_path)} />
                ) : (
                  <ReadyImg>Ready for Image...</ReadyImg>
                )}

                <MovieInfo>
                  <MovieTitle>{movie.original_title}</MovieTitle>
                  <MovieOverView>{movie.overview}</MovieOverView>
                  <MovieDate>
                    <span>Release : {movie.release_date}</span>
                  </MovieDate>
                  <MovieRate>
                    <span>Rate : {movie.vote_average.toFixed(2)}</span>
                  </MovieRate>
                  <RateNumbers>
                    <span>
                      Members : {movie.vote_count.toLocaleString("ko-kr")}
                    </span>
                  </RateNumbers>
                  <MovieValue>{movie.adult ? "18+" : "ALL"}</MovieValue>
                  <GenreSection>
                    {movie.genre_ids
                      .map(
                        (id) =>
                          genreData.genres.find((it: Obj) => it.id === id).name
                      )
                      .join(", ")}
                  </GenreSection>
                </MovieInfo>
              </MovieSection>
              <ReviewSection>
                <h3>Review</h3>
                {reviewLoading ? (
                  <div>Loading Review...</div>
                ) : (
                  <ul>
                    {/* 리뷰데이터 있는지 조건확인*/}
                    {reviewData && reviewData[index]?.results?.length > 0 ? (
                      reviewData[index].results.map(
                        (review: ReviewContents) => (
                          <li key={review.id}>
                            <span>{review.author}</span>
                            <ReviewTitle>{review.content}</ReviewTitle>
                          </li>
                        )
                      )
                    ) : (
                      <li>Not yet Reviews</li>
                    )}
                  </ul>
                )}
              </ReviewSection>
              <YoutubeContent>
                {videos[movie.id]?.length > 0 ? (
                  <YouTube
                    videoId={videos[movie.id][0]}
                    opts={{
                      width: "50%",
                      height: "500px",
                      playerVars: {
                        autoplay: 0,
                        modestbranding: 1,
                        loop: 0,
                        playlist: videos[movie.id][0],
                      },
                    }}
                  />
                ) : (
                  <div>No Available</div>
                )}
              </YoutubeContent>
            </SearchBox>
          ))}
          <StyledPagination>
            <Pagination
              onChange={handlePageChange}
              activePage={currentPage}
              itemsCountPerPage={moviesPerPage}
              totalItemsCount={movieData?.results.length || 0}
              pageRangeDisplayed={4}
            />
          </StyledPagination>
        </>
      )}
      <Outlet />
    </Container>
  );
};

export default Search;

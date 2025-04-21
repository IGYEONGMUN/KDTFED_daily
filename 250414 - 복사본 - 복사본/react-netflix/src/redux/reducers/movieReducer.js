let initialState = {
  nowPlayingMovie: {},
  topRatedMovie: {},
  upComingMovie: {},
  genresMovie: [],
  loading: true,
};
const movieReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "GET_MOVIES_REQUEST":
      //  로딩이 트루일때만 로딩스피너
      return { ...state, loading: true };
    case "GET_MOVIES_SUCCESS":
      return {
        ...state,
        nowPlayingMovie: payload.nowPlayingMovie,
        topRatedMovie: payload.topRatedMovie,
        upComingMovie: payload.upComingMovie,
        genresMovie: payload.genresMovie,
        loading: false,
      };
    case "GET_MOVIES_FAIL":
      return { ...state, loading: false };
    default:
      return { ...state };
  }
};

export default movieReducer;

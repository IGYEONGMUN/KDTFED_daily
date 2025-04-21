import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { movieAction } from "../redux/actions/movieAction";

const Home = () => {
  const dispatch = useDispatch();
  // 컴바인되어진요소를 거쳐서 찾아올거임
  const data = useSelector((state) => state.movie);
  console.log(data);
  useEffect(() => {
    dispatch(movieAction.getMovies());
  }, []);
  return;
};

export default Home;

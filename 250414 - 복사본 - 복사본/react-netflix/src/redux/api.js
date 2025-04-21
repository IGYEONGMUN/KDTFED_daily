// 에크마스크립트방식/ 커먼js방식아님
import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  // 커스텀해도됨 -헤더스 이게 보통커스텀방식
  headers: { "Content-type": "application/json" },
});

// 인터셉터
api.interceptors.request.use(
  function (config) {
    // 요청이 전달되기 전에 작업 수행
    return config;
  },
  function (error) {
    // 요청 오류가 있는 작업 수행

    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default api;

// 커스텀훅 리액트 쿼리.jsx에 만든거 잘라서 쓴거임
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const usePostQuery = () => {
  return useQuery({
    queryKey: ["posts"],
    queryFn: () => {
      return axios.get(`http://localhost:3000/posts`);
    },

    retry: 1,

    select: (data) => {
      return data.data;
    },

    enabled: false,
  });
};

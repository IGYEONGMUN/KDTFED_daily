// 유틸리티 타입
// readonly
// Partial
// Required
// Pick
// Omit
// Exclude
interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnail: string;
}

const withThumbnailPost: Readonly<Post> = {
  title: "ㅂㅂ",
  tags: ["ss"],
  content: "ㅎㅎㅎ",
  thumbnail: "www.naver.com",
};
// withThumbnailPost.content = "jijij"; 에러

type Readonly<T> = {
  [key in typeof T]: T[key];
};

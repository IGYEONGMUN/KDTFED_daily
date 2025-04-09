// 유틸리티 타입
// readonly
// Partial
// Required
// Pick
// Omit
// Exclude
interface Post {
  title: string;
  tags: string;
  content: string;
  thumbnail: string;
}

// // 없는값 옵셔널프로퍼티로 설정안해도 자동으로 설정해줌
// const draft: Partial<Post> = {
//   title: "밥먹자",
//   content: "제육",
// };

// // 파셜이라는 유틸리티 타입을 선언형으로하면
// type Partial01<T> = {
//   [key in keyof T]?: T[key];
// };

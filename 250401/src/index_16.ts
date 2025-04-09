// 유틸리티 타입
// readonly
// Partial
// Required
// Pick
// Omit
// Exclude
// interface Post {
//   title: string;
//   tags: string[];
//   content: string;
//   thumbnail?: string;
// }
// const withThumbnailPost: Required<Post> = {
//   title: "ㅂㅂ",
//   tags: ["ss"],
//   contents: "ㅎㅎㅎ",
//   // thumbnail: "www.naver.com",
// };

// -? -> 물음표를 쓰지 않겟다 -> Required 가 되겠다
// type Required<T> = {
//   [key in keyof T]-?: T[key];
// };

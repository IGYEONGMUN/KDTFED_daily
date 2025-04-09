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
  thumbnailURL: string;
}
// const legacyPost: Pick<Post, "title" | "content"> = {
//   title: "ddd",
//   content: "gghh",
// };

// type Pick<T, K extends keyof T> = {
//   [key in K]: T[key];
// };

const noTitlePost: Omit<Post, "title"> = {
  content: "",
  tags: [],
  thumbnailURL: "string",
};

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const post = {
    title: "글제목",
    content: "게시글 본문",
    author: {
        id: 1,
        name: "ddd",
        age: 20,
    },
};
// indexed access 타입
// post["author"]; 이런식으로 객체안의 값을 찾아오는 방식
// const authorKey = "author"이렇게 하고 대괄호 안에 authorKey 넣는 방식 안됨
const printAuthor = (author) => {
    console.log(`${author.id} - ${author.name}`);
};

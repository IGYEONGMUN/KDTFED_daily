"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 프라미스라는 프로토타입은 class객체 - 클래스통해서 만들어진 프로토타입도 타입으로써 활용가능
const fetchPost = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                id: 1,
                title: "게시글제목",
                content: "게시글본문",
            });
        }, 3000);
    });
};

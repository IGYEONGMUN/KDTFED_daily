"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// const login = (user: User) => {
//   if ("kickcount" in user) {
//     console.log(`${user.name}님 현재까지 ${user.kickcount}명을 추가함`);
//   } else if ("point" in user) {
//     console.log(`${user.name}님 현재까지 ${user.point}모음`);
//   } else if ("visitCount" in user)
//     console.log(`${user.name}님 현재까지 ${user.visitCount}번 오심`);
// };
const login = (user) => {
    switch (user.tag) {
        case "ADMIN": {
            console.log(`${user.name}님 현재까지 ${user.kickcount}명을 추가함`);
            break;
        }
        case "MEMBER": {
            console.log(`${user.name}님 현재까지 ${user.point}모음`);
            break;
        }
        case "GUEST": {
            console.log(`${user.name}님 현재까지 ${user.visitCount}번 오심`);
            break;
        }
    }
};
const loading = {
    state: "LOADING",
};
const failed = {
    state: "FAILED",
    error: {
        message: "오류 발생 원인은 ...",
    },
};
const success = {
    state: "SUCCESS",
    response: {
        data: "data ...",
    },
};
const processResult = (task) => {
    switch (task.state) {
        case "LOADING": {
            console.log("로딩중");
            break;
        }
        case "FAILED": {
            console.log(`에러발생:${task.error?.message}`);
            break;
        }
        case "SUCCESS": {
            console.log(`성공 : ${task.response}`);
            break;
        }
    }
};

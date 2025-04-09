"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// IUSer가 스쿨인지 스킬인지 모름-> 제네릭형식으로
const goToSchool = (user) => {
    // if (user.profile.type !== "student") {
    //   console.log("잘못 오셨습니다");
    //   return;
    // }
    const school = user.profile.school;
    console.log(`${school} 등교완료`);
};
const developerUser = {
    name: "ddd",
    profile: {
        type: "developer",
        skill: "typescript",
    },
};
const studentUser = {
    name: "ddd",
    profile: {
        type: "student",
        school: "EZEN",
    },
};
goToSchool(studentUser);

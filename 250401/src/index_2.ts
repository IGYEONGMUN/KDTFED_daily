import { profile } from "console";

interface IStudent {
  type: "student";
  school: string;
}

interface IDeveloper {
  type: "developer";
  skill: string;
}

// interface IUser<T> {
//   name: string;
//   profile: IStudent | IDeveloper;
// }

interface IUser<T> {
  name: string;
  profile: T;
}

// IUSer가 스쿨인지 스킬인지 모름-> 제네릭형식으로
const goToSchool = (user: IUser<IStudent>) => {
  // if (user.profile.type !== "student") {
  //   console.log("잘못 오셨습니다");
  //   return;
  // }
  const school = user.profile.school;
  console.log(`${school} 등교완료`);
};

const developerUser: IUser<IDeveloper> = {
  name: "ddd",
  profile: {
    type: "developer",
    skill: "typescript",
  },
};

const studentUser: IUser<IStudent> = {
  name: "ddd",
  profile: {
    type: "student",
    school: "EZEN",
  },
};

goToSchool(studentUser);

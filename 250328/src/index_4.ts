type Admin = {
  tag: "ADMIN";
  name: string;
  kickcount: number;
};
type Member = {
  tag: "MEMBER";
  name: string;
  point: number;
};
type Guest = {
  tag: "GUEST";
  name: string;
  visitCount: number;
};

type User = Admin | Member | Guest;

// const login = (user: User) => {
//   if ("kickcount" in user) {
//     console.log(`${user.name}님 현재까지 ${user.kickcount}명을 추가함`);
//   } else if ("point" in user) {
//     console.log(`${user.name}님 현재까지 ${user.point}모음`);
//   } else if ("visitCount" in user)
//     console.log(`${user.name}님 현재까지 ${user.visitCount}번 오심`);
// };

const login = (user: User) => {
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

type AsyncTask = {
  state: "LOADING" | "FAILED" | "SUCCESS";
  // 교집합 - 유니온타입
  // 옵셔널 프로퍼티
  error?: {
    message: string;
  };
  response?: {
    data: string;
  };
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

const processResult = (task: AsyncTask) => {
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

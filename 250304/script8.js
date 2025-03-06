const pizza = () => {};

return new Promise((resolve, reject) => {
  if (true) {
    resolve("피자를 주문합니다");
  } else {
    reject("피자를 주문하지 않습니다.");
  }
});

const step1 = (message) => {
  console.log(message);
  return new Promise((resolve, reject) => {
    if (message) {
      setTimeout(() => {
        resolve("피자도우준비");
      }, 3000);
    } else {
      reject("피자주문요청");
    }
  });
};

const step2 = (message) => {
  console.log(message);
  return new Promise((resolve, reject) => {
    if (message) {
      setTimeout(() => {
        resolve("피자토핑완료");
      }, 1000);
    } else {
      reject("피자주문요청2");
    }
  });
};

const step3 = (message) => {
  console.log(message);
  return new Promise((resolve, reject) => {
    if (message) {
      setTimeout(() => {
        resolve("피자굽기완료");
      }, 2000);
    } else {
      reject("피자주문요청3");
    }
  });
};

pizza()
  .then((result) => step1(result))
  .then((result) => step2(result))
  .then((result) => step3(result))
  .then((result) => console.log(result))
  .then(() => {
    console.log("피자완료");
  });

// const pizza = new Promise((resolve, reject) => {
//   if (false) {
//     resolve("피자주문함.");
//   } else {
//     reject("피자 주문ㄴㄴ");
//   }
// });

const start = document.querySelector(".start");

const end = document.querySelector(".end");

const order = new Promise((resolve, reject) => {
  const coffee = prompt("어떤 커피를 주문하심?", "아메리카노");
  if (coffee !== null && coffee !== "") {
    start.innerText = `${coffee}주문접수`;
    setTimeout(() => {
      resolve(coffee);
    }, 3000);
  } else {
    reject("커피 주문하셈");
  }
});

const display = (result) => {
  end.innerText = `${result}준비완료`;
  end.classList.add("active");
  start.classList.add("done");
};

const showErr = (err) => {
  console.log(err);
};
order.then(display).catch(showErr);

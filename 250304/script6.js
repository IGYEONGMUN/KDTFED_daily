const pizza = new Promise((resolve, reject) => {
  if (false) {
    resolve("피자주문함.");
  } else {
    reject("피자 주문ㄴㄴ");
  }
});

pizza.then((result) => {
  console.log(result).catch((err) => {
    console.log(err).finally(() => {
      console.log("파이널리");
    });
  });
});

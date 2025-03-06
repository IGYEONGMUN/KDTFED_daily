// let coffeeName = "";

// const addAmericano = (name) => {
//   coffeeName += `, ${name}`;
//   console.log(coffeeName);
// };

// const addMocha = (name) => {
//   coffeeName += `, ${name}`;
//   console.log(coffeeName);
//   setTimeout(addAmericano, 2000, "아메리카노");
// };

// const addLatte = (name) => {
//   coffeeName += `, ${name}`;
//   console.log(coffeeName);
//   setTimeout(addMocha, 2000, "카페모카");
// };

// const addEspresso = (name) => {
//   coffeeName += name;
//   console.log(coffeeName);
//   setTimeout(addLatte, 2000, "카페라떼");
// };

// setTimeout(addEspresso, 2000, "에스프레소");

const addCoffee = (name) => {
  return (prevName) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        let newName = prevName ? prevName + ", " + name : name;
        console.log(newName);
        resolve(newName);
      }, 2000);
    });
  };
};

addCoffee("에스프레소")()
  .then(addCoffee("카페모카"))
  .then(addCoffee("카페라떼"))
  .then(addCoffee("아메리카노"));

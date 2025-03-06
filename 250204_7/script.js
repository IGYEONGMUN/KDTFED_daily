const form = document.querySelector("form");
const userNum = document.querySelectorAll(".number");
let numArr = [];
let n = 100;
form.addEventListener("submit", (e) => {
  e.preventDefault();
  userNum.forEach((num) => {
    if (num.value < 100 && num.value >= 0) {
      numArr.push(num.value);
    }
  });
  numArr.forEach((min) => {
    if (min < n) {
      n = min;
    }
  });
  console.log(n);
});

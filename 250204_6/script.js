const numbers = document.querySelectorAll(".number");
const submit = document.querySelector("#submit");
const num = 0;

console.log(numbers);
console.log(submit);

submit.addEventListener("click", (e) => {
  numbers.forEach((e) => {
    console.log(e);
  });
});

// const button = document.querySelector("button");

// button.addEventListener("click", () => {
//   document.body.style.backgroundColor = "yellow";
// });

// document.body.addEventListener("keydown", (event) => {
//   document.querySelector(
//     "#result"
//   ).innerText = `code : ${event.code},key : ${event.key}`;
// });

// document.querySelector("#userId").addEventListener("focus", function () {
//   this.style.backgroundColor = "pink";
// });
// document.querySelector("#userId").addEventListener("blur", function () {
//   this.style.backgroundColor = "transparent";
// });

// const form = document.querySelector("form");
// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const inputText = document.querySelector("input[type='text']");
//   const word = inputText.value;
//   const count = word.length;
//   alert(`입력하신 ${word}의 글자수는 ${count}`);
// });

// const openButton = document.querySelector("#open");
// const closeButton = document.querySelector("close");
// const modalBox = document.querySelector("#modal-box");

// openButton.addEventListener("click", function () {
//   this.classList.add("btnActive");
//   modalBox.classList.add("active");
// });
// closeButton.addEventListener("click", function () {
//   openButton.classList.remove("btnActive");
//   modalBox.classList.remove("active");
// });
const box = document.querySelector("#box");
box.addEventListener("click", (e) => {
  alert(`이벤트 발생위치 : ${e.pageX}, ${e.pageY}`);
});

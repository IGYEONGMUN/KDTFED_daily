//버튼 눌르면 배경 바뀜 // 버튼눌렀을때 값부터찾자

const button = document.querySelector("#toggle_btn");
const contents = document.querySelector("#contents");

// button.addEventListener("click", () => {
//   if (!contents.classList.contains("active")) {
//     contents.classList.add("active");
//   } else {
//     contents.classList.remove("active");
//   }
// });
button.addEventListener("click", () => {
  contents.style.backgroundColor = "#000";
});

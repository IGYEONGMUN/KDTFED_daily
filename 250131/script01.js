// console.log(document.querySelector("h1"));
// console.log(document.querySelector("#profile"));
// console.log(document.querySelector(".imgSrc"));
// console.log(document.querySelectorAll(".user"));

// console.log(document.getElementById("profile"));

// console.log(document.querySelector("#desc"));
// console.log(document.querySelector("#desc").innerText);
// console.log(document.querySelector("#desc").textContent);

const title = document.querySelector("h1");
const userName = document.querySelectorAll("#desc > p")[0];
const pfImg = document.querySelector("#profile > img");
// console.log(pfImg);

// console.log(userName);
// title.onclick = () => {
//   title.innerText = "마이프로필";
// };

title.addEventListener("click", () => {
  title.innerHTML = "마이프로필";
  title.style.backgroundColor = "black";
  title.style.color = "white";
});

userName.addEventListener("click", () => {
  userName.innerHTML = "이름 : <b>태연</b>";
  pfImg.src =
    "https://image.newdaily.co.kr/site/data/img/2024/08/05/2024080500111_0.jpg";

  if (!userName.classList.contains("active")) {
    userName.classList.add("active");
  } else {
    userName.classList.remove("active");
  }
});

// console.log(document.querySelectorAll("#desc p")[0]);

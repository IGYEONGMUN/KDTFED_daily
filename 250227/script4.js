const button = document.querySelector("button");
const result = document.querySelector("#result");

function* train() {
  yield "판교역";
  yield "이매역";
  yield "삼동역";
  yield "경기광주역";
  yield "초월역";
  yield "곤지암역";
  yield "신둔도예촌역";
  yield "이천역";
  yield "부발역";
}
const gyeonggang = train();
button.addEventListener("click", () => {
  let current = gyeonggang.next();
  if (current.done !== true) {
    result.innerText = current.value;
  } else {
    result.innerText = "종점";
    button.setAttribute("disabled", "disabled");
  }
});

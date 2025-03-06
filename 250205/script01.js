const form = document.querySelector("form");
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const bookList = document.querySelector("#booklist");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (title.value === "" || author.value === "") {
    alert("정보입력하셈");
  } else {
    const liItem = document.createElement("li");
    // const spanItem = document.createElement("span");

    // liItem.append(spanItem);
    liItem.innerHTML = `${title.value} - ${author.value} <span>삭제</span>`;

    bookList.appendChild(liItem);

    title.value = "";
    author.value = "";

    const delButtons = document.querySelectorAll("span");
    delButtons.forEach(function (delButton) {
      delButton.addEventListener("click", function () {
        this.parentNode.parentNode.removeChild(this.parentNode);
      });
    });
  }
});

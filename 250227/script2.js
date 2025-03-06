const member1 = ["html", "css"];
const member2 = ["css", "js"];
const member3 = ["js", "react"];

const subjects = [...member1, ...member2, ...member3];
const resultList = new Set();
subjects.forEach((subject) => {
  resultList.add(subject);
});
console.log(resultList);

const result = document.querySelector("#result");
result.innerHTML = `<ul>
          ${[...resultList].map((subject) => `<li>${subject}</li>`).join("")}
        </ul>`;

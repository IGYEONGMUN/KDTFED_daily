const xhr = new XMLHttpRequest();
xhr.open("GET", "name.json", true);
xhr.send();

xhr.addEventListener("readystatechange", () => {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const student = JSON.parse(xhr.responseText);
    const result = document.querySelector("#result");
    result.innerHTML = `${student.name}학생은 ${student.grade}학년입니다`;
  }
});

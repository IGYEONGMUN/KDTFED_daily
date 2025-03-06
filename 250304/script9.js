const result = document.querySelector("#result");

fetch("student.json")
  .then((response) => response.json())
  .then((result) => {})
  .catch((err) => console.log(err));

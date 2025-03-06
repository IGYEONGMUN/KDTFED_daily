const students = ["Park", "Kim", "Lee"];

// for (let i = 0; i < students.length; i++) {
//   console.log(students[i]);
// }

for (let i = 1; i <= 100; i++) {
  if (i % 5 === 0 && i % 7 !== 0) {
    document.write("<p class='red'>" + i + "</p>");
  } else if (i % 5 !== 0 && i % 7 === 0) {
    document.write("<p class='green'>" + i + "</p>");
  } else if (i % 5 === 0 && i % 7 === 0) {
    document.write("<p class='aqua'>" + i + "</p>");
  }
}

const reds = document.querySelectorAll(".red");
reds.forEach((red) => {
  red.style.color = "red";
});

const greens = document.querySelectorAll(".green");
greens.forEach((green) => {
  green.style.color = "green";
});
const aquas = document.querySelectorAll(".aqua");
aquas.forEach((aqua) => {
  aqua.style.color = "aqua";
});

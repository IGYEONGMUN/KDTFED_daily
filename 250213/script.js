const radius = prompt("반지름크기");
const result = document.querySelector("#result");

const area = (r) => {
  return Math.PI * r * r;
};

const circum = (r) => {
  return 2 * Math.PI * r;
};

area(radius);
circum(radius);
result.innerText = `반지름 : ${radius},
원의넓이 : ${area(radius).toFixed(3)},
원둘레 : ${circum(radius).toFixed(3)}`;

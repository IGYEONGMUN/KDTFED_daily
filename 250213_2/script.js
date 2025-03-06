const today = new Date();

const year = today.getFullYear();
const month = today.getMonth() + 1;
const date = today.getDate();
const hour = today.getHours();
const minute = today.getMinutes();

console.log(hour);
const currentText = document.querySelector("#current");
currentText.innerText = `${year}년 ${month}월 ${date}일 ${hour}시 ${minute}분 현재`;

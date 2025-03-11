const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

// ctx.font = "60px Arial";
// ctx.fillText("HELLO", 50, 70);
// ctx.strokeText("HELLO", 50, 150);

// ctx.font = "italic 60px Arial";
// ctx.fillText("JavaScript", 50, 70);

// ctx.font = "Bold 60px Arial";
// ctx.fillText("TypeScript", 50, 150);

// const img = new Image();
// img.addEventListener("load", () => {
//   ctx.drawImage(img, 100, 50, 200, 350, 160, 100, 200, 350);
// });
// img.src = "./images/cat.jpg";

// const img = new Image();
// img.onload = () => {
//   ctx.drawImage(img, 0, 0);
// };

// img.src = "./images/bird.jpg";

// ctx.beginPath();
// ctx.arc(400, 200, 150, 0, Math.PI * 2, false);
// ctx.clip();

// ctx.globalAlpha = 0.3;

// ctx.fillStyle = "rgb(255,0,0)";
// ctx.fillRect(50, 50, 100, 50);

// ctx.fillStyle = "rgb(0,0,255)";
// ctx.fillRect(150, 50, 100, 50);

// ctx.fillStyle = "rgb(0,255,0)";
// ctx.fillRect(250, 50, 100, 50);

// ctx.fillStyle = "rgba(0,0,255,0.2)";
// ctx.fillRect(50, 50, 60, 50);

// const linGrad = ctx.createLinearGradient(0, 0, 0, 200);
// linGrad.addColorStop(0, "#000");
// linGrad.addColorStop(0.6, "#fff");
// linGrad.addColorStop(1, "#eee");

// ctx.fillStyle = linGrad;
// ctx.fillRect(0, 0, 100, 200);

ctx.shadowColor = "#ccc";
ctx.shadowOffsetX = 15;
ctx.shadowOffsetY = 10;
ctx.shadowBlur = 10;
ctx.shadowColor = "red";

const radGrad = ctx.createRadialGradient(55, 60, 10, 80, 90, 100);
radGrad.addColorStop(0, "#fff");
radGrad.addColorStop(0.4, "#ff0");
radGrad.addColorStop(1, "#0ff");

ctx.fillStyle = radGrad;
ctx.arc(100, 100, 80, 0, Math.PI * 2, false);
ctx.fill();

// const img = new Image();
// // img.addEventListener("load",()=>{

// // })

// img.onload = function () {
//   const pattern = ctx.createPattern(img, "repeat");
//   ctx.fillStyle = pattern;
//   ctx.fillRect(0, 0, 100, 100);
// };

// img.src = "./images/pattern.png";

// const lineCap = ["butt", "round", "square"];
// const lineJoin = ["bevel", "miter", "round"];

// ctx.strokeStyle = "#222";

// lineCap.forEach((line, index) => {
//   ctx.beginPath();
//   ctx.lineWidth = 20;
//   // ctx.lineCap = lineCap[index];
//   ctx.lineJoin = lineJoin[index];
//   ctx.moveTo(60, 60 * index + 50);
//   ctx.lineTo(100, 60 * index + 15);
//   ctx.lineTo(140, 60 * index + 50);
//   ctx.stroke();
// });

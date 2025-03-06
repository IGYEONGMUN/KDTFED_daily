const canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");

// ctx.fillStyle = "rgb(200,0,0)";
// ctx.fillRect(10, 10, 50, 100);
// ctx.fillStyle = "rgb(200,0,0)";
// ctx.strokeStyle = "#000";
// ctx.fillRect(10, 10, 200, 100);
// ctx.strokeRect(10, 10, 200, 100);

// ctx.fillStyle = "#00f";
// ctx.fillRect(50, 50, 120, 120);
// ctx.clearRect(70, 80, 80, 45);

// ctx.beginPath();
// ctx.moveTo(400, 600);
// ctx.lineTo(600, 700);
// ctx.stroke();
// ctx.beginPath();
// ctx.moveTo(50, 50);
// ctx.lineTo(150, 100);
// ctx.lineTo(50, 150);
// // ctx.lineTo(50, 50);
// ctx.closePath();
// ctx.stroke();

// ctx.fillStyle = "rgb(200,0,0)";
// ctx.fill();

// ctx.beginPath();
// ctx.moveTo(150, 100);
// ctx.lineTo(250, 50);
// ctx.lineTo(250, 150);
// ctx.closePath();
// ctx.stroke();

// ctx.fillStyle = "rgb(0,200,0)";
// ctx.fill();

// ctx.beginPath();
// ctx.arc(200, 150, 100, 0, Math.PI * 0.5, true);
// ctx.closePath();
// ctx.stroke();

// ctx.fillStyle = "#ff0";
// ctx.fill();

// ctx.beginPath();
// ctx.arc(120, 100, 50, 0, Math.PI * 1, true);

// ctx.arc(280, 100, 50, 0, Math.PI * 1, false);

// ctx.fillStyle = "#f00";
// ctx.fill();

// ctx.beginPath();
// ctx.arc(150, 250, 50, Math.PI * 0.5, Math.PI * 1.5, false);
// ctx.closePath();
// ctx.stroke();

// ctx.beginPath();
// ctx.arc(200, 200, 50, 0, Math.PI / 3, false);
// ctx.stroke();

// ctx.beginPath();
// ctx.ellipse(200, 70, 80, 50, 0, 0, Math.PI * 1, true);
// ctx.strokeStyle = "#f00";
// ctx.stroke();
// ctx.beginPath();
// ctx.ellipse(150, 200, 80, 50, Math.PI / -6, 0, Math.PI * 2);

// ctx.strokeStyle = "#00f";

// ctx.stroke();

// ctx.beginPath();
// ctx.save();
// ctx.scale(1, 0.2);
// ctx.arc(200, 150, 80, 0, Math.PI * 2, true);
// ctx.stroke();
// ctx.restore();

// ctx.beginPath();
// ctx.arc(200, 150, 70, 0, Math.PI * 2, true);
// ctx.stroke();

// ctx.beginPath();
// ctx.moveTo(50, 200);
// ctx.quadraticCurveTo(100, 50, 1000, 200);
// ctx.stroke();

// ctx.beginPath();
// ctx.moveTo(50, 100);
// ctx.quadraticCurveTo(100, 50, 150, 100);
// ctx.quadraticCurveTo(200, 150, 250, 100);
// ctx.quadraticCurveTo(300, 50, 350, 100);
// ctx.stroke();

// ctx.beginPath();
// ctx.moveTo(50, 100);
// ctx.bezierCurveTo(90, 250, 300, 10, 450, 500);
// ctx.stroke();

// const triangle = new Path2D();
// triangle.moveTo(100, 100);
// triangle.lineTo(300, 100);
// triangle.lineTo(200, 500);
// triangle.closePath();

// ctx.stroke(triangle);

const circle = new Path2D();

circle.arc(200, 155, 100, Math.PI * 0.5, Math.PI * 1.5);
ctx.fillStyle = "#0f0";
ctx.fill(circle);

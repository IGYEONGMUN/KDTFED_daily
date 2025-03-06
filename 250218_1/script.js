const char = document.querySelector(".character");
let deg = 0;

const loop = () => {
  const rotation = (Math.PI / 180) * deg;
  const targetX = window.innerWidth / 2 - 50 + 100 * Math.cos(rotation);
  const targetY = window.innerHeight / 2 - 50 + 100 * Math.sin(rotation);

  char.style.left = `${targetX}px`;
  char.style.top = `${targetY}px`;

  deg += 1;

  requestAnimationFrame(loop);
};
loop();

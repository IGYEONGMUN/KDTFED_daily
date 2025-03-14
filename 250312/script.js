//FullPage
new fullpage("#fullpage", {
  autoScrolling: true,
  scrollHorizontally: true,
});

//GNB & Toggle
const body = document.querySelector("body");
const navBtn = document.querySelector("#nav_icon");
navBtn.addEventListener("click", () => {
  body.classList.toggle("nav_active");
});

// Fullpage
const sec2_Slider = document.querySelector("#sec2 .slider_wrap");
const sec2_Title = document.querySelector("#sec2 .title");

new fullpage("#fullpage", {
  autoScrolling: true,
  scrollHorizontally: true,
  navigation: true,
  anchors: ["Num0", "Num1", "Num2", "Num3", "Num4"],
  //특정페이지 도착한이후 로드
  afterLoad: function (old_elem, new_elem, direction) {
    if (new_elem.index === 2) {
      sec2();
      console.log("section2 hello");
    }
    if (old_elem.index === 2) {
      sec2_reset();
      console.log("section2 bye");
    }
  },
});

function sec2() {
  sec2_Slider.style.cssText = "opacity:1; transform: translateX(-50px)";
  sec2_Title.style.cssText = "opacity:1; transform: translateX(50px)";
}

function sec2_reset() {
  sec2_Slider.style.cssText = "opacity:0; transform: translateX(50px)";
  sec2_Title.style.cssText = "opacity:0; transform: translateX(-50px)";
}

// GNB & Toggle
const body = document.querySelector("body");
const navBtn = document.querySelector("#nav_icon");

navBtn.addEventListener("click", () => {
  body.classList.toggle("nav_active");
});

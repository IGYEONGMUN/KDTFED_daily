// 목표 : 사용자가 스크롤을 내렸을 때, header 배경컬러 // banner height를 변경 => 가상클래스 적용

// 1.사용자가 지금 스크롤을 내렸어!!
// > 스크롤은 브라우저가 가지고 있는 요소!!
// > 브라우저야!!! 지금 스크롤이 내려갔니?

// 2.header는 html안에서 header라는 태그를 사용하고 있는 요소야!

// 3.사용자가 스크롤을 내렸으니까 빨리 active 클래스를 header에게 적용시켜

// 브라우저가 가지고 있는 내장객체

// document.querySelector("#circle");
// 문서 => 개발자가 직접 작성한 html 문서

/* scroll event */
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    document.querySelector("header").classList.add("active");
  } else {
    document.querySelector("header").classList.remove("active");
  }
});

/* slick slider */
$(document).ready(function () {
  $(".myslider").slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: false,
    dots: true,
    speed: 300,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          speed: 300,
          dots: true,
          infinite: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 300,
          dots: true,
          infinite: false,
        },
      },
    ],
  });
});

/*trigger*/
const trigger = document.querySelector(".trigger");
trigger.addEventListener("click", function () {
  this.classList.toggle("active");
  document.querySelector(".gnb").classList.toggle("active");
});

/*menu*/
const menus = document.querySelectorAll(".gnb a");
menus.forEach((menu) => {
  menu.addEventListener("click", function (event) {
    event.preventDefault();
    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    const targetPosition = targetElement.offsetTop;
    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  });
});

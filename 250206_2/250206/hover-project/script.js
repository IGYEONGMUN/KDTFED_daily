const liItems = document.querySelectorAll("li");
const photo = document.querySelector(".photo");
console.log(photo);
liItems.forEach((liItem) => {
  liItem.addEventListener("mouseenter", function () {
    const changeImg = this.getAttribute("data-image");
    photo.style.backgroundImage = `url("${changeImg}")`;
  });
  liItem.addEventListener("mouseleave", function () {
    photo.style.backgroundImage = ``;
  });
});

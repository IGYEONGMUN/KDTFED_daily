window.addEventListener("scroll", () => {
  const hashList = document.querySelector(".hashlist");
  const scrollY = window.scrollY;
  if (scrollY > 268) {
    hashList.classList.add("active");
  } else {
    hashList.classList.remove("active");
  }
});

const hashContent = document.querySelector(".hashcontent");
const listClientWidth = hashContent.clientWidth;

const listScrollWidth = hashContent.clientWidth + 226;

let startX = 0;
let nowX = 0;
let endX = 0;
let listX = 0;

const getClientX = (e) => {
  return e.touches ? e.touches[0].clientX : e.clientX;
};

const getTranslateX = () => {
  console.log(getComputedStyle(hashContent).transform);
  return getComputedStyle(hashContent).transform;
};

const setTranslateX = (x) => {
  hashContent.style.transform = `translateX(${x})`;
};

const onscrollMove = (e) => {
  nowX = getClientX(e);

  setTranslateX(listX + nowX - startX);
};
const onScrollEnd = (e) => {
  endX = getClientX(e);
  listX = getTranslateX();
};

const onScrollStart = () => {
  window.addEventListener("touchmove", onscrollMove);
  window.addEventListener("mousemove", onscrollMove);

  window.addEventListener("touchend", onScrollEnd);
  window.addEventListener("mouseend", onScrollEnd);
};

hashContent.addEventListener("touchstart", onScrollStart);
hashContent.addEventListener("mousedown", onScrollStart);

const videos = ["mv-1.mp4", "mv-2.mp4", "mv-3.mp4"];
const container = document.querySelector("#container");
const srcVideo = document.createAttribute("src");
const newVideo = document.createElement("video");
const autoVideo = document.createAttribute("autoplay");

srcVideo.value = `./videos/videos/${videos[0]}`;

newVideo.setAttributeNode(srcVideo);

container.appendChild(newVideo);

// newVideo.addEventListener("click", function () {
//   if (this.paused) this.play();
//   else this.pause();
// });

const playButton = document.querySelector(".play-pause");
const video = document.querySelector("video");
const progressCover = document.querySelector(".progress");
const volumeBar = document.querySelector("input[type='range']");
const fullButton = document.querySelector(".fullscreenBtn");
const rateButtons = document.querySelectorAll(".rate");
const player = docum;
const togglePlay = () => {
  video.paused ? play() : pause();
};

const play = () => {
  playButton.innerText = "||";
  video.play();
};

const pause = () => {
  playButton.innerText = "▶";

  video.pause();
};

const setVolume = (e) => {
  video.volume = e.target.value;
};

const setRate = (e) => {
  const { rate } = e.target.dataset;
  video.playbackRate = rate;
};

const formatting = (time) => {
  let sec = Math.floor(time % 60);
  let min = Math.floor(time / 60);
  let hour = Math.floor(time / 3600);

  sec = sec < 10 ? `0${sec}` : sec;
  min = min < 10 ? `0${min}` : min;
  hour = hour < 10 ? `0${hour}` : hour;

  return `${hour}:${min}:${sec}`;
};

const updateTime = () => {
  const current = document.querySelector(".current");
  const duration = document.querySelector(".duration");
  current.innerText = formatting(video.currentTime);
  duration.innerText = formatting(video.duration);

  // duration.innerText = video.duration;
};

const updateProgress = () => {
  const progressBar = document.querySelector(".bar");
  const progressPointer = document.querySelector(".circle");
  const duration = video.duration;
  const currentTime = video.currentTime;
  const percent = (currentTime / duration) * 100;
  progressBar.style.width = `${percent}%`;
  const progressBarWidth = progressCover.clientWidth;
  const newPosition = (currentTime / duration) * progressBarWidth;
  progressPointer.style.left = `${newPosition}px`;
};

playButton.addEventListener("click", togglePlay);
video.addEventListener("click", togglePlay);
video.addEventListener("timeupdate", updateTime);
video.addEventListener("timeupdate", updateProgress);
volumeBar.addEventListener("change", setVolume);
rateButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    setRate(e);
  });
});
fullButton.addEventListener("click", () => {
  video.requestFullscreen();
});

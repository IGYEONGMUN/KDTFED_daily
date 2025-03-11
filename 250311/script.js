import { weathermap, unsplash } from "./env.js";

const getCurrentWeather = (latitude, longitude) => {
  const URL = ` https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${weathermap}&units=metric`;

  fetch(URL)
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      const city = document.querySelector(".city");
      const weather = document.querySelector(".weather");
      const temp = document.querySelector(".temp");
      const icon = document.querySelector(".icon");

      let cityName;
      switch (result.name) {
        case "Jamwon-dong":
          cityName = "역삼동";
          break;
      }

      let weatherInfo;
      switch (result.weather[0].main) {
        case "Haze":
          weatherInfo = "안개";
          break;
      }
      city.innerText = cityName;
      weather.innerText = weatherInfo;
      temp.innerText = `${result.main.temp}℃`;
      icon.src = `https://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png`;
    });
};

const errorHandle = (err) => {
  console.log(err);
};

const getPosition = (position) => {
  const { latitude, longitude } = position.coords;
  getCurrentWeather(latitude, longitude);
};

if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(getPosition, errorHandle);
} else {
  console.log("geolocation is not available");
}

const imgURL = `https://api.unsplash.com/photos/random?client_id=${unsplash}`;

fetch(imgURL)
  .then((response) => response.json())
  .then(({ urls: { full } }) => {
    const container = document.querySelector(".container");
    container.style.backgroundImage = `url(${full})`;
  });

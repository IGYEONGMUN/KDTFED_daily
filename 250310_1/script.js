const button = document.querySelector("button");

const showPosition = (position) => {
  const result = document.querySelector("#result");
  result.innerHTML = `
  <b>위도 : </b>${position.coords.latitude},<b>경도 : </b>${position.coords.longtitude}
  `;
};

const errorPosition = (err) => {
  alert(err.message);
};

button.addEventListener("click", () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, errorPosition);

    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    let watchId = navigator.geolocation.watchPosition(
      showPosition,
      errorPosition,
      options
    );

    setTimeout(() => {
      navigator.geolocation.clearWatch(watchId);
    }, 30000);
  } else {
    alert("Geolocation을 지원하지 않습니다.");
  }
});

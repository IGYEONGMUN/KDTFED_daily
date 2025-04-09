import { useState, useEffect } from "react";
import styled from "styled-components";
import GlobalStyles from "./styles/Globalstyles.styles";
// 부트스트랩 설치할때 css부분도 설치해야됨
import "bootstrap/dist/css/bootstrap.min.css";
import WeatherBox from "./components/WeatherBox";
import WeatherButton from "./components/WeatherButton";

const API_KEY = import.meta.env.VITE_API_KEY;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

function App() {
  const [weather, setWeather] = useState(null);
  const cities = ["paris", "new york", "tokyo", "seoul"];
  const getWeatherByCurrentLocation = async (lat, lon) => {
    // const url = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}`
    // &units=metric섭씨온도로 변환 홈페이지 유닛츠에 있음
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    // REST API방식
    const response = await fetch(url);
    // 가상돔에선 비동기적으로 작동함 / 리스폰스도 비동기적으로 작동해서 제이슨함수 실행불가능/async await로 처리
    const data = await response.json();
    setWeather(data);
  };

  const getCurrentLocation = () => {
    // 겟커렌트포지션 함수를 통해 만들어지는 요소는 객체임 - position
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat, lon);
    });
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);
  return (
    <>
      <GlobalStyles />
      <Container>
        <WeatherBox weather={weather} />
        <WeatherButton cities={cities} />
      </Container>
    </>
  );
}

export default App;

import { useState, useEffect } from "react";
import styled from "styled-components";
import GlobalStyles from "./styles/Globalstyles.styles";
// 부트스트랩 설치할때 css부분도 설치해야됨
import "bootstrap/dist/css/bootstrap.min.css";
import WeatherBox from "./components/WeatherBox";
import WeatherButton from "./components/WeatherButton";
import { ClipLoader } from "react-spinners";
const API_KEY = import.meta.env.VITE_API_KEY;
const VITE_UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ img }) => `url(${img})`} center/cover no-repeat;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

function App() {
  // 로딩스피너용 스테이트
  const [loading, setLoading] = useState(false);
  const [weather, setWeather] = useState(null);
  // 부트스트랩 쓰려고 null
  const [city, setCity] = useState(null);
  const [apiError, setAPIError] = useState("");
  const [background, setBackground] = useState(null);
  const cities = ["paris", "new york", "tokyo", "seoul"];
  const getWeatherByCurrentLocation = async (lat, lon) => {
    // 로딩스피너 즉 로딩에 대한 판단여부를 주려고 트라이 캐치문 줌
    try {
      // const url = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}`
      // &units=metric섭씨온도로 변환 홈페이지 유닛츠에 있음
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
      // REST API방식
      const response = await fetch(url);
      // 가상돔에선 비동기적으로 작동함 / 리스폰스도 비동기적으로 작동해서 제이슨함수 실행불가능/async await로 처리
      const data = await response.json();
      setWeather(data);
      setLoading(false);
    } catch (err) {
      setAPIError(err.message);
      setLoading(false);
    }
  };
  const getWeatherByCity = async () => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
      const response = await fetch(url);
      const data = await response.json();
      setWeather(data);
      setLoading(false);
    } catch (err) {
      setAPIError(err.message);
      setLoading(false);
    }
  };

  const handleCityChange = (city) => {
    if (city === "current") {
      setCity(null);
    } else {
      setCity(city);
    }
  };

  const getCurrentLocation = () => {
    // 겟커렌트포지션 함수를 통해 만들어지는 요소는 객체임 - position
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat, lon);
    });
  };

  const getBackground = () => {
    const getImg = ``;
  };

  // useEffect(() => {
  //   getCurrentLocation();
  // }, []);

  // useEffect(() => {
  //   getWeatherByCity();
  // }, [city]);

  // 커런트로케이션 버튼 누르면 steCity 통해서 널값으로 바뀌니까 유즈이펙트 두개를 합침 -널일때 현재 좌표값찾아오는 함수 실행
  useEffect(() => {
    if (city === null) {
      setLoading(true);
      getCurrentLocation();
    } else {
      setLoading(true);
      getWeatherByCity();
    }
  }, [city]);

  return (
    <>
      <GlobalStyles />
      {loading ? (
        <div>
          <ClipLoader color="#f86c6b" size={150} loading={loading} />
        </div>
      ) : (
        <Wrapper img={background}>
          <Container>
            <WeatherBox weather={weather} />
            <WeatherButton
              cities={cities}
              handleCityChange={handleCityChange}
              selectedCity={city}
              setCity={setCity}
            />
          </Container>
        </Wrapper>
      )}
    </>
  );
}

export default App;

import React, { useState, useEffect } from "react"
import styled from "styled-components"

const API_KEY = "af3cc8709eebf290ec8dd8a90bdb9d45"
export default function Weather() {
  const [weatherInfo, setWeatherInfo] = useState({
    maxTemp: "",
    minTemp: "",
    weather: "",
    name: "",
  })
  useEffect(
    () => navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError),
    []
  )

  const onGeoOk = (position) => {
    const lat = position.coords.latitude
    const lon = position.coords.longitude
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&lang=kr`
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setWeatherInfo({
          ...weatherInfo,
          maxTemp: Math.floor(data.main.temp_max - 273),
          minTemp: Math.floor(data.main.temp_min - 273),
          weather: data.weather[0].main,
          name: data.name,
        })
      })
  }
  console.log(weatherInfo)
  const onGeoError = () => {}
  return (
    <WeatherContainer>
      {weatherInfo.maxTemp && (
        <WeatherTemperature>
          {weatherInfo.maxTemp}°C / {weatherInfo.minTemp}°C
        </WeatherTemperature>
      )}
      <WeatherDescription>{weatherInfo.weather}</WeatherDescription>
    </WeatherContainer>
  )
}
const WeatherContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 3vh;
  right: 3vw;
`

const WeatherTemperature = styled.p`
  font-weight: 700;
  margin-bottom: 5px;
`

const WeatherDescription = styled.p`
  font-weight: 700;
`

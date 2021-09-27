import React, { useEffect } from "react"
import styled from "styled-components"

const API_KEY = "af3cc8709eebf290ec8dd8a90bdb9d45"
export default function Weather() {
  useEffect(
    () => navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError),
    []
  )

  // useEffect(() => {
  //   fetch()
  // }, [])
  const onGeoOk = (position) => {
    const lat = position.coords.latitude
    const lon = position.coords.longitude
    console.log(position)
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
      })
  }

  const onGeoError = () => {}
  return (
    <div>
      <WeatherTemperature></WeatherTemperature>
      <WeatherDescription></WeatherDescription>
    </div>
  )
}

const WeatherTemperature = styled.p``

const WeatherDescription = styled.p``

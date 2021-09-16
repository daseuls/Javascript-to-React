import React from "react"
import styled from "styled-components"
import Login from "../components/Login"
import Clock1 from "../components/Clock1"
import GlobalStyle from "../styles/GlobalStyle"

const images = [
  "background.jpg",
  "background2.jpeg",
  "background3.jpg",
  "background4.jpeg",
  "background5.jpeg",
  "background6.jpeg",
  "background7.jpeg",
  "background8.jpg",
  "background9.jpg",
  "background10.png",
  "background11.jpg",
]

export default function Main() {
  const chosenImages = images[Math.floor(Math.random() * images.length)]
  console.log(chosenImages)
  return (
    <>
      <GlobalStyle />
      <Container>
        <Clock1 />
        <Login />
      </Container>
    </>
  )
}

const Container = styled.section`
  width: 100vw;
  height: 100vh;
  background-image: url("momentum_react/public/asset/img/{chosenImages}");
  background-repeat: no-repeat;
  background-size: cover;
`

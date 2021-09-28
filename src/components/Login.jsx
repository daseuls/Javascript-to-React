import React, { useState, useEffect } from "react"
import styled from "styled-components"

export default function Login() {
  const [loginState, setLoginState] = useState(true)
  const savedUsername = localStorage.getItem("username")

  useEffect(() => onPaintUsername(), [])

  const onLoginSubmit = (e) => {
    e.preventDefault()
    const loginInputValue = e.target[0].value
    localStorage.setItem("username", loginInputValue)
    console.log("onLoginSubmit")
    onPaintUsername()
  }

  const onPaintUsername = () => {
    if (localStorage.getItem("username")) {
      setLoginState(false)
    }
  }

  const getGreetingText = () => {
    const hours = new Date().getHours()
    console.log(hours)
    if (6 < hours && hours < 10) {
      return `좋은 아침이에요 ${savedUsername}님! 🌞`
    } else if (9 < hours && hours < 13) {
      return `${savedUsername}님 오전도 화이팅 ! 💪🏻`
    } else if (12 < hours && hours < 18) {
      return `${savedUsername}님 오후도 힘차게 ! 👩🏻‍💻`
    } else if (17 < hours && hours < 22) {
      return `${savedUsername}님 오늘 할일은 다하셨나요? ✍🏻`
    } else if (21 < hours) {
      return `오늘 하루도 수고했어요 ${savedUsername}님 🌙`
    }
  }
  return (
    <>
      <LoginForm loginState={!loginState} onSubmit={onLoginSubmit}>
        <LoginInput type="text" placeholder="사용자 이름을 입력해주세요" />
      </LoginForm>
      <Greeting loginState={loginState}>
        {/* 👋🏻 반가워요, {savedUsername}님 ! */}
        {getGreetingText()}
      </Greeting>
    </>
  )
}

const LoginForm = styled.form`
  display: ${(props) => (props.loginState ? "none" : "")};
`

const LoginInput = styled.input`
  padding: 10px;
  font-size: 15px;
  border-bottom: 1px solid black;
  border-radius: 3px;
  font-weight: 700;
`
const Greeting = styled.h2`
  display: ${(props) => (props.loginState ? "none" : "")};
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 10px;
`

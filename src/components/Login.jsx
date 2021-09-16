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

  return (
    <>
      <LoginForm loginState={!loginState} onSubmit={onLoginSubmit}>
        <LoginInput type="text" placeholder="사용자 이름을 입력해주세요" />
      </LoginForm>
      <Greeting loginState={loginState}>반가워요, {savedUsername}님 !</Greeting>
    </>
  )
}

const LoginForm = styled.form`
  display: ${(props) => (props.loginState ? "none" : "")};
`

const LoginInput = styled.input`
  padding: 10px;
  width: 30%;
  font-size: 12px;
  border: 1px solid gray;
  border-radius: 3px;
`
const Greeting = styled.h2`
  display: ${(props) => (props.loginState ? "none" : "")};
`

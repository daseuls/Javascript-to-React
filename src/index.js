import React from "react"
import ReactDOM from "react-dom"

import { ThemeProvider } from "styled-components"
import GlobalStyle from "./styles/GlobalStyle"
import theme from "./styles/theme"

import Main from "./pages/Main"

ReactDOM.render(
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}></ThemeProvider>
    <Main />
  </>,
  document.getElementById("root")
)

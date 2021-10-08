import React from "react"
import styled from "styled-components"

export default function SearchBar() {
  const handleSearchGoogle = (e) => {
    e.preventDefault()
    const inputValue = e.target.childNodes[0].value
    window.open(`https://www.google.co.kr/search?q=${inputValue}`, "_blank")
    e.target.childNodes[0].value = ""
  }

  return (
    <Container onSubmit={handleSearchGoogle}>
      <SearchInput placeholder="Google Search"></SearchInput>
    </Container>
  )
}

const Container = styled.form``

const SearchInput = styled.input`
  width: 35vw;
  border: 2px solid white;
  border-radius: 8px;
  margin-bottom: 30px;
  padding: 5px 13px;
  color: white;
  font-weight: 700;
`

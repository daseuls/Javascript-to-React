import React, { useState, useEffect } from "react"
import styled from "styled-components"

export default function Clock() {
  const [time, setTime] = useState(new Date())
  const month = time.getMonth()
  const date = time.getDate()
  const hours = time.getHours()
  const minutes = time.getMinutes()
  const seconds = time.getSeconds()

  useEffect(() => setInterval(getTimeNow, 1000), [])

  const getTimeNow = () => {
    setTime(new Date())
  }

  return (
    <TimeContainer>
      <TimeDate>
        오늘은 {month + 1}월 {date}일
      </TimeDate>
      <TimeHours>
        {hours}시 {minutes}분 {seconds}초 입니다.
      </TimeHours>
    </TimeContainer>
  )
}

const TimeContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const TimeDate = styled.h1`
  font-size: 30px;
`
const TimeHours = styled.h1`
  font-size: 30px;
`

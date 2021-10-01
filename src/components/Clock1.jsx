import React, { useState, useEffect } from "react"
import styled from "styled-components"

const WEEK = ["일", "월", "화", "수", "목", "금", "토"]

export default function Clock() {
  const [time, setTime] = useState(new Date())
  const month = time.getMonth()
  const date = time.getDate()
  const hours = time.getHours()
  const minutes = time.getMinutes()
  const seconds = time.getSeconds()

  const getDay = () => {
    const day = new Date().getDay()
    return WEEK[day]
  }

  const getMonth = (month) => {
    if (month < 9) {
      return `0${month + 1}`
    } else {
      return `${month + 1}`
    }
  }

  const getDate = (date) => {
    if (date < 10) {
      return `0${date}`
    } else {
      return date
    }
  }

  const getHour = (hours) => {
    if (hours < 10) {
      return `오전 0${hours}`
    } else if (hours < 12) {
      return `오전 ${hours}`
    } else if (hours === 12) {
      return `오후 ${hours}`
    } else if (hours < 22) {
      return `오후 0${hours - 12}`
    } else {
      return `오후 ${hours - 12}`
    }
  }

  const getMinuteSeconds = (minutes) => {
    if (minutes < 10) {
      return `0${minutes}`
    } else {
      return minutes
    }
  }
  useEffect(() => setInterval(getTimeNow, 1000), [])

  const getTimeNow = () => {
    setTime(new Date())
  }

  return (
    <TimeContainer>
      <TimeDate>
        오늘은 {getMonth(month)}월 {getDate(date)}일 {getDay()}요일 입니다.
      </TimeDate>
      <TimeHours>
        현재 시각은 {getHour(hours)}시 {getMinuteSeconds(minutes)}분{" "}
        {getMinuteSeconds(seconds)}초 입니다.
      </TimeHours>
    </TimeContainer>
  )
}

const TimeContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
  background-color: white;
  padding: 15px;
  border-radius: 8px;
`

const TimeDate = styled.h1`
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 5px;
`

const TimeHours = styled.h1`
  font-size: 30px;
  font-weight: 700;
`

import React, { useState, useEffect } from "react"

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
    <div>
      오늘은 {month + 1}월 {date}일 {hours}시 {minutes}분 {seconds}초 입니다.
    </div>
  )
}

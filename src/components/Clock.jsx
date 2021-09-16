// 잘 안되는 코드.. 뭐가 안되는지 모르겠음

import React, { useState, useEffect } from "react"

export default function Clock() {
  const now = new Date()
  const month = now.getMonth()
  const date = now.getDate()
  const hours = now.getHours()
  const minutes = now.getMinutes()
  const seconds = now.getSeconds()

  const [time, setTime] = useState({
    month: month,
    date: date,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  })

  useEffect(() => setInterval(getTimeNow, 1000), [])

  const getTimeNow = () => {
    setTime({
      month: month,
      date: date,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    })
  }

  return (
    <div>
      오늘은 {time.month}월 {time.date}일 {time.hours}시 {time.minutes}분{" "}
      {time.seconds}초 입니다.
    </div>
  )
}

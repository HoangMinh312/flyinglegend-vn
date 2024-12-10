'use client'

import { useState, useEffect } from 'react'


export function Countdown({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  function calculateTimeLeft() {
    const difference = +new Date(targetDate) - +new Date()
    let timeLeft = {}

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      }
    }

    return timeLeft
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearTimeout(timer)
  })

  const timerComponents = Object.keys(timeLeft).map(interval => {
    if (!timeLeft[interval]) {
      return null
    }

    return (
      <span className="text-2xl md:text-4xl font-bold mx-2" key={interval}>
        {timeLeft[interval]} {interval}{" "}
      </span>
    )
  })

  return (
    <div className="text-center mb-8">
      {timerComponents.length ? timerComponents : <span className="text-2xl md:text-4xl font-bold">Time's up!</span>}
    </div>
  )
}


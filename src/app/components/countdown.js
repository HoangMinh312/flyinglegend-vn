'use client'

import React, { useState, useEffect } from 'react'

export function Countdown({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00'
  })

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime()
      const distance = new Date(targetDate).getTime() - now

      if (distance < 0) {
        clearInterval(interval)
        setTimeLeft({ days: '00', hours: '00', minutes: '00', seconds: '00' })
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)).toString().padStart(2, '0'),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0'),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0'),
          seconds: Math.floor((distance % (1000 * 60)) / 1000).toString().padStart(2, '0')
        })
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [targetDate])

  return (
    <div className="text-center">
      <div className="flex justify-center space-x-4">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div key={unit} className="flex flex-col items-center">
            <span className="text-4xl md:text-6xl font-bold">{value}</span>
            <span className="text-sm md:text-base uppercase">{unit}</span>
          </div>
        ))}
      </div>
    </div>
  )
}


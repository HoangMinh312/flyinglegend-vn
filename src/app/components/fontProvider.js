'use client'

import { Alex_Brush } from 'next/font/google'

const alexBrush = Alex_Brush({ 
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export function FontProvider({ children }) {
  return (
    <>
      <style jsx global>{`
        .font-alex-brush {
          font-family: ${alexBrush.style.fontFamily};
        }
        .font-bank-gothic {
          font-family: 'Bank Gothic', sans-serif;
        }
      `}</style>
      {children}
    </>
  )
}


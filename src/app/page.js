import { Countdown } from './components/countdown'

export default function ComingSoonPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 flex flex-col items-center justify-center text-white p-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">Coming Soon</h1>
      <p className="text-xl md:text-2xl mb-8 text-center">We're working hard to bring you something amazing!</p>
      <Countdown targetDate="2024-12-19T00:00:00" />
    </div>
  )
}


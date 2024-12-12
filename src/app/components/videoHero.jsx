'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Play, Pause, Volume2, VolumeX } from 'lucide-react'

export function VideoHero({ videoId }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)

  useEffect(() => {
    const player = document.getElementById('youtube-player')
    window.onYouTubeIframeAPIReady = () => {
      new window.YT.Player('youtube-player', {
        events: {
          onReady: (event) => {
            event.target.mute()
            if (isPlaying) event.target.playVideo()
          },
        },
      })
    }

    const tag = document.createElement('script')
    tag.src = "https://www.youtube.com/iframe_api"
    const firstScriptTag = document.getElementsByTagName('script')[0]
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)

    return () => {
      window.onYouTubeIframeAPIReady = null
    }
  }, [isPlaying])

  const togglePlay = () => {
    const player = document.getElementById('youtube-player')
    if (isPlaying) {
      player.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*')
    } else {
      player.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*')
    }
    setIsPlaying(!isPlaying)
  }

  const toggleMute = () => {
    const player = document.getElementById('youtube-player')
    if (isMuted) {
      player.contentWindow.postMessage('{"event":"command","func":"unMute","args":""}', '*')
    } else {
      player.contentWindow.postMessage('{"event":"command","func":"mute","args":""}', '*')
    }
    setIsMuted(!isMuted)
  }

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <iframe
        id="youtube-player"
        className="absolute left-1/2 top-1/2 h-[56.25vw] min-h-screen min-w-[177.77vw] -translate-x-1/2 -translate-y-1/2 w-screen"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&controls=0&showinfo=0&rel=0&loop=1&playlist=${videoId}&enablejsapi=1&vq=720`}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
      <div className="absolute bottom-4 left-4 z-10 flex space-x-2">
        <Button variant="secondary" size="icon" onClick={togglePlay}>
          {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
        </Button>
        <Button variant="secondary" size="icon" onClick={toggleMute}>
          {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
        </Button>
      </div>
    </div>
  )
}


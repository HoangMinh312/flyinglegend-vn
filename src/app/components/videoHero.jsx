'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Play, Pause, Volume2, VolumeX } from 'lucide-react'

export function VideoHero({ videoId }) {
  const [isPlaying, setIsPlaying] = useState(true) // Default to playing
  const [isMuted, setIsMuted] = useState(true) // Default to muted

  useEffect(() => {
    const tag = document.createElement('script')
    tag.src = "https://www.youtube.com/iframe_api"
    const firstScriptTag = document.getElementsByTagName('script')[0]
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)

    window.onYouTubeIframeAPIReady = () => {
      new window.YT.Player('youtube-player', {
        events: {
          onReady: (event) => {
            event.target.mute() // Ensure video is muted
            event.target.playVideo() // Start playing
          },
        },
        playerVars: {
          autoplay: 1,
          controls: 0,
          disablekb: 1,
          fs: 0,
          iv_load_policy: 3,
          modestbranding: 1,
          rel: 0,
          showinfo: 0,
          loop: 1,
          playlist: videoId,
        },
      })
    }

    return () => {
      window.onYouTubeIframeAPIReady = null
    }
  }, [videoId])

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
    <div className="relative min-h-[300px] md:h-96 lg:h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <iframe
          id="youtube-player"
          className="h-full w-full object-cover"
          src={`https://www.youtube.com/embed/${videoId}?enablejsapi=1&autoplay=1&mute=1&controls=0&vq=hd720&loop=1&playlist=${videoId}`}
        ></iframe>
      </div>
      <div className="absolute inset-0 pointer-events-none"></div>
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

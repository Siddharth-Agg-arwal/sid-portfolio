"use client"

import Image from "next/image"
import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import styles from "./carousel.module.css"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

// Create an array with your image paths.
const musicImages = [
  "/music_page/joji.png",
  "/music_page/joji.png",
  "/music_page/joji.png",
  "/music_page/joji.png",
  "/music_page/joji.png",
  "/music_page/joji.png",
  "/music_page/coldplay.png",
  "/music_page/coldplay.png",
  "/music_page/coldplay.png",
]

// Create a separate array with your music URLs.
const musicAudios = [
  "/music_page/kendrick-pride.mp3",
  "/music_page/kendrick-pride.mp3",
  "/music_page/kendrick-pride.mp3",
  "/music_page/kendrick-pride.mp3",
  "/music_page/kendrick-pride.mp3",
  "/music_page/kendrick-pride.mp3",
  "/music_page/coldplay.mp3",
  "/music_page/coldplay.mp3",
  "/music_page/coldplay.mp3",
]

export function CarouselMusic() {
  // activeSong holds the index of the currently active (playing) song.
  // Null means no song is active.
  const [activeSong, setActiveSong] = useState<number | null>(null)
  // audioRef holds the currently playing audio element.
  const audioRef = useRef<HTMLAudioElement | null>(null)

  // Toggle play/stop for a given image.
  const playSong = (index: number) => {
    if (activeSong === index) {
      // If clicking the currently active image, stop the music.
      setActiveSong(null)
    } else {
      // Otherwise, set that song as active.
      setActiveSong(index)
    }
  }

  // When activeSong changes, play or stop the corresponding audio.
  useEffect(() => {
    if (activeSong !== null) {
      // Get the audio URL from the musicAudios array.
      const audioSrc = musicAudios[activeSong]

      // Pause currently playing audio, if any.
      if (audioRef.current) {
        audioRef.current.pause()
      }

      // Create a new audio instance and play it.
      const audio = new Audio(audioSrc)
      audioRef.current = audio
      audio
        .play()
        .catch((error) => {
          console.error("Error playing audio:", error)
        })
    } else {
      // Stop any currently playing audio.
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current = null
      }
    }
  }, [activeSong])

  return (
    <Carousel className={styles.carousel_main}>
      <CarouselContent className={styles.carousel_}>
        {musicImages.map((src, index) => (
          <CarouselItem
            key={index}
            onClick={() => playSong(index)}
            className="pl-1 md:basis-1/3"
          >
            <div className="p-1">
              <AnimatePresence mode="wait">
                {activeSong === index ? (
                  // Render the "Now Playing" content if this song is active.
                  <motion.div
                    key="content"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className={styles.carousel_image1}>
                      <p className="font-bold text-lg">Now Playing</p>
                      <p>Music image {index + 1}</p>
                      {/* You can add additional audio controls or content here */}
                    </div>
                  </motion.div>
                ) : (
                  // Otherwise, render the image.
                  <motion.div
                    key="image"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, y: 60, rotate: 60 }}
                    transition={{ duration: 0.75 }}
                  >
                    <Image
                      src={src}
                      alt={`Music image ${index + 1}`}
                      width={300}
                      height={299}
                      className={styles.carousel_image}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div>
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </Carousel>
  )
}

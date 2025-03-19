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
  const [activeSong, setActiveSong] = useState<number | null>(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const playSong = (index: number) => {
    if (activeSong === index) {
      setActiveSong(null)
    } else {
      setActiveSong(index)
    }
  }

  useEffect(() => {
    if (activeSong !== null) {
      const audioSrc = musicAudios[activeSong]

      if (audioRef.current) {
        audioRef.current.pause()
      }

      const audio = new Audio(audioSrc)
      audioRef.current = audio
      audio.play().catch((error) => console.error("Error playing audio:", error))
    } else if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current = null
    }
  }, [activeSong])

  // Functionality for Previous Song
  const handlePreviousSong = () => {
    setActiveSong((prev) => {
      if (prev === null || prev === 0) return musicImages.length - 1
      return prev - 1
    })
  }

  // Functionality for Next Song
  const handleNextSong = () => {
    setActiveSong((prev) => {
      if (prev === null || prev === musicImages.length - 1) return 0
      return prev + 1
    })
  }

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
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="image"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 1, rotate: 360 }}
                    transition={{ duration:10 }}
                  >
                    <Image
                      src={src}
                      alt={`Music image ${index +1}`}
                      width={300}
                      height={300}
                      className={styles.carousel_image}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        {/* Previous Song Button */}
        <button style={{ all: 'unset', cursor: 'pointer' }} onClick={handlePreviousSong}>
          <div className={styles.prevCover}>
            <Image src="/music_page/prevsong.png" alt="prev" width={25} height={25} />
          </div>
        </button>

        {/* Carousel Previous */}
        <CarouselPrevious />

        {/* Play/Pause Button (optional to implement separately) */}
        <button style={{ all: 'unset', cursor: 'pointer' }} onClick={() => activeSong !== null ? setActiveSong(null) : setActiveSong(0)}>
          <div className={styles.prevCover}>
            <Image src="/music_page/play.png" alt="play" width={25} height={25} />
          </div>
        </button>

        {/* Carousel Next */}
        <CarouselNext />

        {/* Next Song Button */}
        <button style={{ all: 'unset', cursor: 'pointer' }} onClick={handleNextSong}>
          <div className={styles.prevCover}>
            <Image src="/music_page/nextsong.png" alt="next" width={25} height={25} />
          </div>
        </button>
      </div>
    </Carousel>
  )
}

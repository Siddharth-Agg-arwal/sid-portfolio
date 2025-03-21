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
  type CarouselApi,
} from "@/components/ui/carousel"

const musicImages = [
  "https://res.cloudinary.com/danxppoxy/image/upload/v1742572785/Sidcom/coldplay_bhjgji.png",
  "https://res.cloudinary.com/danxppoxy/image/upload/v1742572789/Sidcom/kendrick_nfc4k6.png",
  "https://res.cloudinary.com/danxppoxy/image/upload/v1742572787/Sidcom/malone_cowbey.png",
  "https://res.cloudinary.com/danxppoxy/image/upload/v1742572788/Sidcom/21pilots_uo3bhm.png",
  "https://res.cloudinary.com/danxppoxy/image/upload/v1742572785/Sidcom/travis_qvmmti.png",
  "https://res.cloudinary.com/danxppoxy/image/upload/v1742572789/Sidcom/joji_ziw7mi.png",
  "https://res.cloudinary.com/danxppoxy/image/upload/v1742572786/Sidcom/coldplay2_r2lffj.png",
  "https://res.cloudinary.com/danxppoxy/image/upload/v1742572788/Sidcom/metro_kflhod.png",
  "https://res.cloudinary.com/danxppoxy/image/upload/v1742572788/Sidcom/weeknd_dgg7be.png",
  "https://res.cloudinary.com/danxppoxy/image/upload/v1742572788/Sidcom/xxx_t7zojm.png",
]

const musicAudios = [
  "/music_page/yellow.mp3",
  "/music_page/kendrick-pride.mp3",
  "/music_page/circles.mp3",
  "/music_page/redecorate.mp3",
  "/music_page/iknow.mp3",
  "/music_page/afterthoughts.mp3",
  "/music_page/scientist.mp3",
  "/music_page/dreaming.mp3",
  "/music_page/blinding.mp3",
  "/music_page/vicecity.mp3",
]

const songName = [
  "Yellow - Coldplay",
  "Pride - Kendrick Lamar",
  "Circles - Post Malone",  
  "Redecorate - Twenty One Pilots",
  "I KNOW - Travis Scott",
  "Afterthoughts - Joji",
  "Scientist - Coldplay",
  "Am I Dreaming - Metro Boomin",
  "Blinding Lights - The Weeknd",
  "Vice City - XXXTENTACION",
]

export function CarouselMusic() {
  const [activeSong, setActiveSong] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  const [api, setApi] = useState<CarouselApi | null>(null);

  // Set default index to 1 on initial render
  useEffect(() => {
    if (api) {
      api.scrollTo(1, false); // Set initial position without animation
    }
  }, [api]);

  const playSong = (index: number) => {
    if (activeSong === index && isPlaying) {
      setIsPlaying(false);
    } else {
      setActiveSong(index);
      setIsPlaying(true);
      api?.scrollTo(index);
    }
  };

  useEffect(() => {
    if (activeSong !== null && isPlaying) {
      if (audioRef.current) audioRef.current.pause();
      const audio = new Audio(musicAudios[activeSong]);
      audioRef.current = audio;
      audio.play().catch(console.error);
    } else if (audioRef.current) {
      audioRef.current.pause();
    }
  }, [activeSong, isPlaying]);

  const handlePreviousSong = () => {
    setActiveSong((prev) => {
      const newIndex = prev === null || prev === 0 ? musicImages.length -1 : prev -1;
      api?.scrollTo(newIndex);
      setIsPlaying(true);
      return newIndex;
    });
  };

  const handleNextSong = () => {
    setActiveSong((prev) => {
      const newIndex = prev === null || prev === musicImages.length -1 ? 0 : prev +1;
      api?.scrollTo(newIndex);
      setIsPlaying(true);
      return newIndex;
    });
  };

  const togglePlayPause = () => {
    if (activeSong === null) {
      setActiveSong(0);
      api?.scrollTo(0);
      setIsPlaying(true);
    } else {
      setIsPlaying(prev => !prev);
      api?.scrollTo(activeSong);
    }
  };

  const marqueeVariants = {
    animate: {
      x: ["100%", "-100%"],
      transition: { x: { repeat: Infinity, duration:15, ease:"linear" } },
    },
  };

  return (
    <Carousel className={styles.carousel_main} setApi={setApi}>
      <CarouselContent className={styles.carousel_}>
        {musicImages.map((src, index) => (
          <CarouselItem key={index} onClick={() => playSong(index)} className="pl-1 md:basis-1/3">
            <div className="p-1">
              <AnimatePresence mode="wait">
                {activeSong === index && isPlaying ? (
                  <motion.div key="image" initial={{ opacity:0 }} animate={{ opacity:1, rotate:360 }} exit={{ opacity:0 }} transition={{ duration:9, repeat: Infinity, ease:"linear" }}>
                    <Image src={src} alt={`Music image ${index +1}`} width={300} height={300} className={styles.carousel_image}/>
                  </motion.div>
                ) : (
                  <motion.div key="image" initial={{ opacity:1 }} animate={{ opacity:1 }}>
                    <Image src={src} alt={`Music image ${index +1}`} width={300} height={300} className={styles.carousel_image}/>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <div className={styles.carouselPlayer}>
        <div className={styles.currentlyPlaying} style={{ overflow:"hidden"}}>
          {activeSong === null ? (
            <p>Click on the vinyl to start playing your favorites!</p>
          ) : (
            <motion.p variants={marqueeVariants} animate="animate" style={{ whiteSpace:"nowrap" }}>
              Now Playing: {songName[activeSong]}
            </motion.p>
          )}
        </div>

        <div style={{ display:"flex", alignItems:"center", gap:"10px" }}>
          <div className={styles.prevCover}>
            <button style={{ all:'unset', cursor:'pointer' }} onClick={handlePreviousSong}>
              <Image src="/music_page/prevsong.png" alt="prev" width={25} height={25}/>
            </button>
          </div>

          <CarouselPrevious />
          
          <div className={styles.prevCover}>
          <button className={styles.prevCover} style={{ all:'unset', cursor:'pointer' }} onClick={togglePlayPause}>
            <Image src={isPlaying ? "/music_page/resume.png" : "/music_page/play.png"} alt="play-pause" width={25} height={25}/>
          </button>
          </div>

          <CarouselNext />
          
          <div className={styles.prevCover}>
          <button className={styles.prevCover} style={{ all:'unset', cursor:'pointer' }} onClick={handleNextSong}>
            <Image  src="/music_page/nextsong.png" alt="next" width={25} height={25}/>
          </button>
          </div>
        </div>
      </div>
    </Carousel>
  );
}
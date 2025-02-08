// components/Carousel.tsx
"use client"

import { useState } from 'react';
import Image from 'next/image';
import styles from './carousel.module.css';
import { motion, AnimatePresence } from 'framer-motion';

// Define a type for each image object
interface CarouselImage {
  src: string;
  alt?: string;
}

// Define the props for the Carousel component
interface CarouselProps {
  images: CarouselImage[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const totalImages = images.length;
  const [currentIndex, setCurrentIndex] = useState(0);

  // Next and previous functions update the current index modulo totalImages.
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalImages);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalImages) % totalImages);
  };

  // Create a rotated version of the images array.
  // The image at currentIndex comes first.
  const rotatedImages = [
    ...images.slice(currentIndex),
    ...images.slice(0, currentIndex)
  ];

  // Animation variants for each image.
  // When exiting, the image fades out, rotates 90° and shifts +50px.
  // When entering, the image starts with opacity 0, rotated -90° and shifted -50px,
  // then animates to full opacity, no rotation and x=0.
  const imageVariants = {
    initial: { opacity: 0, rotate: -90, x: -50 },
    animate: { opacity: 1, rotate: 0, x: 0 },
    exit: { opacity: 0, rotate: 90, x: 50 },
  };

  return (
    <div className={styles.main1}>
      <div className={styles.carousel}>
        {/* This container holds all the images.
            It does not animate as a whole. */}
        <div className={styles.carouselContainer}>
          <AnimatePresence>
            {rotatedImages.map((img, idx) => (
              // Using a key that combines currentIndex and idx forces an animation on slide change.
              <motion.div
                key={`${currentIndex}-${idx}`}
                variants={imageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className={styles.carousel_image}
              >
                <Image
                  src={img.src}
                  alt={img.alt || `Image ${idx + 1}`}
                  width={250}
                  height={250}
                  className="rounded-md object-cover"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        <div> 
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 focus:outline-none"
          aria-label="Previous Slide"
        >
          &#8249;
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 focus:outline-none"
          aria-label="Next Slide"
        >
          &#8250;
        </button>
      </div>
      </div>
    </div>
  );
};

export default Carousel;

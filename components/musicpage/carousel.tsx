// components/Carousel.tsx
"use client"

import { useState } from 'react';
import Image from 'next/image';

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
  // currentIndex tracks the starting index of the displayed images
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalImages = images.length;
    const imagesPerSlide = 3;

    const prevSlide = () => {
    const newIndex = currentIndex - imagesPerSlide;
    if (newIndex < 0) {
        setCurrentIndex(Math.max(totalImages - imagesPerSlide, 0));
    } else {
        setCurrentIndex(newIndex);
    }
    };

    const nextSlide = () => {
        const newIndex = currentIndex + imagesPerSlide;
        if (newIndex >= totalImages) {
        setCurrentIndex(0);
        } else {
        setCurrentIndex(newIndex);
        }
    };

  // Get the images to display for the current slide.
    const displayedImages = images.slice(currentIndex, currentIndex + imagesPerSlide);

    return (
        <div className="flex flex-row flex-nowrap justify-center items-center space-x-4 overflow-hidden">
  {displayedImages.map((img, idx) => (
    <div key={idx} className="flex-shrink-0">
      <Image
        src={img.src}
        alt={img.alt || `Slide ${currentIndex + idx + 1}`}
        width={250}
        height={250}
        className="rounded-md"
        objectFit="cover"
      />
    </div>
  ))}
{/* </div> */}


      {/* Navigation buttons */}
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
    );
};

export default Carousel;

// pages/index.js
import Carousel from '../components/musicpage/carousel';

export default function MusicPage() {
  // Sample images. Replace with your actual image paths or URLs.
    const images = [
    { src: '/music_page/21pilots.png', alt: 'Image 1' },
    { src: '/music_page/21pilots.png', alt: 'Image 2' },
    { src: '/music_page/21pilots.png', alt: 'Image 3' },
    { src: '/music_page/21pilots.png', alt: 'Image 4' },
    { src: '/music_page/coldplay.png', alt: 'Image 5' },
    { src: '/music_page/kendrick.png', alt: 'Image 6' },
];

return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <Carousel images={images} />
    </div>
    );
}

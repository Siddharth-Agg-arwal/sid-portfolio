// pages/index.js
import {CarouselMusic} from '../components/musicpage/carousel';
import styles from './css/setmusic.module.css'
import Image from 'next/image';

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
    <div className={styles.main}>
        <CarouselMusic />
        {/* <Image src='/music_page/vinylplayer.png' alt="" width={300} height={300} className={styles.player}/> */}
    </div>
    );
}

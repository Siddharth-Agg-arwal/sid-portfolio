// pages/index.js
import {CarouselMusic} from '../components/musicpage/carousel';
import styles from './css/setmusic.module.css'
import Image from 'next/image';

export default function MusicPage() {

return (
    <div className={styles.main}>
        <div className={styles.engraved}>Let's set some music!</div>
        <CarouselMusic />
        {/* <Image src='/music_page/vinylplayer.png' alt="" width={300} height={300} className={styles.player}/> */}
    </div>
    );
}

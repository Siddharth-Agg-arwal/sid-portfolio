// pages/index.js
import {CarouselMusic} from '../components/musicpage/carousel';
import styles from './css/setmusic.module.css'

export default function MusicPage() {

return (
    <div className={styles.main}>
        <div className={styles.engraved}>Let&apos;s set some music!</div>
        <CarouselMusic />
        {/* <Image src='/music_page/vinylplayer.png' alt="" width={300} height={300} className={styles.player}/> */}
    </div>
    );
}

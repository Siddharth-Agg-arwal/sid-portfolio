import styles from './content.module.css'
import Image from 'next/image'

export default function LeftComponent() {
    return (
        <div className={styles.main}>
            <div className={styles.arrow_img}>
                <Image src={'/landing_page/arrow.svg'} alt={''} height={150} width={150}/>
            </div>
            <div className={styles.tags}>
                <div className={styles.tag_text}><p>#Web_Development&nbsp;</p><p>#App_Development</p></div>
                <hr></hr>
                <div className={styles.tag_text}><p>#Game_Development&nbsp;</p><p>#Machine_Learning</p></div>
                <hr></hr>
                <div className={styles.tag_text}><p>#UI/UX&nbsp;</p><p>#Designing</p></div>
                <hr></hr>
                <div className={styles.tag_text}><p>#Social_Media</p></div>
                <hr></hr>
            </div>
        </div>
    )
}
import Image from 'next/image'
import styles from './socials.module.css'

export default function Socials(){

    // const content = [
    //     {logo : "", url : ""},
    //     {logo : "", url : ""},
    //     {logo : "", url : ""},
    // ]

    return(
        <div className={styles.social_cards}>
            <div className={`${styles.card1} ${styles.card}`}>
                <div className={styles.card_upper}><Image src="/about_me/mail.png" alt="mail" width={50} height={50} /></div>
                <div className={styles.card_lower}>
                    <hr></hr>
                    <p>aggarwal.siddharth2003@gmail.com</p>
                </div>
            </div>

            <div className={`${styles.card2} ${styles.card}`}>
                <div className={styles.card_upper}><Image src="/about_me/linkedin.png" alt="linkedin" width={35} height={35} /></div>
                <div className={styles.card_lower}>
                    <hr></hr>
                    <p>aggarwal.siddharth2003@gmail.com</p>
                </div>
            </div>

            <div className={`${styles.card3} ${styles.card}`}>
                <div className={styles.card_upper}><Image src="/about_me/gitub.png" alt="git" width={35} height={35} /></div>
                <div className={styles.card_lower}>
                    <hr></hr>
                    <p>aggarwal.siddharth2003@gmail.com</p>
                </div>
            </div>
        </div>
    )
}